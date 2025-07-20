<<<<<<< HEAD
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
=======
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Logo.jpg'; // Make sure it's inside src/assets

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [pendingScrollId, setPendingScrollId] = useState(null);

  const navigate = useNavigate();
>>>>>>> rescue-work
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

<<<<<<< HEAD
  // Check if we are on an Ayurvedha-related page
  const isAyurvedhaPage = location.pathname.startsWith('/ayurvedha');

  return (
    <header className={`navbar ${isAyurvedhaPage ? 'ayurvedha-navbar' : 'home'}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/Assests/NGO Logo.jpg"
              alt="NGO Logo"
              className="logo-img"
            />
          </Link>
        </div>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
=======
  const handleScrollTo = (id) => {
    closeMenu();
    const offset = 80;

    if (location.pathname !== '/') {
      setPendingScrollId(id);
      navigate('/');
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && pendingScrollId) {
      const offset = 80;
      const element = document.getElementById(pendingScrollId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setPendingScrollId(null);
      }
    }
  }, [location, pendingScrollId]);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const isAyurvedhaPage = location.pathname.startsWith('/ayurvedha');

  return (
    <header className={`navbar ${isAyurvedhaPage ? 'ayurvedha-navbar' : 'home'} ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="logo" onClick={() => handleScrollTo('home')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="NGO Logo" className="logo-img" />
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
>>>>>>> rescue-work
          {menuOpen ? '✖' : '☰'}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
<<<<<<< HEAD
          <Link to="/" onClick={closeMenu}>Home</Link>
=======
         <Link to="/" onClick={closeMenu}>Home</Link>
>>>>>>> rescue-work
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
          <Link to="/get-involved" onClick={closeMenu}>Get Involved</Link>
          <Link to="/ayurvedha" onClick={closeMenu}>Ayurvedha</Link>
          <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
