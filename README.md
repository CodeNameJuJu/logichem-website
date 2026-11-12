# Logichem Control website

Marketing site for Logichem Control (Pty) Ltd — https://logichem.co.za.
React 18 + Vite with static prerendering (SSG) to `dist/`.

## Develop

```bash
npm install
npm run dev        # vite dev server
```

## Build

```bash
npm run build      # vite client build + SSR bundle + prerender to dist/
npm run preview    # serve the production build locally
```

Every route is prerendered to `dist/<route>/index.html` with its own title,
meta description, canonical URL, Open Graph tags and JSON-LD. Page metadata
lives in `src/seo/routes.js`; all page copy lives in `src/content/`.

## Images

Original photos stay in `public/Images` (excluded from the build output).
To regenerate the responsive WebP variants in `public/img/` plus favicons and
`og-image.jpg`:

```bash
npm run images     # scripts/optimise-images.mjs (uses sharp)
```

## Verify SEO output

```bash
npm run check-seo  # validates prerendered HTML in dist/
```

## Deploy

- **cPanel (Apache):** upload the *contents* of `dist/` — including
  `.htaccess` — to the web root. The `.htaccess` forces HTTPS, serves the
  prerendered pages, sets caching and maps 404s to `/404.html`.
- **Railway:** automatic via `railway.json` — builds with `npm run build`,
  serves `dist/` with `npx serve`.
