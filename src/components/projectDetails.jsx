import { React, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { projectDetails } from '../data/projectData';

function Section({ image1, image2, image3, image4, name }) {

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className='container mt-5 pt-5 mb-5 pb-5'>
            <h3 className="section-heading text-center">{name}</h3>
            <div className='row d-flex justify-content-center'>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <figure>
                        <img className='img-fluid' src={image1} alt={name} loading="lazy"/>
                    </figure>
                </div>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <figure>
                        <img className='img-fluid' src={image2} alt={name} loading="lazy"/>
                    </figure>
                </div>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <figure>
                        <img className='img-fluid' src={image3} alt={name} loading="lazy"/>
                    </figure>
                </div>
                <div className='col-12 col-md-6 mb-4 d-flex justify-content-center'>
                    <figure>
                        <img className='img-fluid' src={image4} alt={name} loading="lazy"/>
                    </figure>
                </div>
            </div>
            <div className='text-center mt-4'>
                <Link className="btn btn-primary" to="/projects" title='Back to Projects'>
                    Back to Industries
                </Link>
            </div>
        </div>
    );
}

function TeamMemberDetails() {
    const { projId } = useParams();

    const project = projectDetails[projId.toLowerCase()];

    if (!project) {
        return <div>Industry not found.</div>;
    }

    return (
        <div>
            <Section
                image1={project.image1}
                image2={project.image2}
                image3={project.image3}
                image4={project.image4}
                name={project.name}
            />
        </div>
    );
}

export default TeamMemberDetails;
