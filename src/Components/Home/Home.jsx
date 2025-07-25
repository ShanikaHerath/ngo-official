import React, { useState, useEffect } from 'react';
import './Home.css';
import Logo from '../assets/Logo.jpg'; // Import the image

const Home = () => {
  const [navActive, setNavActive] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [bannerImage, setBannerImage] = useState('https://i.postimg.cc/5t0jYgz7/green.png');

  const handleImageChange = (src, index) => {
    setBannerImage(src);
    document.querySelectorAll('.image').forEach(c => c.classList.remove('selected'));
    document.querySelectorAll('.image')[index].classList.add('selected');
  };

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <section className="ngo-section" id="ngo">
        <div className="animation-wrap">
          <div className="animation animation1"></div>
          <div className="animation animation2">
            {Array(28).fill().map((_, i) => <div key={i}></div>)}
          </div>
          <div className="animation animation3"></div>
          <div className="animation animation4">
            {Array(8).fill().map((_, i) => <div key={i}></div>)}
          </div>
        </div>
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="ngo-text">
              <h2>Support <span>Our</span> Mission</h2>
              <p>Join us in making a difference with impactful initiatives. Our programs focus on sustainability, community empowerment, innovative solutions, and global outreach.</p>
              <a href="#" className="btn1">Get Involved</a>
            </div>
            <div className="ngo-image">
              <div className="img-box">
                <img src={Logo} alt="campaign banner" /> {/* Use the imported image */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;