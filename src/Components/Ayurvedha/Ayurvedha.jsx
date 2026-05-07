import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Ayurvedha.css';
import classesImg from '../../assets/ayurvedha/classes.png';
import campaignImg from '../../assets/ayurvedha/campaign.png';
import productsImg from '../../assets/ayurvedha/products.png';


const Ayurvedha = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const offerings = [
    {
      title: "Ayurvedha Classes",
      description: "Learn ancient healing techniques with modern guidance from experts in holistic wellness.",
      image: classesImg,
      link: "/ayurvedha/classes",
      id: "classes"
    },
    {
      title: "Free Ayurvedha Campaign",
      description: "Join our community outreach programs and receive free traditional health check-ups.",
      image: campaignImg,
      link: "/ayurvedha/campaign",
      id: "campaign"
    },
    {
      title: "Ayurvedha Products",
      description: "Explore our curated collection of natural remedies, essential oils, and herbal treasures.",
      image: productsImg,
      link: "/ayurvedha/products",
      id: "products"
    }

  ];


  return (
    <div className="ayurvedha-landing">
      <div className="overlay-glow"></div>

      <motion.div
        className="ayurvedha-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Explore Our Ayurvedha Offerings</h1>
        <p className="header-desc">
          Discover the profound impact of traditional healing tailored for the modern world.
        </p>
      </motion.div>

      <motion.div
        className="offerings-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={containerVariants}
      >
        {offerings.map((item) => (
          <motion.div key={item.id} variants={itemVariants}>
            <Link to={item.link} className={`offering-card ${item.id}`}>
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.title} />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-action">
                  <span>Explore Offering</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

    </div>
  );
};

export default Ayurvedha;
