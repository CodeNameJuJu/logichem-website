// TeamMemberDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { projectDetails } from '../data/projectData';

function ServiceDetails() {
    
    const { projId } = useParams();

    // Fetch the data for the specified team member
    const project = projectDetails[projId];
    console.log(project.image);

    if (!project) {
        return <div>Team member not found.</div>;
    }

    return (
        <div className='container  mt-5 pt-5 mb-5 pb-5'>
            <div className='row d-flex justify-content-center'>
                <img className='col-sm-4 ml-5 pl-5 shadow' src={project.image} alt={project.name} />
                <div className='col-sm-8 ml-5 pl-5'>
                    <section>
                        <h2 className='container text-center section-title mb-2'>{project.name}</h2>
                    </section>
                    <p>{project.desc}</p>
                </div>
            </div>
            <Link className="nav-link" to="/projects" title='Back to Projects'>
                Back to Projects
            </Link>
        </div>
    );
}

export default ServiceDetails;
