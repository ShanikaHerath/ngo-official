import React, { useRef } from 'react';
import emailjs from 'emailjs-com'; // ✅ Make sure this package is installed
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_lcdm5vy',         // 🔁 Replace with your actual Service ID
      'template_92zmnzl',        // 🔁 Replace with your actual Template ID
      form.current,
      '9r-eqLyBbM_pMgY_H'        // 🔁 Replace with your actual Public Key
    ).then(
      (result) => {
        alert("✅ Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("❌ Failed to send message. Try again later.");
        console.error(error.text);
      }
    );
  };

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
        <form ref={form} onSubmit={sendEmail}>
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
