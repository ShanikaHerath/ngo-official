import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Landmark, ShieldCheck } from 'lucide-react';
import './Donate.css';

const Donate = () => {
  return (
    <div className="donate-page">
      <div className="container">
        <motion.section 
          className="donate-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="heart-icon"><Heart size={48} fill="currentColor" /></div>
          <h1>Empower Change</h1>
          <p>Your generosity fuels our mission to provide care, healing, and hope to those who need it most.</p>
        </motion.section>

        <div className="donate-grid">
          <motion.div 
            className="donate-card bank-details"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="card-header">
              <Landmark />
              <h3>Bank Transfer</h3>
            </div>
            <div className="bank-info">
              <div className="info-row">
                <span>Bank</span>
                <strong>People's Bank</strong>
              </div>
              <div className="info-row">
                <span>Account Name</span>
                <strong>Suwa Diwiya Social Care Foundation</strong>
              </div>
              <div className="info-row">
                <span>Account Number</span>
                <strong>123-456-789-0</strong>
              </div>
              <div className="info-row">
                <span>Branch</span>
                <strong>Colombo City Branch</strong>
              </div>
            </div>
            <div className="card-footer">
              <ShieldCheck size={16} />
              <span>Secure Official Account</span>
            </div>
          </motion.div>

          <motion.div 
            className="donate-card cta-card"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3>Small Acts, Big Impacts</h3>
            <p>Every contribution, no matter the size, helps us build a healthier and more compassionate world for all.</p>
            <div className="cta-actions">
              <button className="donate-now-btn">Join Our Mission</button>
              <button className="support-btn">Contact Support</button>
            </div>
            <div className="impact-stats">
              <div className="stat">
                <strong>100%</strong>
                <span>Goes to Mission</span>
              </div>
              <div className="stat">
                <strong>Transparency</strong>
                <span>Audited Funds</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
