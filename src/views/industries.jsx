import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../components/ResponsiveImage';
import { industries } from '../content/industries';

export default function Industries() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Industries we serve</h1>
          <p className="page-hero-lede">
            Logichem Control engineers electrical, control and instrumentation
            solutions for five industries: automation, biochem plants, power plants,
            process plants, and ventilation and cooling.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Industry list">
        <div className="container">
          <div className="card-grid card-grid-2">
            {industries.map((ind) => (
              <Link key={ind.slug} to={`/industries/${ind.slug}`} className="card card-image">
                <ResponsiveImage
                  imageKey={ind.cardImageKey}
                  alt={ind.cardAlt}
                  sizes="(min-width: 900px) 560px, 90vw"
                />
                <div className="card-image-body">
                  <h2>{ind.name}</h2>
                  <span className="card-link">View industry</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
