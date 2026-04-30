import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Heart, Calendar, ArrowRight } from 'lucide-react';
import './GetInvolved.css';

const GetInvolved = () => {
  const options = [
    {
      title: "Volunteer",
      icon: <Users size={32} />,
      desc: "Join our dedicated team and help create positive change on the ground.",
      action: "Register with Google",
      link: "https://forms.gle/ZpPBjoEkZ36R7qgi6",
      isExternal: true
    },
    {
      title: "Donate",
      icon: <Heart size={32} />,
      desc: "Every contribution counts toward providing essential services to those in need.",
      action: "Learn More",
      link: "/donate",
      isExternal: false
    },
    {
      title: "Events",
      icon: <Calendar size={32} />,
      desc: "Participate in our community meals, clean-up campaigns, and retreats.",
      action: "View Projects",
      link: "/projects",
      isExternal: false
    }
  ];

  return (
    <div className="get-involved-page">
      <div className="container">
        <motion.header 
          className="page-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Make an Impact</h1>
          <p>Join our mission to spread wellness and compassion across communities. There are many ways to help.</p>
        </motion.header>

        <div className="options-grid">
          {options.map((opt, index) => (
            <motion.div 
              key={index}
              className="option-card-premium"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="card-icon">{opt.icon}</div>
              <h3>{opt.title}</h3>
              <p>{opt.desc}</p>
              {opt.isExternal ? (
                <a href={opt.link} target="_blank" rel="noopener noreferrer" className="card-btn">
                  {opt.action} <ArrowRight size={16} />
                </a>
              ) : (
                <Link to={opt.link} className="card-btn">
                  {opt.action} <ArrowRight size={16} />
                </Link>
              )}
            </motion.div>
          ))}
        </div>

        <section className="cta-banner">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Join Us?</h2>
            <p>Become a part of our movement today and help us sow seeds of hope.</p>
            <div className="cta-btns">
              <a href="https://forms.gle/ZpPBjoEkZ36R7qgi6" target="_blank" rel="noopener noreferrer" className="btn-primary">Join Now</a>
              <Link to="/contact-us" className="btn-outline">Contact Us</Link>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default GetInvolved;
