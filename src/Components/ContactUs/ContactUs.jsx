import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <header className="contact-us-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions, comments, or to get involved.</p>
      </header>
      <section className="contact-us-info">
        <h2>Our Contact Information</h2>
        <p><strong>Email:</strong> info@suwadiwiya.org</p>
        <p><strong>Phone:</strong> +94 11 234 5678</p>
        <p><strong>Address:</strong> 123 Main Street, Colombo, Sri Lanka</p>
      </section>
      <section className="contact-us-form">
        <h2>Send Us a Message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
