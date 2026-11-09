import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export function createPreviewServer(directory = 'dist') {
  const root = path.resolve(directory)
  const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.webmanifest': 'application/manifest+json' }
  return http.createServer((request, response) => {
    let pathname
    try { pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname) } catch { response.writeHead(400); response.end(); return }
    const file = path.resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname))
    if (!file.startsWith(root + path.sep)) { response.writeHead(403); response.end(); return }
    let resolved = file
    if (!path.extname(file) && fs.existsSync(file + '.html')) resolved += '.html'
    if (!fs.existsSync(resolved) || !fs.statSync(resolved).isFile()) {
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
      response.end(fs.readFileSync(path.join(root, '404.html'))); return
    }
    response.setHeader('Content-Type', types[path.extname(resolved)] || 'application/octet-stream')
    response.end(fs.readFileSync(resolved))
  })
}
if (fileURLToPath(import.meta.url) === path.resolve(process.argv[1] || '')) {
  const arg = process.argv.indexOf('--port')
  const port = arg >= 0 ? Number(process.argv[arg + 1]) : 4185
  createPreviewServer().listen(port, '127.0.0.1', () => console.log(`Local: http://127.0.0.1:${port}`))
}
