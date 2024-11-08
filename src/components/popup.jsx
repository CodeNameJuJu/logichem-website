import React from 'react';

const Popup = ({ project }) => {
    return (
        <div
            style={{
                position: 'absolute',
                top: `320px`,
                left: `400px`,
                transform: 'translate(-50%, -100%)',
                backgroundColor: '#3B5998',
                color: 'white',
                padding: '20px',
                borderRadius: '12px',
                boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                zIndex: 9999,
                opacity: 0.8,
                maxWidth: '300px',
                textAlign: 'center',
                transition: 'all 0.3s ease-in-out',
            }}
        >
            <h4
                style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '18px',
                    marginBottom: '10px',
                }}
            >
                Projects completed in {project.name}
            </h4>
            <p
                style={{
                    fontFamily: 'Verdana, sans-serif',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    margin: 0,
                }}
            >
                Our team has successfully completed various projects in {project.name}, delivering quality services.
            </p>
        </div>
    );
};

export default Popup;
