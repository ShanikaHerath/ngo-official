import React from 'react';
import { Link } from 'react-router-dom';
import './Ayurvedha.css';

const Ayurvedha = () => {
  return (
    <div className="ayurvedha-landing">
      <h1>Explore Our Ayurvedha Offerings</h1>
      <div className="bars-container">
        <Link to="/ayurvedha/classes" className="ayurvedha-bar">
          <h2>Ayurvedha Classes</h2>
          <p>Learn ancient healing techniques with modern guidance.</p>
        </Link>

        <Link to="/ayurvedha/campaign" className="ayurvedha-bar">
          <h2>Free Ayurvedha Campaign</h2>
          <p>Join community events and free health check-ups.</p>
        </Link>

        <Link to="/ayurvedha/products" className="ayurvedha-bar">
          <h2>Ayurvedha Products</h2>
          <p>Shop natural remedies, oils, and herbal wonders.</p>
        </Link>
      </div>
    </div>
  );
};

export default Ayurvedha;
