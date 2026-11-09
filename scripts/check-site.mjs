import assert from 'node:assert/strict'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { spawn } from 'node:child_process'
import { createPreviewServer } from './preview.mjs'
import { paths, pageIds, locales } from '../dist-ssr/entry-server.js'

const output = process.env.SEQUO_SITE_QA_DIR || path.join(os.tmpdir(), 'sequo-site-qa')
const profile = fs.mkdtempSync(path.join(os.tmpdir(), 'sequo-site-chrome-'))
const pending = new Map()
const errors = []
let server, browser, socket, nextId = 1
const pause = ms => new Promise(resolve => setTimeout(resolve, ms))
function cdp(method, params = {}, sessionId) {
  return new Promise((resolve, reject) => {
    const id = nextId++
    const timer = setTimeout(() => { pending.delete(id); reject(new Error('CDP timeout: ' + method)) }, 30000)
    pending.set(id, { resolve, reject, timer })
    socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }))
  })
}
async function evaluate(expression, sessionId) {
  const response = await cdp('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true }, sessionId)
  assert(!response.exceptionDetails, JSON.stringify(response.exceptionDetails))
  return response.result.value
}
try {
  fs.mkdirSync(output, { recursive: true })
  let origin = process.env.SEQUO_PREVIEW_URL
  if (!origin) {
    server = createPreviewServer()
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve))
    origin = 'http://127.0.0.1:' + server.address().port
  }
  const knownPaths = new Set(locales.flatMap(locale => pageIds.map(page => paths[locale][page])))
  for (const route of knownPaths) {
    const response = await fetch(origin + route)
    assert.equal(response.status, 200, route)
    const html = await response.text()
    assert(html.includes('<h1') && html.includes('<main'), 'Missing prerendered content: ' + route)
    if (route === '/' || route === '/en') {
      const main = html.match(/<main[\s\S]*?<\/main>/)[0]
      assert(!/SEQUO Vendor|SEQUO Hub|vendor-(dashboard|orders)|hub-(dashboard|history)|role-grid/.test(main), 'Partner content on customer homepage: ' + route)
      assert(main.includes('customer-home.webp') && main.includes('rider-invitation'), 'Missing customer journey or rider invitation: ' + route)
    }
    if (route === paths.fr.relays || route === paths.en.relays) {
      const main = html.match(/<main[\s\S]*?<\/main>/)[0]
      assert(main.includes('retirer-colis') && main.includes('relay-pickup'), 'Missing customer collection guide')
      assert(!main.includes('/screens/hub-') && !main.includes('SEQUO Hub'), 'Operator UI on customer collection page')
      assert(main.includes(route.startsWith('/en') ? paths.en.hubPartners : paths.fr.hubPartners), 'Missing discreet partner link')
    }
    if (route === paths.fr.hubPartners || route === paths.en.hubPartners) assert(html.includes('/screens/hub-dashboard.webp'), 'Missing operator screenshots on partner page')
    if (route === paths.fr.merchants || route === paths.en.merchants) {
      assert(html.includes('merchant-catalogue-partner.webp') && html.includes('merchant-preparation-partner.webp'), 'Missing merchant illustrations')
      assert(html.includes('merchant-checklist') && html.includes('merchant-questions'), 'Missing merchant guidance')
    }
    if (route === paths.fr.riders || route === paths.en.riders) assert(html.includes('rider-sequo-box.webp') && html.includes('rider-journey'), 'Missing rider photo or preserved animated route')
    if (route === paths.fr.relays || route === paths.en.relays) assert(html.includes('relay-empty') && html.includes('points-disponibles'), 'Missing coming-soon relay empty state')
    if (route === paths.fr.access || route === paths.en.access || route === paths.fr.contact || route === paths.en.contact) assert(html.includes('https://wa.me/33780434690'), 'Missing approved WhatsApp contact')
    if (route === paths.fr.app || route === paths.en.app) assert(html.includes('customer-basket.webp') && html.includes('customer-delivery.webp') && html.includes('walkthrough-demo-note'), 'Missing real walkthrough captures/disclosure')
    if ([paths.fr.privacy, paths.en.privacy, paths.fr.terms, paths.en.terms].includes(route)) assert(html.includes('legal-body') && html.includes('Lomé'), 'Missing website notice')
    assert(!html.includes('<!--app-html-->'), route)
    assert(!html.includes('Illustrations de présentation') && !html.includes('Le commerce local, mieux connecté'), route)
    assert(html.includes('sequo-favicon.svg?v=box-20261109') && !html.includes('vue.svg'), route)
    const locale = route.startsWith('/en') ? 'en' : 'fr'
    assert(html.includes(`<html lang="${locale}">`), route)
    assert(html.includes(`rel="canonical" href="https://www.sequoservice.com${route}"`), route)
    for (const href of html.matchAll(/href="(\/[^"?#]*)(?:[^\"]*)?"/g)) {
      if (href[1].startsWith('/assets/') || href[1].startsWith('/brand/') || href[1].includes('.')) continue
      assert(knownPaths.has(href[1]), 'Broken page link: ' + href[1])
    }
  }
  assert.equal((await fetch(origin + '/a-page-that-does-not-exist')).status, 404)
  const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  browser = spawn(chrome, ['--headless=new', '--no-first-run', '--no-default-browser-check', '--disable-background-networking', '--remote-debugging-port=0', '--user-data-dir=' + profile, 'about:blank'], { stdio: 'ignore' })
  const portFile = path.join(profile, 'DevToolsActivePort')
  for (let i = 0; i < 200 && !fs.existsSync(portFile); i++) await pause(100)
  assert(fs.existsSync(portFile), 'Chrome did not start')
  const [port, endpoint] = fs.readFileSync(portFile, 'utf8').trim().split('\n')
  socket = new WebSocket('ws://127.0.0.1:' + port + endpoint)
  await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }) })
  socket.addEventListener('message', event => {
    const data = JSON.parse(event.data)
    const waiter = pending.get(data.id)
    if (waiter) { clearTimeout(waiter.timer); pending.delete(data.id); data.error ? waiter.reject(new Error(JSON.stringify(data.error))) : waiter.resolve(data.result) }
    if (data.method === 'Runtime.exceptionThrown') errors.push(data.params.exceptionDetails.text)
    if (data.method === 'Runtime.consoleAPICalled' && data.params.type === 'error') errors.push(data.params.args.map(arg => arg.value || arg.description).join(' '))
  })
  const { targetId } = await cdp('Target.createTarget', { url: 'about:blank' })
  const { sessionId } = await cdp('Target.attachToTarget', { targetId, flatten: true })
  await cdp('Page.enable', {}, sessionId)
  await cdp('Runtime.enable', {}, sessionId)
  const results = []
  for (const width of [1440, 1024, 390, 320]) {
    await cdp('Emulation.setDeviceMetricsOverride', { width, height: width === 1440 ? 1000 : 844, deviceScaleFactor: 1, mobile: false }, sessionId)
    for (const locale of locales) {
      for (const page of pageIds) {
        const route = paths[locale][page]
        await cdp('Page.navigate', { url: origin + route }, sessionId)
        let state
        for (let attempt = 0; attempt < 100; attempt++) {
          state = await evaluate(`JSON.stringify((() => { document.querySelectorAll('img').forEach(image => image.loading = 'eager'); return { ready: document.readyState, path: location.pathname, width: innerWidth, scrollWidth: document.documentElement.scrollWidth, images: [...document.images].filter(image => !image.closest('dialog')).map(image => ({ src: image.getAttribute('src'), ok: image.complete && image.naturalWidth > 0 })) } })())`, sessionId)
          state = JSON.parse(state)
          if (state.path === route && state.ready === 'complete' && state.images.every(image => image.ok)) break
          await pause(50)
        }
        assert.equal(state.path, route)
        assert(state.images.every(image => image.ok), JSON.stringify({ route, images: state.images }))
        assert(state.scrollWidth <= width, `Overflow on ${route} at ${width}: ${state.scrollWidth}`)
        assert.equal(await evaluate('document.querySelectorAll("main h1").length', sessionId), 1)
        assert.equal(await evaluate(`document.querySelector('a[hreflang="${locale === 'fr' ? 'en' : 'fr'}"]').getAttribute('href')`, sessionId), paths[locale === 'fr' ? 'en' : 'fr'][page])
        if (width === 390) {
          await evaluate('document.querySelector(".menu-toggle").focus(); document.querySelector(".menu-toggle").click()', sessionId)
          assert(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded") === "true"', sessionId))
          await cdp('Input.dispatchKeyEvent', { type: 'keyDown', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 }, sessionId)
          await cdp('Input.dispatchKeyEvent', { type: 'keyUp', key: 'Escape', code: 'Escape', windowsVirtualKeyCode: 27 }, sessionId)
          assert(await evaluate('document.querySelector(".menu-toggle").getAttribute("aria-expanded") === "false"', sessionId))
        }
        if (page === 'help' && width === 390) {
          await evaluate(`(() => { const input = document.querySelector('input[type="search"]'); input.value = 'zxz-no-result'; input.dispatchEvent(new Event('input', { bubbles: true })); })()`, sessionId)
          await pause(30)
          assert(await evaluate('!!document.querySelector(".empty-search")', sessionId))
          await evaluate('document.querySelector(".empty-search button").click()', sessionId)
          await pause(30)
          assert.equal(await evaluate('document.querySelectorAll(".faq-list details").length', sessionId), 9)
          await evaluate('document.querySelector(".faq-list summary").click()', sessionId)
          assert(await evaluate('document.querySelector(".faq-list details").open', sessionId))
        }
        if (page === 'app' && width === 390) {
          await evaluate('document.querySelector(".screen-section .screen-tabs button:last-child").click()', sessionId)
          await pause(30)
          assert(await evaluate('document.querySelector(".screen-section .screen-tabs button:last-child").getAttribute("aria-pressed") === "true"', sessionId))
          await evaluate('document.querySelector(".screen-open").click()', sessionId)
          assert(await evaluate('document.querySelector("dialog").open', sessionId))
          await evaluate('document.querySelector("dialog .dialog-close").click()', sessionId)
          assert(!(await evaluate('document.querySelector("dialog").open', sessionId)))
        }
        if (page === 'riders' && width !== 320) {
          const journeyTop = await evaluate('document.querySelector(".rider-journey").offsetTop', sessionId)
          await evaluate(`window.scrollTo({ top: ${journeyTop}, behavior: 'instant' })`, sessionId)
          await pause(100)
          const start = await evaluate('document.querySelector(".rider-journey .rider-marker").getAttribute("transform")', sessionId)
          await evaluate(`window.scrollTo({ top: ${journeyTop + 400}, behavior: 'instant' })`, sessionId)
          await pause(100)
          const end = await evaluate('document.querySelector(".rider-journey .rider-marker").getAttribute("transform")', sessionId)
          assert.notEqual(start, end, 'Rider should move with document scrolling')
          assert(await evaluate('(() => { const r = document.querySelector(".rider-journey-visual").getBoundingClientRect(); return r.top >= 0 && r.top < innerHeight && r.bottom > 0 })()', sessionId), 'Route should stay visible while scrolling')
          await cdp('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] }, sessionId)
          await pause(100)
          const still = await evaluate('document.querySelector(".rider-journey .rider-marker").getAttribute("transform")', sessionId)
          await evaluate(`window.scrollTo({ top: ${journeyTop + 100}, behavior: 'instant' })`, sessionId)
          await pause(100)
          assert.equal(await evaluate('document.querySelector(".rider-journey .rider-marker").getAttribute("transform")', sessionId), still, 'Reduced motion should keep the rider still')
          assert.equal(await evaluate('getComputedStyle(document.querySelector(".rider-signal")).animationName', sessionId), 'none')
          await cdp('Emulation.setEmulatedMedia', { features: [] }, sessionId)
          await evaluate("window.scrollTo({ top: 0, behavior: 'instant' })", sessionId)
          await pause(100)
        }
        if (page === 'merchants' || page === 'home' || page === 'about' || page === 'riders') {
          assert(await evaluate(`[...document.querySelectorAll('figure')].filter(f => f.querySelector('img[src^="/images/"]')).every(f => f.querySelector('.ai-label')?.textContent.includes(${JSON.stringify(locale === 'fr' ? 'IA' : 'AI')}))`, sessionId), 'Missing visible AI disclosure')
        }
        if (page === 'merchants' && width === 390) {
          assert.equal(await evaluate('document.querySelectorAll(".merchant-questions details").length', sessionId), 4)
          await evaluate('document.querySelector(".merchant-questions summary").click()', sessionId)
          assert(await evaluate('document.querySelector(".merchant-questions details").open', sessionId))
        }
        if (page === 'app') assert.equal(await evaluate('document.querySelectorAll(".walkthrough-grid > li").length', sessionId), 3)
        if (page === 'privacy' || page === 'terms') {
          assert(await evaluate('document.querySelectorAll(".legal-toc a").length >= 5', sessionId))
          assert(await evaluate('[...document.querySelectorAll(".legal-toc a")].every(a => document.getElementById(a.hash.slice(1)))', sessionId), 'Broken notice contents link')
        }
        if (page === 'contact') {
          assert(!(await evaluate('document.querySelector("form").checkValidity()', sessionId)))
          assert(await evaluate('document.querySelector(".form-note").textContent.length > 30', sessionId))
        }
        if ((locale === 'fr' && width !== 320) || (locale === 'en' && page === 'home' && width !== 320)) {
          const capture = await cdp('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false }, sessionId)
          fs.writeFileSync(path.join(output, `${locale}-${page}-${width}.png`), Buffer.from(capture.data, 'base64'))
        }
        results.push({ locale, page, width, passed: true })
      }
    }
  }
  assert.deepEqual(errors, [], 'Browser console/hydration errors')
  fs.writeFileSync(path.join(output, 'validation.json'), JSON.stringify({ prerenderedPages: knownPaths.size, checks: results, errors }, null, 2) + '\n')
  console.log(`PASS ${knownPaths.size} prerendered routes; ${results.length} responsive page checks; language links, image gallery, menu, help search, rider motion, required form fields and 404; no console/hydration errors.`)
} finally {
  for (const waiter of pending.values()) clearTimeout(waiter.timer)
  if (socket) socket.close()
  if (browser && browser.exitCode === null) { const exited = new Promise(resolve => browser.once('exit', resolve)); browser.kill('SIGTERM'); await exited }
  if (server) server.close()
  fs.rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 100 })
}
