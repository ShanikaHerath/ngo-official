import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    "https://i.postimg.cc/2yhcsSwB/bag.jpg",
    "https://i.postimg.cc/ZKzDr6bP/kan.jpg",
    "https://i.postimg.cc/1tNJF3bY/lamai.jpg",
    "https://i.postimg.cc/yNxfVPjK/mahaseya.jpg",
    "https://i.postimg.cc/mkfVyGsZ/sclenter.jpg",
    "https://i.postimg.cc/tTHVrRYc/project4.jpg",
    "https://i.postimg.cc/VkptCW1m/project3.jpg",
    "https://i.postimg.cc/5NPLxMRH/project1.jpg"
  ];

  const logoImage = "https://i.postimg.cc/HndXLWmM/Logo.jpg";

  const handleGallerySpin = (direction) => {
    setAngle((prevAngle) => prevAngle + (direction === '-' ? -45 : 45));
  };

  return (
    <div className={`home-page ${isFixed ? 'fixed-nav' : ''}`}>
      {/* ==== HERO SECTION ==== */}
      <section className="ngo-section">
        <div className="animation-wrap">
          <div className="animation animation1"></div>
          <div className="animation animation2"></div>
        </div>

        <div className="container">
          <motion.div 
            className="row"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="ngo-text">
              <h2>Support Our Mission</h2>
              <p>
                Join <strong>Suwa Diwiya Social Care Foundation</strong> in creating change through compassion and community.
              </p>
              <a href="donate" className="btn1">Donate Now</a>
            </div>
            <div className="ngo-image">
              <div className="img-box">
                <img src={logoImage} alt="NGO Logo" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==== GALLERY SECTION ==== */}
      <div className="container">
        <h1 className="title">Impact in Action</h1>
      </div>
      
      <section className="carousel-container">
        <div id="carousel">
          <figure
            id="spinner"
            style={{ transform: `rotateY(${angle}deg)` }}
          >
            {galleryImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery image ${index + 1}`}
                style={{
                  transform: `rotateY(${-45 * index}deg) translateZ(500px)`
                }}
              />
            ))}
          </figure>
        </div>
        <div className="ss-icon left-arrow" onClick={() => handleGallerySpin('-')}>&lt;</div>
        <div className="ss-icon right-arrow" onClick={() => handleGallerySpin('')}>&gt;</div>
      </section>

      {/* ==== VISION | MISSION | VALUES ==== */}
      <section className="vmv-accordion-section">
        <div className="container">
          <h2 className="vmv-title">Vision, Mission & Values</h2>

          <div className="vmv-accordion">
            <motion.details 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
            >
              <summary>Our Vision</summary>
              <p>A world where every life is lived with dignity, wellness, and peace.</p>
            </motion.details>

            <motion.details 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <summary>Our Mission</summary>
              <p>
                Our mission is to promote social justice and fight against poverty, illiteracy, and health challenges. 
                Through holistic Ayurvedic healing, we aim to enhance health and well-being. 
                We are committed to empowering the next generation by supporting education for success in the digital age.
              </p>
            </motion.details>

            <motion.details 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 1 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <summary>Our Values</summary>
              <ul>
                <li>Integrity & Transparency</li>
                <li>Compassion in Action</li>
                <li>Empowerment through Knowledge</li>
                <li>Sustainable Development</li>
                <li>Unity & Community</li>
              </ul>
            </motion.details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
