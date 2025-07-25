import React from 'react';
import { Link } from 'react-router-dom';
import './GetInvolved.css';

const GetInvolved = () => {
  return (
    <div className="get-involved-page">
      <div className="get-involved">
        <header className="get-involved-header">
          <h1>Get Involved</h1>
          <p>Join us in making a difference. Find out how you can contribute to our mission.</p>
        </header>

        <section className="get-involved-options">
          {/* Volunteer Section */}
          <div className="option-card">
            <h2>Volunteer</h2>
              <p>Make a meaningful impact by joining our projects and events.</p>
              <p>Your time and effort truly make a difference.</p><br></br>
              <p>Register quickly and securely using your Google account—it's free.</p>
              <p>Become part of our dedicated team and help create positive change.</p>

            <a
              href="https://your-google-auth-link.com" // Replace with actual OAuth link
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button"
            >
              Register with Google
            </a>
          </div>

          {/* Donation Section */}
          <div className="option-card">
            <h2>Donate</h2>
            <p>Your donations help us provide essential services to those in need. Every contribution counts.</p>
            <div className="bank-details">
              <p><strong>Bank Name:</strong> People's Bank</p>
              <p><strong>Account Name:</strong> Suwa Diwiya Social Care Foundation</p>
              <p><strong>Account Number:</strong> 123456789</p>
              <p><strong>Branch:</strong> Colombo Main Branch</p>
              <p><strong>SWIFT Code:</strong> PSBKLKLX</p>
            </div>
          </div>

          {/* Events Section */}
          <div className="option-card">
            <h2>Participate in Events</h2>
            <p>Join our events and spread the word about our cause. Community support is vital to our success.</p>
            <div className="event-list">
              <div className="event-item">
                <span className="event-title"> <strong>Community Meals</strong></span>
              </div>
              <div className="event-item">
                <span className="event-title"> <strong>Clean-Up Campaigns</strong></span>
               
              </div>
              <div className="event-item">
                <span className="event-title"> <strong>Mindfulness Retreats</strong></span>
               
              </div>
              <div className="event-item">
                <span className="event-title"> <strong>Mental Health Sessions</strong></span>
               
              </div>
            </div>
          </div>
        </section>

        {/* Join With Us Section */}
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

        {/* Contact Us Section */}
        <section className="get-involved-contact">
          <h2>Contact Us</h2>
          <p>If you have any questions or need more information, feel free to reach out to us.</p>
          <Link to="/contact-us" className="contact-button">
            Contact Us
          </Link>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
