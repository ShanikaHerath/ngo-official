import React, { useState, useEffect } from 'react';
import './Home.css';

// Logo and Gallery Images
import logoImage from '../assets/Logo.jpg';
import gallery1 from '../assets/gallery/kan.jpg';
import gallery2 from '../assets/gallery/lamai.jpg';
import gallery3 from '../assets/gallery/girl.jpg';
import gallery4 from '../assets/gallery/mahaseya.jpg';
import gallery5 from '../assets/gallery/scloldpolathu.jpg';
import gallery6 from '../assets/gallery/sriPada.jpg';
import gallery7 from '../assets/gallery/thel2.jpg';
import gallery8 from '../assets/gallery/ayu1.jpg';
import gallery9 from '../assets/gallery/bag.jpg';
import gallery10 from '../assets/gallery/sclf.jpg';
import gallery11 from '../assets/gallery/ayu3.jpg';
import gallery12 from '../assets/gallery/Thel1.jpg';
import gallery14 from '../assets/gallery/ayu2.jpg';
import gallery13 from '../assets/gallery/all.jpg';
import gallery15 from '../assets/gallery/doc.jpg';


const Home = () => {
  const [navActive, setNavActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const toggleNav = () => setNavActive(!navActive);
  const closeNav = () => setNavActive(false);

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4,
    gallery5, gallery6, gallery7, gallery8,
    gallery9, gallery10, gallery11, gallery12,
    gallery13,gallery14, gallery15,
  ];

  return (
    <div className={`home-page ${isFixed ? 'fixed-nav' : ''}`}>
      {/* ==== HERO / NGO SECTION ==== */}
      <section className="ngo-section" id="ngo">
        <div className="animation-wrap">
          <div className="animation animation1"></div>
          <div className="animation animation2">
            {Array(28).fill().map((_, i) => <div key={`a2-${i}`}></div>)}
          </div>
          <div className="animation animation3"></div>
          <div className="animation animation4">
            {Array(8).fill().map((_, i) => <div key={`a4-${i}`}></div>)}
          </div>
        </div>

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="ngo-text">
              <h2>Support <span>Our</span> Mission</h2>
              <p>
                Join us in making a difference with impactful initiatives.
                Our programs focus on sustainability, community empowerment,
                innovative solutions, and global outreach.
              </p>
              <a href="get-involved" className="btn1">Donate</a>
            </div>
            <div className="ngo-image">
              <div className="img-box">
                <img src={logoImage} alt="campaign banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== GALLERY SECTION ==== */}
      <h1 className="title">What We Did?</h1>
      <section className="masonry__container">
        {galleryImages.map((imgSrc, i) => (
          <img
            key={i}
            className="masonry__item"
            src={imgSrc}
            alt={`gallery image ${i + 1}`}
          />
        ))}
      </section>
    </div>
  );
};

export default Home;
