// TeamMemberDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { serviceDetails } from '../data/serviceData';

function ServiceDetails() {
    
    const { servId } = useParams();

    // Fetch the data for the specified team member
    const service = serviceDetails[servId];
    console.log(service.image);

    if (!service) {
        return <div>Team member not found.</div>;
    }

    return (
        <div className='container  mt-5 pt-5 mb-5 pb-5'>
            <div className='row d-flex justify-content-center'>
                <img className='col-sm-4 ml-5 pl-5 shadow' src={service.image} alt={service.name} />
                <div className='col-sm-8 ml-5 pl-5'>
                    <section>
                        <h2 className='container text-center section-title mb-2'>{service.name}</h2>
                    </section>
                    <p>{service.desc}</p>
                </div>
            </div>
            <Link className="nav-link" to="/services" title='Back to Services'>
                Back to Services
            </Link>
        </div>
    );
}

export default ServiceDetails;
