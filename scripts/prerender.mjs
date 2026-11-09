import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { render, paths, pageIds, locales, pageMeta } from '../dist-ssr/entry-server.js'

const origin = 'https://www.sequoservice.com'
const template = await readFile('dist/index.html', 'utf8')
const escape = value => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const xml = []
for (const locale of locales) {
  for (const page of pageIds) {
    const route = paths[locale][page]
    const meta = pageMeta(locale, page)
    const alternate = other => `${origin}${paths[other][page]}`
    const head = `<title>${escape(meta.title)}</title>
    <meta name="description" content="${escape(meta.description)}" />
    <link rel="canonical" href="${origin}${route}" />
    <link rel="alternate" hreflang="fr" href="${alternate('fr')}" />
    <link rel="alternate" hreflang="en" href="${alternate('en')}" />
    <link rel="alternate" hreflang="x-default" href="${alternate('fr')}" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="${locale === 'fr' ? 'fr_FR' : 'en_GB'}" />
    <meta property="og:title" content="${escape(meta.title)}" />
    <meta property="og:description" content="${escape(meta.description)}" />
    <meta property="og:url" content="${origin}${route}" />
    <meta property="og:image" content="${origin}/images/commerce-local-partner.webp" />
    <meta property="og:image:alt" content="${locale === 'fr' ? 'Illustration du commerce local avec SEQUO' : 'Illustration of local commerce with SEQUO'}" />`
    const html = template.replace('<html lang="fr">', `<html lang="${locale}">`).replace('<!--page-head-->', head).replace('<!--app-html-->', await render(route))
    if (html.includes('<!--app-html-->') || !html.includes('<h1')) throw new Error('Missing rendered page: ' + route)
    const target = route === '/' ? 'dist/index.html' : `dist${route}.html`
    await mkdir(path.dirname(target), { recursive: true })
    await writeFile(target, html)
    xml.push(`<url><loc>${origin}${route}</loc><xhtml:link rel="alternate" hreflang="fr" href="${alternate('fr')}"/><xhtml:link rel="alternate" hreflang="en" href="${alternate('en')}"/></url>`)
  }
}
await writeFile('dist/404.html', template.replace('<!--page-head-->', '<title>Page introuvable — SEQUO</title><meta name="robots" content="noindex" />').replace('<!--app-html-->', await render('/404')))
await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${xml.join('')}</urlset>`)
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`)
console.log(`Prerendered ${locales.length * pageIds.length} French/English pages, 404 page and sitemap.`)
