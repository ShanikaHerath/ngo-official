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

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src="https://i.postimg.cc/HndXLWmM/Logo.jpg" alt="Logo" />
          <p>Suwa Diwiya Social Care Foundation</p>
          <span className="tagline">Wisdom, Wellness, and Wellness for All.</span>
        </div>

        <div className="footer-grid">
          <div className="footer-col">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/projects">Our Projects</Link>
            <Link to="/get-involved">Get Involved</Link>
            <Link to="/ayurvedha">Ayurvedha Hub</Link>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>Email: info@suwadiwiya.org</p>
            <p>Phone: +94 77 123 4567</p>
            <p>Colombo, Sri Lanka</p>
          </div>

          <div className="footer-col">
            <h4>Social Media</h4>
            <div className="social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTiktok /></a>
              <a href="#"><FaYoutube /></a>
              <a href="#"><FaWhatsapp /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {new Date().getFullYear()} Suwa Diwiya. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;