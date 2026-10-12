#!/usr/bin/env node
// Renderiza um diagrama Mermaid (.mmd) para PNG.
//
// Uso:
//   node render_mermaid.mjs --in <fluxo.mmd> --out <fluxo.png> \
//        --mermaid-dir <dir-com-node_modules/mermaid> [--width 1200]
//
// O mermaid ESM tem sub-chunks; por isso servimos o diretório via HTTP local
// (import de file:// é bloqueado por CORS no Chromium).
//
// Preparar o mermaid (uma vez):  cd <mermaid-dir> && npm i mermaid@11
// Requer: playwright + Chromium (ver render_prototype.mjs).
import { chromium } from 'playwright';
import { createServer } from 'http';
import { readFile, readFileSync } from 'fs';
import { existsSync, readdirSync } from 'fs';
import { join, extname } from 'path';

function arg(name, def) {
  const i = process.argv.indexOf('--' + name);
  return i >= 0 ? process.argv[i + 1] : def;
}
function findChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  if (existsSync(base)) {
    const dir = readdirSync(base).find((d) => d.startsWith('chromium-'));
    if (dir) return `${base}/${dir}/chrome-linux/chrome`;
  }
  return undefined;
}

const input = arg('in');
const output = arg('out');
const mermaidDir = arg('mermaid-dir', process.cwd());
const width = parseInt(arg('width', '1200'), 10);
if (!input || !output) {
  console.error('faltam --in e/ou --out');
  process.exit(1);
}
const code = readFileSync(input, 'utf8');

const MIME = { '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.html': 'text/html', '.map': 'application/json' };
const server = createServer((req, res) => {
  const url = req.url === '/' ? '/blank.html' : req.url.split('?')[0];
  if (url === '/blank.html') {
    res.setHeader('Content-Type', 'text/html');
    return res.end('<!doctype html><meta charset=utf-8><body style="margin:0;padding:24px;background:#fff"><div id="out"></div>');
  }
  const fp = join(mermaidDir, decodeURIComponent(url));
  readFile(fp, (err, data) => {
    if (err) { res.statusCode = 404; return res.end('404'); }
    res.setHeader('Content-Type', MIME[extname(fp)] || 'application/octet-stream');
    res.end(data);
  });
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const port = server.address().port;
const base = `http://127.0.0.1:${port}`;
const mermaidUrl = `${base}/node_modules/mermaid/dist/mermaid.esm.min.mjs`;

const browser = await chromium.launch({ executablePath: findChromium() });
const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
await page.goto(`${base}/blank.html`, { waitUntil: 'load' });
await page.evaluate(async (u) => {
  const mermaid = (await import(u)).default;
  window.__m = mermaid;
  mermaid.initialize({ startOnLoad: false, theme: 'default', flowchart: { htmlLabels: true, curve: 'basis' } });
}, mermaidUrl);
await page.evaluate(async (c) => {
  const { svg } = await window.__m.render('g', c);
  document.getElementById('out').innerHTML = svg;
  const el = document.querySelector('#out svg');
  el.removeAttribute('height');
  el.style.maxWidth = 'none';
}, code);
await page.waitForTimeout(300);
const el = await page.$('#out svg');
await el.screenshot({ path: output });
await browser.close();
server.close();
console.log('OK ->', output);
