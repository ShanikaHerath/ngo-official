import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_lcdm5vy',
      'template_92zmnzl',
      form.current,
      '9r-eqLyBbM_pMgY_H'
    ).then(
      () => {
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
    <div className="contact-page">
      <div className="container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Let's Connect</h1>
          <p>Have questions or want to get involved? We're here to help.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div 
            className="contact-info-cards"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="info-card">
              <div className="icon-box"><Mail /></div>
              <div>
                <h4>Email Us</h4>
                <p>info@suwadiwiya.org</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-box"><Phone /></div>
              <div>
                <h4>Call Us</h4>
                <p>+94 11 234 5678</p>
              </div>
            </div>
            <div className="info-card">
              <div className="icon-box"><MapPin /></div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Main Street, Colombo, Sri Lanka</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form ref={form} onSubmit={sendEmail} className="premium-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required />
                </div>
                <div className="input-group">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="john@example.com" required />
                </div>
              </div>
              <div className="input-group">
                <label>Message</label>
                <textarea name="message" rows="6" placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="submit-btn">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
