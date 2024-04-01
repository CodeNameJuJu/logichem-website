import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import { servicesData } from '../data/serviceData';


/* Maak components vir die Services page wat in die cards gaan gebruik vir elke employee */

function Section({ name, displayName, image, path, desc }) {
    return (
        <div className='row mt-2 pt-2 mb-2 pb-2 fadeIn-animation-left'>
            <div className='col-sm-8'>
                <section>
                    <h3 className='section-title mb-2 h1 text-center header-col text'>{name}</h3>
                </section>
                <p>{desc}</p>
            </div>
            <img className='col-sm-4 mb-5 pb-5' src={image} alt={name} />
            <Link className="text" to={`/services/${path}`} title='Home'>
                Read More
            </Link>
        </div>
    );
}

function Section2({ name, displayName, image, path, desc }) {
    return (
        <div className='row mt-2 pt-2 mb-2 pb-2 fadeIn-animation-right '>
            <div className='col-sm-8'>
                <section>
                    <h3 className='section-title mb-2 h1 text-center header-col text'>{name}</h3>
                </section>
                <p>{desc}</p>
            </div>
            <img className='col-sm-4 mb-5 pb-5' src={image} alt={name} />
            <Link className="text" to={`/services/${path}`} title='Home'>
                Read More
            </Link>
        </div>
    );
}

function Services() {


    // Fetch the data for the specified treatment member
    const service = servicesData;

    return (
        <div className='container'>
            <div>
                {service.map((serv, index) => (
                    <div className='mb-5 pb-5' key={index}>
                        <Section
                            name={serv.displayName}
                            image={serv.image}
                            desc={serv.desc}
                            path={serv.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                        />
                        <Section2
                            name={serv.displayName}
                            image={serv.image}
                            desc={serv.desc}
                            path={serv.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Services;