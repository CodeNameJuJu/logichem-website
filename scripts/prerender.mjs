// Prerenders every route to static HTML in dist/.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { allPrerenderRoutes, seoForPath, notFoundSeo } from '../src/seo/routes.js';
import { company } from '../src/content/site.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');
const { render } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);
const imageManifest = JSON.parse(
  await fs.readFile(path.join(root, 'src', 'data', 'images.json'), 'utf8')
);

function escapeHtml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function headTags(seo, { noindex = false } = {}) {
  const tags = [];
  tags.push(`<title>${escapeHtml(seo.title)}</title>`);
  tags.push(`<meta name="description" content="${escapeHtml(seo.description)}" />`);
  if (noindex) {
    tags.push('<meta name="robots" content="noindex" />');
  }
  if (seo.path) {
    const url = `${company.url}${seo.path}`;
    tags.push(`<link rel="canonical" href="${url}" />`);
    tags.push(`<meta property="og:url" content="${url}" />`);
  }
  tags.push(`<meta property="og:type" content="${seo.ogType || 'website'}" />`);
  tags.push(`<meta property="og:title" content="${escapeHtml(seo.title)}" />`);
  tags.push(`<meta property="og:description" content="${escapeHtml(seo.description)}" />`);
  tags.push(`<meta property="og:image" content="${company.url}/og-image.jpg" />`);
  tags.push(`<meta property="og:image:width" content="1200" />`);
  tags.push(`<meta property="og:image:height" content="630" />`);
  tags.push(`<meta property="og:site_name" content="${company.shortName}" />`);
  tags.push('<meta name="twitter:card" content="summary_large_image" />');
  tags.push(`<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`);
  tags.push(`<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`);
  tags.push(`<meta name="twitter:image" content="${company.url}/og-image.jpg" />`);
  for (const block of seo.jsonLd) {
    tags.push(
      `<script type="application/ld+json">${JSON.stringify(block).replace(/</g, '\\u003c')}</script>`
    );
  }
  return tags.join('\n    ');
}

async function writeRoute(url, seo, { filename = 'index.html', noindex = false } = {}) {
  const appHtml = render(url === '/404' ? '/__not-found__' : url);
  const hero = imageManifest['hero'];
  const preload =
    url === '/' && hero
      ? `\n    <link rel="preload" as="image" href="${hero.src}" imagesrcset="${hero.srcset}" imagesizes="100vw" fetchpriority="high" />`
      : '';
  const html = template
    .replace('<!--%HEAD_TAGS%-->', headTags(seo, { noindex }) + preload)
    .replace('<!--%APP_HTML%-->', appHtml);

  const outPath =
    url === '/' || url === '/404'
      ? path.join(distDir, filename)
      : path.join(distDir, url.slice(1), filename);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, html);
  console.log(`prerendered ${url} -> ${path.relative(distDir, outPath)}`);
}

const routes = allPrerenderRoutes();
for (const url of routes) {
  await writeRoute(url, seoForPath(url));
}
await writeRoute('/404', notFoundSeo(), { filename: '404.html', noindex: true });

// Sitemap.
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (url) => `  <url>
    <loc>${company.url}${url === '/' ? '/' : url}</loc>
    <lastmod>${today}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>
`;
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap);

// Original photo library must never ship to dist.
await fs.rm(path.join(distDir, 'Images'), { recursive: true, force: true });
await fs.rm(ssrDir, { recursive: true, force: true });

console.log(`Done. ${routes.length} routes + 404.html + sitemap.xml`);
