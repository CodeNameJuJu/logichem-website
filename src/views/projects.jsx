import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';
import { projectData } from '../data/projectData';

function Card({ name, displayName, image, path, desc }) {
    return (
        <div className="card border-0 shadow Card fadeIn-animation-up" style={{ width: '100%', textAlign: 'center' }}>
            <img className="card-img-top" height="50%" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-truncate">{desc}</p>
                <Link className="nav-link" to={`/projects/${path}`} title='Home'>
                    Read More
                </Link>
            </div>
        </div>
    );
}

function Projects() {

    const project = projectData;

    return (
        <div className='container pt-5 mt-5'>
            <div className='row card-padding'>
                {project.map((proj, index) => (
                    <div className='col-sm-4 mb-5 pb-5' key={index}>
                        <Card
                            name={proj.displayName}
                            image={proj.image}
                            desc={proj.desc}
                            path={proj.name.toLowerCase()} // Use a unique identifier (e.g., name) as the path
                        />
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Projects;