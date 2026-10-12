#!/usr/bin/env node
// Renderiza um protótipo HTML (CAIXA DS, recursos locais) para PNG de página inteira.
//
// Uso:
//   node render_prototype.mjs --in <arquivo.html> --out <arquivo.png> [--width 1280]
//
// Requer: playwright + Chromium. Neste ambiente o Chromium já vem em
//   /opt/pw-browsers/chromium-*/chrome-linux/chrome  (PLAYWRIGHT_BROWSERS_PATH).
import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
import { existsSync, readdirSync } from 'fs';

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
  return undefined; // deixa o playwright resolver o default
}

const input = arg('in');
const output = arg('out');
const width = parseInt(arg('width', '1280'), 10);
if (!input || !output) {
  console.error('faltam --in e/ou --out');
  process.exit(1);
}

const browser = await chromium.launch({ executablePath: findChromium() });
const page = await browser.newPage({
  viewport: { width, height: 900 },
  deviceScaleFactor: 2,
});
await page.goto(pathToFileURL(input).href, { waitUntil: 'networkidle' });
await page.waitForTimeout(400);
await page.evaluate(() => {
  const b = document.querySelector('.dsc-proto-badge'); // remove selo flutuante de protótipo
  if (b) b.remove();
});
await page.screenshot({ path: output, fullPage: true });
await browser.close();
console.log('OK ->', output);
