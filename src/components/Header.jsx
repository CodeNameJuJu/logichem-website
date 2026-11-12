import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import images from '../data/images.json';
import { company } from '../content/site';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Industries', path: '/industries' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const logo = images.logo;

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link to="/" className="brand" title={company.shortName}>
          <img
            src={logo.src}
            width={logo.width}
            height={logo.height}
            alt={`${company.shortName} logo`}
            decoding="async"
          />
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
        <nav
          id="primary-nav"
          className={`primary-nav${open ? ' is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn-primary nav-cta">
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
