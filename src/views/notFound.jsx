import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container measure">
        <h1>Page not found</h1>
        <p className="section-lede">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <div className="hero-ctas">
          <Link to="/" className="btn btn-primary">Back to home</Link>
          <Link to="/contact" className="btn btn-outline">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
