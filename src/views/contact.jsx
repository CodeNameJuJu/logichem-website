import React, { useRef } from 'react';
import { useForm } from 'react-hook-form'
import '../App.css'
import emailjs from '@emailjs/browser';

/* Maak components vir die contact page wat die contact form en google Iframe gaan wees */

function Form({ type, name, place }) {
    return (

        <div className="mb-3 pt-0">
            <input type={type} name={name} placeholder={place}
                className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
        </div>

    );
}

export const Contact = () => {

    // logic function to send emails to emailJS

    const { handleSubmit, formState } = useForm()
    const { isSubmitting } = formState

    // logic function to send emails to emailJS

    const form = useRef();

    const sendEmail = () => {

        emailjs.sendForm('service_xlprloe', 'template_wwtnp2g', form.current, 'PrZ7kEJQwuAOirfKf')
            .then((result) => {
                alert('message sent successfully...');
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, 4000)
        })

    };

    return (

        //contact form 
        <div className='container text-center'>
            <div>
                <br />
                <br />
                <h2 className='header-col text'>Get in touch!</h2>
                <br />
                <br />
            </div>
            <div className='row'>
                <div className='col-sm-6'>
                    <h4 className='header-col text'>Please fill in the form below:</h4>
                    <form ref={form} onSubmit={handleSubmit(sendEmail)}>
                        <Form
                            type={"text"}
                            name={"user_fName"}
                            place={"First Name..."}
                        />
                        <Form
                            type={"text"}
                            name={"user_lName"}
                            place={"Last Name..."}
                        />
                        <Form
                            type={"email"}
                            name={"user_email"}
                            place={"Your email address..."}
                        />
                        <Form
                            type={"phone"}
                            name={"user_phone"}
                            place={"Your phone number..."}
                        />
                        <div className="mb-3 pt-0">
                            <textarea name="message" placeholder="Your message"
                                className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            ></textarea>
                        </div>
                        <br />
                        <div className="mb-3 pb-3 pt-0">
                            <button disabled={isSubmitting} className="btn btn-bg btn-link">
                                {isSubmitting && (
                                    <span className="spinner-grow spinner-grow-sm"></span>
                                )}
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
                <div className='col-sm-6'>
                    <h4 className='header-col text'>Where to find us:</h4>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14342.400616048593!2d28.0275992!3d-26.0139124!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95714f1efddc43%3A0xd91e7c33dc7e664!2sLogiChem%20Control%20(Pty)Ltd.!5e0!3m2!1sen!2sza!4v1698665593715!5m2!1sen!2sza"
                        width="100%"
                        height="100%"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Logichem Directions">
                    </iframe>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>

    );
}

export default Contact;