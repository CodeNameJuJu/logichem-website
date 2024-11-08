import { React, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { serviceDetails } from '../data/serviceData';

function Section({ name, image1, image2, image3, image4 }) {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className='container mt-5 pt-5 mb-5 pb-5'>
            <h3 className="section-heading text-center">{name}</h3>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <img className='img-fluid' src={image1} alt={name} />
                </div>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <img className='img-fluid' src={image2} alt={name} />
                </div>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <img className='img-fluid' src={image3} alt={name} />
                </div>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <img className='img-fluid' src={image4} alt={name} />
                </div>
            </div>
            <div className='text-center mt-4'>
                <Link className="btn btn-primary" to="/services" title='Back to Services'>
                    Back to Services
                </Link>
            </div>
        </div>
    );
}

function ServiceDetails() {
    const { servId } = useParams();

    const service = serviceDetails[servId.toLowerCase()];

    if (!service) {
        return <div>Service not found.</div>;
    }

    return (
        <div>
            <Section
                name={service.name}
                image1={service.image1}
                image2={service.image2}
                image3={service.image3}
                image4={service.image4}
            />
        </div>
    );
}

export default ServiceDetails;
