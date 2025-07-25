import React, { useState, useEffect } from 'react';
import './Home.css';
import logoImage from '../assets/Logo.jpg'; // ✅ React-style import

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

  return (
    <div>
      <section className="ngo-section" id="ngo">
        <div className="animation-wrap">
          <div className="animation animation1"></div>
          <div className="animation animation2">{Array(28).fill().map((_, i) => <div key={i}></div>)}</div>
          <div className="animation animation3"></div>
          <div className="animation animation4">{Array(8).fill().map((_, i) => <div key={i}></div>)}</div>
        </div>
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="ngo-text">
              <h2>Support <span>Our</span> Mission</h2>
              <p>Join us in making a difference with impactful initiatives. Our programs focus on sustainability, community empowerment, innovative solutions, and global outreach.</p>
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
    </div>
  );
};

export default Home;
