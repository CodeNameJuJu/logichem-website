import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { countryRegions } from '../content/countries';

const CountriesMap = lazy(() => import('./CountriesMap'));

export default function MapSection() {
  const ref = useRef(null);
  const [showMap, setShowMap] = useState(false);
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      setShowMap(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" aria-labelledby="map-heading">
      <div className="container">
        <h2 id="map-heading" className="section-heading">
          Delivering projects in 34 countries
        </h2>
        <p className="section-lede">
          From our base in Lonehill, Sandton, Logichem Control has delivered engineering
          projects across Africa, Europe, the Middle East, Asia-Pacific and South America.
        </p>
        <div className="map-frame" ref={ref}>
          {isBrowser && showMap ? (
            <Suspense fallback={<div className="map-placeholder" aria-hidden="true" />}>
              <CountriesMap />
            </Suspense>
          ) : (
            <div className="map-placeholder" aria-hidden="true" />
          )}
        </div>
        <div className="country-list">
          {countryRegions.map((group) => (
            <div key={group.region} className="country-region">
              <div className="country-region-header">
                <h3>{group.region}</h3>
                <span className="country-count">
                  {group.countries.length} {group.countries.length === 1 ? 'country' : 'countries'}
                </span>
              </div>
              <ul>
                {[...group.countries]
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((c) => (
                    <li key={c.id}>{c.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
