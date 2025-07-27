import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import GetInvolved from './Components/GetInvolved/GetInvolved';
import ContactUs from './Components/ContactUs/ContactUs';
import Navbar from './Components/Navbar/Navbar';
import Ayurvedha from './Components/Ayurvedha/Ayurvedha';
import Classes from './Components/Ayurvedha/Classes/Classes';
import Campaign from './Components/Ayurvedha/Campaign/Campaign';
import Products from './Components/Ayurvedha/Products/Products';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import Donate from './Components/Donate/Donate';

import './App.css';

function AppContent() {
  const location = useLocation();
  const isAyurvedhaPage = location.pathname.startsWith('/ayurvedha');

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/ayurvedha" element={<Ayurvedha />} />
        <Route path="/ayurvedha/classes" element={<Classes />} />
        <Route path="/ayurvedha/campaign" element={<Campaign />} />
        <Route path="/ayurvedha/products" element={<Products />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer isAyurvedha={isAyurvedhaPage} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
