import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = ({ isAyurvedha }) => {
  return (
    <footer className={`footer ${isAyurvedha ? 'footer-green' : ''}`}>
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img
            src="/Assests/NGO Logo.jpg"
            alt="NGO Logo"
            className="footer-logo"
          />
          <p>Suwa Diwiya Social Care Foundation</p>
        </div>

        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/get-involved">Get Involved</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/ayurvedha">Ayurvedha</Link></li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h4>Contact</h4>
          <p>Email: info@suwadiwiya.org</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Address: 123 Kindness Road, Colombo, Sri Lanka</p>
        </div>

        <div className="footer-section social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Suwa Diwiya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
