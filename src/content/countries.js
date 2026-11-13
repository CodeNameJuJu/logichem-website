// ISO 3166-1 numeric ids, matching world-atlas countries-110m.json feature ids.
export const countryRegions = [
  {
    region: 'Southern Africa',
    countries: [
      { name: 'South Africa', id: 710 },
      { name: 'Botswana', id: 72 },
      { name: 'Namibia', id: 516 },
      { name: 'Zimbabwe', id: 716 },
      { name: 'Mauritius', id: 480 },
    ],
  },
  {
    region: 'East and Central Africa',
    countries: [
      { name: 'Tanzania', id: 834 },
      { name: 'Uganda', id: 800 },
      { name: 'Ethiopia', id: 231 },
      { name: 'Eritrea', id: 232 },
      { name: 'Democratic Republic of the Congo', id: 180 },
      { name: 'Gabon', id: 266 },
      { name: 'Zambia', id: 894 },
    ],
  },
  {
    region: 'West Africa',
    countries: [
      { name: 'Ivory Coast', id: 384 },
      { name: 'Mali', id: 466 },
      { name: 'Liberia', id: 430 },
      { name: 'Ghana', id: 288 },
    ],
  },
  {
    region: 'Europe and Central Asia',
    countries: [
      { name: 'Turkey', id: 792 },
      { name: 'Hungary', id: 348 },
      { name: 'Croatia', id: 191 },
      { name: 'Norway', id: 578 },
      { name: 'Lithuania', id: 440 },
      { name: 'Russia', id: 643 },
      { name: 'Kazakhstan', id: 398 },
      { name: 'Uzbekistan', id: 860 },
      { name: 'Kyrgyzstan', id: 417 },
    ],
  },
  {
    region: 'Middle East and Asia-Pacific',
    countries: [
      { name: 'United Arab Emirates', id: 784 },
      { name: 'Iran', id: 364 },
      { name: 'Singapore', id: 702 },
      { name: 'Australia', id: 36 },
    ],
  },
  {
    region: 'South America',
    countries: [
      { name: 'Brazil', id: 76 },
      { name: 'Chile', id: 152 },
      { name: 'Peru', id: 604 },
      { name: 'Colombia', id: 170 },
      { name: 'Guyana', id: 328 },
    ],
  },
];

export const countryIds = new Set(
  countryRegions.flatMap((r) => r.countries.map((c) => c.id))
);

export const countryNames = countryRegions.flatMap((r) =>
  r.countries.map((c) => c.name)
);
