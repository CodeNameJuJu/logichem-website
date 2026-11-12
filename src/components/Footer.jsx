import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { company } from '../content/site';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-heading">{company.shortName}</h2>
          <p>
            We prioritise the delivery of high-quality engineering solutions tailored to
            client specifications, leveraging our extensive experience and upholding a
            strong commitment to transparency.
          </p>
        </div>
        <div>
          <h2 className="footer-heading">Hours</h2>
          {company.hours.map((h) => (
            <p key={h.days}>
              {h.days} {h.time}
            </p>
          ))}
        </div>
        <div>
          <h2 className="footer-heading">Navigation</h2>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="footer-heading">Contact</h2>
          <p>
            <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />{' '}
            <a href={company.address.mapsUrl} target="_blank" rel="noopener noreferrer">
              {company.address.display}
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />{' '}
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} aria-hidden="true" />{' '}
            <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phoneDisplay}</a>
          </p>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {year} {company.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
