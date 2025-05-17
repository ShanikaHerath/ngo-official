import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

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
          {menuOpen ? '✖' : '☰'}
        </button>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu}>Home</Link>
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
