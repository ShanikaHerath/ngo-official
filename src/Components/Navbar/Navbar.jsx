import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  const [pendingScrollId, setPendingScrollId] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Scroll to element by id with offset (to account for fixed navbar)
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

  // Handle pending scroll after navigation to home page
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

  // Show/hide navbar on scroll up/down
  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY <= lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Lock body scroll when menu is open (for mobile menu)
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  const isAyurvedhaPage = location.pathname.startsWith('/ayurvedha');

  return (
    <header className={`navbar ${isAyurvedhaPage ? 'ayurvedha-navbar' : 'home'} ${showNavbar ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div
          className="logo"
          onClick={() => handleScrollTo('home')}
          style={{ cursor: 'pointer' }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') handleScrollTo('home'); }}
          aria-label="Scroll to top"
        >
          <img
            src="https://i.postimg.cc/HndXLWmM/Logo.jpg"
            alt="NGO Logo"
            className="logo-img"
          />
        </div>

        {/* Menu toggle button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✖' : '☰'}
        </button>

        {/* Navigation Links */}
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
