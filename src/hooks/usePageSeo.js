import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoForPath } from '../seo/routes';
import { company } from '../content/site';

// Keeps document title/meta in sync on client-side navigation. The
// prerendered HTML already ships the correct tags; this only matters
// after in-app navigation.
export function usePageSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = seoForPath(pathname);
    document.title = seo.title;

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [key, kval] = selector.match(/\[(name|property)="([^"]+)"\]/).slice(1);
        el.setAttribute(key, kval);
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    setMeta('meta[name="description"]', 'content', seo.description);
    setMeta('meta[property="og:title"]', 'content', seo.title);
    setMeta('meta[property="og:description"]', 'content', seo.description);
    if (seo.path) {
      setMeta('meta[property="og:url"]', 'content', `${company.url}${seo.path}`);
      let canonical = document.head.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.rel = 'canonical';
        document.head.appendChild(canonical);
      }
      canonical.href = `${company.url}${seo.path}`;
    }
  }, [pathname]);
}
