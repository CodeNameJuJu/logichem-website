import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/serviceData';

function Services() {
  return (
    <section id="services">
      <div className='container pt-3 mt-3 pb-3 mb-3 fadeIn-animation-up' >
        <h3 className="section-heading text-center">Services</h3>
        <div className='row'>
          {servicesData.map((service, index) => (
            <div key={index} className='col-md-6 col-lg-6 pt-2 mt-2 pb-2 mb-2'>
              <div className='card-container mb-4'>
                <Link to={`/services/${service.path}`}>
                  <div className="image-container position-relative">
                    <img
                      className='service-image img-fluid rounded'
                      src={service.image1}
                      alt={service.name}
                    />
                    <h3 className='section-title-overlay'>{service.name}</h3>
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

export default Services;
