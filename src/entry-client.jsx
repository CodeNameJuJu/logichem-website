import './styles/global.css';
import React from 'react';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// Redirect legacy hash URLs (/#/projects/powerplants -> /industries/power-plants)
const hashRedirects = {
  '#/projects/automation': '/industries/automation',
  '#/projects/biochemplants': '/industries/biochem-plants',
  '#/projects/powerplants': '/industries/power-plants',
  '#/projects/processplants': '/industries/process-plants',
  '#/projects/ventilationandcooling': '/industries/ventilation-and-cooling',
  '#/projects': '/industries',
  '#home': '/',
  '#services': '/services',
  '#industries': '/industries',
  '#contact': '/contact',
};

const hash = window.location.hash.replace(/\/+$/, '').toLowerCase();
if (hash && hash !== '#') {
  const target =
    hashRedirects[hash] ??
    hashRedirects[hash.split('/').slice(0, 2).join('/')] ??
    null;
  if (target) {
    window.history.replaceState(null, '', target);
  }
}

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

const rootEl = document.getElementById('root');
if (import.meta.env.DEV) {
  createRoot(rootEl).render(app);
} else {
  hydrateRoot(rootEl, app);
}
