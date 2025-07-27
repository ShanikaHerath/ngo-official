import React from 'react';
import './Donate.css';

const Donate = () => {
  return (
    <div className="donate-page">
      <section className="donate-hero">
        <h1>Support Our Mission</h1>
        <p>Your donation helps us uplift communities and spread wellness through compassion and service.</p>
      </section>

      <section className="donate-methods">
        <div className="donate-box bank-transfer-box">
          <h2>Donate via Bank Transfer</h2>
          <p><strong>Bank:</strong> People's Bank</p>
          <p><strong>Account Name:</strong> Suwa Diwiya Social Care Foundation</p>
          <p><strong>Account Number:</strong> 1234567890</p>
          <p><strong>Branch:</strong> Colombo City Branch</p>
        </div>

        <div className="donate-box highlight-box">
          <h2>Make a Difference Today</h2>
          <p>Even the smallest donation has a powerful impact. Thank you for your generosity! ❤️</p>
          <div className="cta-buttons">
            <button className="secondary-btn">Join with Us</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
