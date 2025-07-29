import React, { useState, useEffect } from 'react';
import './Home.css';

// Logo and Gallery Images (local)
import logoImage from '../assets/Logo.jpg';
import gallery1 from '../assets/gallery/kan.jpg';
import gallery2 from '../assets/gallery/lamai.jpg';
import gallery3 from '../assets/gallery/bag.jpg';
import gallery4 from '../assets/gallery/mahaseya.jpg';
import gallery5 from '../assets/gallery/scloldpolathu.jpg';
import gallery6 from '../assets/gallery/sriPada.jpg';
import gallery7 from '../assets/gallery/thel2.jpg';
import gallery8 from '../assets/gallery/ayu1.jpg';

const Home = () => {
  const [navActive, setNavActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [angle, setAngle] = useState(0);

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
  ];

  const handleGallerySpin = (direction) => {
    setAngle((prevAngle) => prevAngle + (direction === '-' ? -45 : 45));
  };

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
              <h2>Support Our Mission</h2>
              <p>
                Join <strong>Suwa Diwiya Social Care Foundation</strong> in creating change through compassion and community.
              </p>
              <a href="donate" className="btn1">Donate</a>
            </div>
            <div className="ngo-image">
              <div className="img-box">
                <img src={logoImage} alt="campaign banner" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== 3D CAROUSEL GALLERY SECTION ==== */}
      <h1 className="title">What We Did?</h1>
      <p className="subtitle">
        Explore our gallery showcasing the impact of our projects and initiatives.
      </p>
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
                  transform: `translate(-50%, -50%) rotateY(${-45 * index}deg)`
                }}
              />
            ))}
          </figure>
        </div>
        <span className="ss-icon left-arrow" onClick={() => handleGallerySpin('-')}>&lt;</span>
        <span className="ss-icon right-arrow" onClick={() => handleGallerySpin('')}>&gt;</span>
      </section>

      {/* ==== VISION | MISSION | VALUES ACCORDION ==== */}
<section className="vmv-accordion-section" id="vmv">
  <h2 className="vmv-title">Our Vision, Mission & Values</h2>

  <div className="vmv-accordion">
    <details>
      <summary> Vision</summary>
      <p>A world where every life is lived with dignity, wellness, and peace.</p>
    </details>

    <details>
      <summary> Mission</summary>
      <p>
        Our mission is to promote social justice and fight against poverty, illiteracy, and health challenges.<br /><br />
        Through holistic Ayurvedic healing, we aim to enhance health and well-being.<br /><br />
        We are committed to empowering the next generation by supporting education for success in the digital age.<br /><br />
        We promote innovative economic models, animal welfare, and environmental protection to build self-reliance and sustainability.<br /><br />
        By encouraging community participation, we create a culture of unity and cooperation.
      </p>
    </details>

    <details>
      <summary> Values</summary>
      <ul>
        <li>Integrity</li>
        <li>Compassion</li>
        <li>Empowerment</li>
        <li>Sustainability</li>
        <li>Unity</li>
      </ul>
    </details>
  </div>
</section>


    </div>
  );
};

export default Home;
