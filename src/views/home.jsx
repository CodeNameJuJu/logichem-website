import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faBullseye, faUsers } from '@fortawesome/free-solid-svg-icons';
import ResponsiveImage from '../components/ResponsiveImage';
import MapSection from '../components/MapSection';
import { hero, stats, about, vision, values, faq } from '../content/home';
import { services } from '../content/services';
import { industries } from '../content/industries';

const icons = { trophy: faTrophy, bullseye: faBullseye, users: faUsers };

export default function Home() {
  return (
    <>
      <section className="hero">
        <ResponsiveImage
          imageKey="hero"
          alt=""
          eager
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <h1>{hero.heading}</h1>
          <p className="hero-subhead">{hero.subhead}</p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">Get in touch</Link>
            <Link to="/services" className="btn btn-outline-light">Our services</Link>
          </div>
        </div>
      </section>

      <section className="stats-strip" aria-label="Company facts">
        <div className="container stats-grid">
          {stats.map((s) => (
            <div key={s.value} className="stat">
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="about-heading">
        <div className="container measure">
          <h2 id="about-heading" className="section-heading">{about.heading}</h2>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 32)} className="section-lede">{p}</p>
          ))}
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="services-heading">
        <div className="container">
          <h2 id="services-heading" className="section-heading">What we do</h2>
          <div className="card-grid card-grid-3">
            {services.map((s) => (
              <article key={s.slug} className="card">
                <FontAwesomeIcon icon={icons[s.icon] || faBullseye} className="card-icon" aria-hidden="true" />
                <h3>{s.name}</h3>
                <p>{s.description}</p>
              </article>
            ))}
          </div>
          <p className="section-more">
            <Link to="/services">More about our services</Link>
          </p>
        </div>
      </section>

      <MapSection />

      <section className="section section-alt" aria-labelledby="industries-heading">
        <div className="container">
          <h2 id="industries-heading" className="section-heading">Industries we serve</h2>
          <div className="card-grid card-grid-3">
            {industries.map((ind) => (
              <Link key={ind.slug} to={`/industries/${ind.slug}`} className="card card-image">
                <ResponsiveImage
                  imageKey={ind.cardImageKey}
                  alt={ind.cardAlt}
                  sizes="(min-width: 992px) 360px, (min-width: 600px) 45vw, 90vw"
                />
                <div className="card-image-body">
                  <h3>{ind.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="vision-heading">
        <div className="container">
          <h2 id="vision-heading" className="section-heading">Our vision</h2>
          <div className="card-grid card-grid-3">
            {vision.map((v) => (
              <article key={v.title} className="card">
                <FontAwesomeIcon icon={icons[v.icon]} className="card-icon" aria-hidden="true" />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-labelledby="values-heading">
        <div className="container measure">
          <h2 id="values-heading" className="section-heading">Company values</h2>
          <ul className="chips">
            {values.map((v) => (
              <li key={v} className="chip">{v}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="faq-heading">
        <div className="container measure">
          <h2 id="faq-heading" className="section-heading">Frequently asked questions</h2>
          <div className="faq-list">
            {faq.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
