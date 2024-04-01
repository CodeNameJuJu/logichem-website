import React from 'react';

const Popup = ({ project }) => {

    return (
        <div
            style={{
                position: 'absolute',
                top: `500px`, // Set top position based on y-coordinate of the project pin
                left: `950px`, // Set left position based on x-coordinate of the project pin
                transform: 'translate(-50%, -100%)', // Translate to center the popup above the pin
                backgroundColor: '#3B5998',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                zIndex: 9999,
                opacity: 0.5,
            }}
        >
            <h4>Projects completed in {project.name}</h4>
        </div>
    );
};

export default Popup;
