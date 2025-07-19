import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
} from 'react-icons/fa6';
import './Footer.css';
import logo from '../assets/Logo.jpg';

const Footer = ({ isAyurvedha }) => {
  return (
    <footer className={`footer ${isAyurvedha ? 'footer-green' : ''}`}>
      <div className="footer-container">
        {/* Logo and Foundation Name */}
        <div className="footer-section logo-section">
          <img
            src={logo}
            alt="NGO Logo"
            className="footer-logo"
          />
          <p>Suwa Diwiya Social Care Foundation</p>
        </div>

        {/* Navigation Links */}
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

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h4>Contact</h4>
          <p>Email: info@suwadiwiya.org</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Address: 123 Kindness Road, Colombo, Sri Lanka</p>
        </div>

        {/* Social Icons */}
        <div className="footer-section social-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FaTiktok />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
            <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Suwa Diwiya. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
