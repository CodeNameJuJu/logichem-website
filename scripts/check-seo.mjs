// Verifies prerendered HTML in dist/: real content, unique title/description,
// canonical, OG tags and parseable JSON-LD.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');

const routes = [
  '/index.html',
  '/services/index.html',
  '/industries/index.html',
  '/industries/automation/index.html',
  '/industries/biochem-plants/index.html',
  '/industries/power-plants/index.html',
  '/industries/process-plants/index.html',
  '/industries/ventilation-and-cooling/index.html',
  '/contact/index.html',
  '/404.html',
];

let failures = 0;
const titles = new Set();
const descriptions = new Set();

const fail = (route, msg) => {
  failures++;
  console.error(`FAIL ${route}: ${msg}`);
};

for (const route of routes) {
  const file = path.join(distDir, route);
  let html;
  try {
    html = await fs.readFile(file, 'utf8');
  } catch {
    fail(route, 'file missing');
    continue;
  }

  const rootStart = html.indexOf('<div id="root">');
  const bodyEnd = html.indexOf('</body>');
  const rootContent =
    rootStart === -1 || bodyEnd === -1
      ? ''
      : html.slice(rootStart, bodyEnd).replace(/<!--.*?-->/g, '');
  if (rootContent.trim().length < 200) {
    fail(route, 'empty #root (not prerendered)');
  }

  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  if (!title) fail(route, 'missing <title>');
  else if (titles.has(title)) fail(route, `duplicate title "${title}"`);
  else titles.add(title);

  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!desc) fail(route, 'missing meta description');
  else if (descriptions.has(desc)) fail(route, 'duplicate description');
  else descriptions.add(desc);

  if (route !== '/404.html' && !/<link rel="canonical" href="https:\/\/logichem\.co\.za/.test(html)) {
    fail(route, 'missing canonical');
  }
  if (!/<meta property="og:title"/.test(html)) fail(route, 'missing og:title');
  if (!/<meta property="og:image"/.test(html)) fail(route, 'missing og:image');
  if (!/<meta name="twitter:card"/.test(html)) fail(route, 'missing twitter:card');

  const ldBlocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (route !== '/404.html' && ldBlocks.length === 0) fail(route, 'no JSON-LD');
  for (const [i, m] of ldBlocks.entries()) {
    try {
      JSON.parse(m[1]);
    } catch (e) {
      fail(route, `JSON-LD block ${i} does not parse: ${e.message}`);
    }
  }

  console.log(`ok ${route} — title: "${title}", ${ldBlocks.length} JSON-LD block(s)`);
}

if (failures === 0) {
  console.log('\nAll SEO checks passed.');
} else {
  console.error(`\n${failures} check(s) failed.`);
  process.exit(1);
}
