import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveImage from '../components/ResponsiveImage';
import { services } from '../content/services';

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Engineering services</h1>
          <p className="page-hero-lede">
            Logichem Control provides electrical, control and instrumentation
            engineering for industrial plants — three disciplines delivered by one
            accountable team, to each client’s specification.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Service details">
        <div className="container service-list">
          {services.map((s, i) => (
            <article key={s.slug} className={`service-row${i % 2 ? ' is-reversed' : ''}`}>
              <div className="service-row-media">
                <ResponsiveImage
                  imageKey={s.imageKey}
                  alt={s.imageAlt}
                  sizes="(min-width: 900px) 560px, 90vw"
                />
              </div>
              <div className="service-row-body">
                <h2>{s.name}</h2>
                <p>{s.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt cta-band" aria-label="Contact call to action">
        <div className="container">
          <h2>Discuss your project with us</h2>
          <p>Tell us what you need engineered — we’ll take it from there.</p>
          <Link to="/contact" className="btn btn-primary">Get in touch</Link>
        </div>
      </section>
    </>
  );
}
