import React, { Suspense, lazy, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

// Lazy load the components
const Home = lazy(() => import('./views/home'));
const Services = lazy(() => import('./views/services'));
const Projects = lazy(() => import('./views/projects'));
const Contact = lazy(() => import('./views/contact'));
const Navbar = lazy(() => import('./components/navbar'));
const Footer = lazy(() => import('./components/footer'));
const ProjectDetails = lazy(() => import('./components/projectDetails'));

function MainContent() {
  const location = useLocation();
  console.log('Current location:', location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const isDetailPage = location.pathname.includes('/projects/');

  return (
    <>
      <Navbar />
      {!isDetailPage && (
        <>
          <Home />
          <Services />
          <Projects />
          <Contact />
        </>
      )}
      <Routes>
        <Route path="/projects/:projId" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

const Loader = () => (
  <div className="loader-container">
    <div className="spinner"></div>
  </div>
);

function App() {
  useEffect(() => {
    const handleReadyStateChange = () => {
      if (document.readyState === "interactive") {
        document.body.style.visibility = "hidden";
      } else if (document.readyState === "complete") {
        document.body.style.visibility = "visible";
      }
    };
    document.onreadystatechange = handleReadyStateChange;

    // Clean up the event listener
    return () => {
      document.onreadystatechange = null;
    };
  }, []);

  return (
    <HashRouter>
      <Suspense fallback={<Loader />}>
        <MainContent />
      </Suspense>
    </HashRouter>
  );
}

export default App;
