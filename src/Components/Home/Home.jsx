import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Target, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [angle, setAngle] = useState(0);

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
    setAngle((prevAngle) => prevAngle + (direction === 'left' ? 45 : -45));
  };

  return (
    <div className="home-page">
      {/* ==== HERO SECTION ==== */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-grid">
            <motion.div 
              className="hero-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="badge">Compassion in Action</span>
              <h1>Empowering Lives, <span>Restoring Hope.</span></h1>
              <p>
                Join <strong>Suwa Diwiya Social Care Foundation</strong> in our mission to uplift communities through wellness, education, and compassion.
              </p>
              <div className="hero-btns">
                <a href="/donate" className="btn-primary">
                  Support Our Mission <ArrowRight size={18} />
                </a>
                <a href="/get-involved" className="btn-outline">Join As Volunteer</a>
              </div>
            </motion.div>
            
            <motion.div 
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="logo-glow">
                <img src={logoImage} alt="Suwa Diwiya Logo" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==== IMPACT GALLERY ==== */}
      <section className="impact-gallery">
        <div className="container">
          <header className="section-header">
            <h2>Impact in Action</h2>
            <p>A glimpse into our community initiatives and the lives we touch.</p>
          </header>
          
          <div className="gallery-carousel-wrapper">
            <div className="carousel-3d">
              <div 
                className="carousel-spinner" 
                style={{ transform: `rotateY(${angle}deg)` }}
              >
                {galleryImages.map((img, index) => (
                  <div 
                    key={index}
                    className="carousel-item"
                    style={{
                      transform: `rotateY(${index * 45}deg) translateZ(450px)`
                    }}
                  >
                    <img src={img} alt={`Impact ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="carousel-nav">
              <button onClick={() => handleGallerySpin('left')}><ChevronLeft /></button>
              <button onClick={() => handleGallerySpin('right')}><ChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ==== VISION | MISSION | VALUES ==== */}
      <section className="vmv-section">
        <div className="container">
          <div className="vmv-grid">
            <motion.div 
              className="vmv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="icon-circle"><Star size={32} /></div>
              <h3>Our Vision</h3>
              <p>A world where every individual lives with dignity, holistic wellness, and spiritual peace.</p>
            </motion.div>

            <motion.div 
              className="vmv-card highlight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="icon-circle"><Target size={32} /></div>
              <h3>Our Mission</h3>
              <p>Promoting social justice, fighting poverty through holistic healing, and empowering the next generation with digital education.</p>
            </motion.div>

            <motion.div 
              className="vmv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="icon-circle"><Heart size={32} /></div>
              <h3>Our Values</h3>
              <ul>
                <li>Integrity & Transparency</li>
                <li>Compassion in Action</li>
                <li>Unity & Community</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
