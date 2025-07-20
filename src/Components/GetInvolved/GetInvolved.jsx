import React from 'react';
import './GetInvolved.css';
<<<<<<< HEAD

const GetInvolved = () => {
  return (
=======
import { Link } from 'react-router-dom';

const GetInvolved = () => {
  return (
    <div className="get-involved-page">
>>>>>>> rescue-work
    <div className="get-involved">
      <header className="get-involved-header">
        <h1>Get Involved</h1>
        <p>Join us in making a difference. Find out how you can contribute to our mission.</p>
      </header>
<<<<<<< HEAD
=======

>>>>>>> rescue-work
      <section className="get-involved-options">
        <div className="option-card">
          <h2>Volunteer</h2>
          <p>Help us with our projects and events. Your time and effort can make a huge impact.</p>
        </div>
        <div className="option-card">
          <h2>Donate</h2>
          <p>Your donations help us provide essential services to those in need. Every contribution counts.</p>
        </div>
        <div className="option-card">
          <h2>Participate in Events</h2>
          <p>Join our events and spread the word about our cause. Community support is vital to our success.</p>
        </div>
      </section>
<<<<<<< HEAD
      <section className="get-involved-contact">
        <h2>Contact Us</h2>
        <p>If you have any questions or need more information, feel free to reach out to us.</p>
        <button className="contact-button">Contact Us</button>
      </section>
    </div>
  );
=======

      <section className="get-involved-contact">
        <h2>Join With Us</h2>
        <p>Ready to take the next step? Fill out our registration form and become a part of our movement.</p>
        <a
          href="https://forms.gle/ZpPBjoEkZ36R7qgi6"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          Join With Us
        </a>
      </section>

      <section className="get-involved-contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or need more information, feel free to reach out to us.</p>
          <Link to="/contact-us" className="contact-button">
            Contact Us
          </Link>
      </section>

    </div>
    </div>
  )
>>>>>>> rescue-work
};

export default GetInvolved;
