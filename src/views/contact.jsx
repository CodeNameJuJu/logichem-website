import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { company } from '../content/site';

export default function Contact() {
  const form = useRef(null);
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const sendEmail = async () => {
    setStatus({ state: 'idle', message: '' });
    try {
      await emailjs.sendForm(
        'service_xlprloe',
        'template_wwtnp2g',
        form.current,
        'PrZ7kEJQwuAOirfKf'
      );
      setStatus({ state: 'success', message: 'Your message has been sent. We will be in touch shortly.' });
      reset();
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Sorry, your message could not be sent. Please try again or email us directly at info@logichem.co.za.',
      });
    }
  };

  const fieldClass = (name) => `field${errors[name] ? ' field-error' : ''}`;

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Get in touch</h1>
          <p className="page-hero-lede">
            Logichem Control is based at {company.address.display}. Call{' '}
            {company.phoneDisplay} or email {company.email} — or use the form below
            and we’ll get back to you.
          </p>
        </div>
      </section>

      <section className="section" aria-label="Contact form and location">
        <div className="container contact-grid">
          <div>
            <h2 className="contact-subheading">Send us a message</h2>
            <form ref={form} onSubmit={handleSubmit(sendEmail)} noValidate>
              <div className={fieldClass('user_fName')}>
                <label htmlFor="user_fName">First name</label>
                <input
                  id="user_fName"
                  type="text"
                  autoComplete="given-name"
                  aria-invalid={errors.user_fName ? 'true' : 'false'}
                  {...register('user_fName', { required: 'Please enter your first name.' })}
                />
                {errors.user_fName && <p className="error-text" role="alert">{errors.user_fName.message}</p>}
              </div>
              <div className={fieldClass('user_lName')}>
                <label htmlFor="user_lName">Last name</label>
                <input
                  id="user_lName"
                  type="text"
                  autoComplete="family-name"
                  aria-invalid={errors.user_lName ? 'true' : 'false'}
                  {...register('user_lName', { required: 'Please enter your last name.' })}
                />
                {errors.user_lName && <p className="error-text" role="alert">{errors.user_lName.message}</p>}
              </div>
              <div className={fieldClass('user_email')}>
                <label htmlFor="user_email">Email address</label>
                <input
                  id="user_email"
                  type="email"
                  autoComplete="email"
                  aria-invalid={errors.user_email ? 'true' : 'false'}
                  {...register('user_email', {
                    required: 'Please enter your email address.',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address.',
                    },
                  })}
                />
                {errors.user_email && <p className="error-text" role="alert">{errors.user_email.message}</p>}
              </div>
              <div className={fieldClass('user_phone')}>
                <label htmlFor="user_phone">Phone number</label>
                <input
                  id="user_phone"
                  type="tel"
                  autoComplete="tel"
                  aria-invalid={errors.user_phone ? 'true' : 'false'}
                  {...register('user_phone', { required: 'Please enter your phone number.' })}
                />
                {errors.user_phone && <p className="error-text" role="alert">{errors.user_phone.message}</p>}
              </div>
              <div className={fieldClass('message')}>
                <label htmlFor="message">Your message</label>
                <textarea
                  id="message"
                  rows="6"
                  aria-invalid={errors.message ? 'true' : 'false'}
                  {...register('message', { required: 'Please enter a message.' })}
                />
                {errors.message && <p className="error-text" role="alert">{errors.message.message}</p>}
              </div>
              <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                {isSubmitting && <span className="spinner" aria-hidden="true" />}
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
              {status.state !== 'idle' && (
                <p className={`form-status form-status-${status.state}`} role="status">
                  {status.message}
                </p>
              )}
            </form>
          </div>
          <div>
            <h2 className="contact-subheading">Where to find us</h2>
            <div className="map-embed">
              <iframe
                src={company.address.mapsEmbed}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Map to Logichem Control, Lonehill Office Park, Sandton"
              />
            </div>
            <address className="contact-address">
              <p>{company.address.display}</p>
              <p>
                <a href={`mailto:${company.email}`}>{company.email}</a>
                <br />
                <a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phoneDisplay}</a>
              </p>
              {company.hours.map((h) => (
                <p key={h.days}>{h.days}: {h.time}</p>
              ))}
            </address>
          </div>
        </div>
      </section>
    </>
  );
}
