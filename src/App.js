import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/home';
import Services from './views/services';
import Projects from './views/projects';
import Contact from './views/contact';
import Navbar from './components/navbar';
import Footer from './components/footer';
import ServiceDetails from './components/serviceDetails';
import ProjectDetails from './components/projectDetails';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:servId" element={<ServiceDetails />} />
          <Route path="/projects/:projId" element={<ProjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
