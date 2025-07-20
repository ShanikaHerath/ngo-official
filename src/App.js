import React from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
=======
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
>>>>>>> rescue-work

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
<<<<<<< HEAD
=======
import ScrollToTop from './Components/ScrollToTop'; // Importing ScrollToTop component
>>>>>>> rescue-work

import './App.css';

function AppContent() {
  const location = useLocation();
<<<<<<< HEAD
  // Check if current path starts with "/ayurvedha"
=======

>>>>>>> rescue-work
  const isAyurvedhaPage = location.pathname.startsWith('/ayurvedha');

  return (
    <div className="App">
      <Navbar />
<<<<<<< HEAD
=======
              <ScrollToTop />
>>>>>>> rescue-work
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/contact-us" element={<ContactUs />} />
<<<<<<< HEAD

        <Route path="/ayurvedha" element={<Ayurvedha />} />

=======
        <Route path="/ayurvedha" element={<Ayurvedha />} />
>>>>>>> rescue-work
        <Route path="/ayurvedha/classes" element={<Classes />} />
        <Route path="/ayurvedha/campaign" element={<Campaign />} />
        <Route path="/ayurvedha/products" element={<Products />} />
      </Routes>
<<<<<<< HEAD
=======

>>>>>>> rescue-work
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
