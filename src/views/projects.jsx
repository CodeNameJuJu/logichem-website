import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import { projectData } from '../data/projectData';

function Projects() {
  return (
    <section id="industries">
      <div className='container pt-3 mt-3 pb-3 mb-3 fadeIn-animation-up' >
        <h3 className="section-heading text-center">Industries We Serve</h3>
        <div className='row'>
          {projectData.map((project, index) => (
            <div key={index} className='col-md-6 col-lg-6 pt-2 mt-2 pb-2 mb-2'>
              <div className='card-container mb-4'>
                <Link to={`/projects/${project.path}`}>
                  <div className="image-container-projects position-relative">
                    <figure>
                      <img
                        className='service-image img-fluid rounded'
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                      />
                    </figure>
                    <h3 className='section-title-overlay'>{project.name}</h3>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;