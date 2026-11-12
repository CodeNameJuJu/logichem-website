import React from 'react';
import { Link, useParams } from 'react-router-dom';
import ResponsiveImage from '../components/ResponsiveImage';
import { industries } from '../content/industries';
import NotFound from './notFound';

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return <NotFound />;

  const others = industries.filter((i) => i.slug !== slug);

  return (
    <>
      <nav className="breadcrumbs container" aria-label="Breadcrumb">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/industries">Industries</Link></li>
          <li aria-current="page">{industry.name}</li>
        </ol>
      </nav>

      <section className="section section-tight" aria-labelledby="industry-heading">
        <div className="container">
          <div className="industry-intro">
            <h1 id="industry-heading">{industry.name}</h1>
            <p>{industry.intro}</p>
          </div>
        </div>
      </section>

      <section className="section section-tight" aria-label={`${industry.name} project gallery`}>
        <div className="container">
          <div className="gallery-grid">
            {industry.gallery.map((g) => (
              <ResponsiveImage
                key={g.imageKey}
                imageKey={g.imageKey}
                alt={g.alt}
                sizes="(min-width: 900px) 560px, 90vw"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" aria-label="Other industries">
        <div className="container">
          <h2 className="section-heading">Other industries we serve</h2>
          <ul className="chips">
            {others.map((i) => (
              <li key={i.slug}>
                <Link className="chip chip-link" to={`/industries/${i.slug}`}>{i.name}</Link>
              </li>
            ))}
          </ul>
          <p className="section-more">
            <Link to="/contact" className="btn btn-primary">Discuss your project</Link>
          </p>
        </div>
      </section>
    </>
  );
}
