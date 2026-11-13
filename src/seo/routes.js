import { company } from '../content/site.js';
import { services } from '../content/services.js';
import { industries } from '../content/industries.js';
import { countryNames } from '../content/countries.js';
import { faq } from '../content/home.js';

const BASE = company.url;
const OG_IMAGE = `${BASE}/og-image.jpg`;

const organization = {
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: company.name,
  url: BASE,
  logo: `${BASE}/img/logo.png`,
  email: company.email,
  foundingDate: String(company.founded),
};

const professionalService = {
  '@type': 'ProfessionalService',
  '@id': `${BASE}/#business`,
  name: company.name,
  url: BASE,
  image: OG_IMAGE,
  logo: `${BASE}/img/logo.png`,
  email: company.email,
  telephone: company.phone,
  foundingDate: String(company.founded),
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: company.address.street,
    addressLocality: company.address.locality,
    addressRegion: company.address.region,
    postalCode: company.address.postalCode,
    addressCountry: company.address.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: company.address.geo.lat,
    longitude: company.address.geo.lng,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:30',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '07:30',
      closes: '15:00',
    },
  ],
  areaServed: countryNames.map((name) => ({ '@type': 'Country', name })),
  knowsAbout: [
    'Electrical engineering',
    'Control engineering',
    'Instrumentation engineering',
    'Industrial automation',
    'SCADA',
    'PLC',
  ],
};

const orgGraph = { '@context': 'https://schema.org', '@graph': [organization, professionalService] };

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@graph': services.map((s) => ({
    '@type': 'Service',
    name: s.name,
    description: s.description,
    provider: { '@id': `${BASE}/#business` },
    areaServed: countryNames.map((name) => ({ '@type': 'Country', name })),
  })),
};

function breadcrumb(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.path}`,
    })),
  };
}

export const routeSeo = {
  '/': {
    title: 'Logichem Control | Electrical, Control & Instrumentation',
    description:
      'Logichem Control (Pty) Ltd: electrical, control and instrumentation engineering since 1990, delivering industrial projects in 34 countries from Lonehill, Sandton.',
    path: '/',
    jsonLd: [orgGraph, faqJsonLd],
    ogType: 'website',
  },
  '/services': {
    title: 'Services | Logichem Control Engineering',
    description:
      'Electrical, control and instrumentation engineering services for industrial plants — PLC, SCADA and automation solutions delivered to client specifications.',
    path: '/services',
    jsonLd: [orgGraph, servicesJsonLd],
    ogType: 'website',
  },
  '/industries': {
    title: 'Industries We Serve | Logichem Control',
    description:
      'Logichem Control engineers for automation, biochem plants, power plants, process plants, and ventilation and cooling — industrial projects across 34 countries.',
    path: '/industries',
    jsonLd: [orgGraph],
    ogType: 'website',
  },
  '/contact': {
    title: 'Contact Logichem Control | Lonehill, Sandton',
    description:
      'Get in touch with Logichem Control (Pty) Ltd in Lonehill, Sandton. Call +27 11 465 2718 or email info@logichem.co.za to discuss your engineering project.',
    path: '/contact',
    jsonLd: [orgGraph],
    ogType: 'website',
  },
};

export function industrySeo(industry) {
  return {
    title: `${industry.name} | Industries | Logichem Control`,
    description: `${industry.intro.slice(0, 155).replace(/\s+\S*$/, '')}…`,
    path: `/industries/${industry.slug}`,
    jsonLd: [
      orgGraph,
      breadcrumb([
        { name: 'Home', path: '/' },
        { name: 'Industries', path: '/industries' },
        { name: industry.name, path: `/industries/${industry.slug}` },
      ]),
    ],
    ogType: 'article',
  };
}

export function notFoundSeo() {
  return {
    title: 'Page not found | Logichem Control',
    description: 'The page you are looking for does not exist. Return to the Logichem Control homepage.',
    path: null,
    jsonLd: [],
    ogType: 'website',
  };
}

export function allPrerenderRoutes() {
  return [
    '/',
    '/services',
    '/industries',
    ...industries.map((i) => `/industries/${i.slug}`),
    '/contact',
  ];
}

export function seoForPath(pathname) {
  const industry = industries.find((i) => `/industries/${i.slug}` === pathname);
  if (industry) return industrySeo(industry);
  return routeSeo[pathname] || notFoundSeo();
}
