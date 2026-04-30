import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiFeather } from "react-icons/fi";
import { BiLeaf } from "react-icons/bi";
import { BsClipboardCheck, BsHeart } from "react-icons/bs";
import "./About.css";

const teamMembers = [
  { name: "Ven. Suditha Thero", role: "Founder", image: "https://i.postimg.cc/bwsbrF7m/founder.jpg" },
  { name: "C. D. Silva", role: "Director", image: "https://i.postimg.cc/85hLDJ2D/director1.jpg" },
  { name: "S. R. Herath", role: "Director", image: "https://i.postimg.cc/XYzfg0KM/director2.jpg" },
  { name: "K. M. C. Gunasekara", role: "Director", image: "https://i.postimg.cc/G20vZJSq/director4.jpg" },
  { name: "L. Thushari", role: "Director", image: "https://i.postimg.cc/hGQ9y3MX/director3.jpg" },
  { name: "C. Lakmal", role: "Chief Organizer", image: "https://i.postimg.cc/wxQDGN5Q/organizer.jpg" },
];

const journeyData = [
  { year: "2019", icon: <FiFeather />, title: "Quiet Beginnings", description: "A small group of kind souls serving communities with compassion." },
  { year: "2023", icon: <BiLeaf />, title: "Birth of Suwa Diwiya", description: "Inspired by purpose, the idea to form a foundation was born." },
  { year: "2024", icon: <BsClipboardCheck />, title: "Legal Registration", description: "Officially registered Suwa Diwiya Social Care Foundation as a non-profit." },
  { year: "Now", icon: <BsHeart />, title: "Growing Hope", description: "Growing through impactful projects rooted in healing and hope." },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timelineRef = useRef(null);

  const updateCarousel = (newIndex) => {
    const total = teamMembers.length;
    setCurrentIndex((newIndex + total) % total);
  };

  return (
    <div className="about-page">
      <div className="about-wrapper">
        
        {/* TEAM SECTION */}
        <section className="team-section">
          <h1 className="team-title">Our Dedicated Team</h1>
          
          <div className="carousel-container">
            <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>‹</button>
            
            <div className="carousel-track">
              {teamMembers.map((member, index) => {
                let className = "card";
                const total = teamMembers.length;
                const offset = (index - currentIndex + total) % total;

                if (offset === 0) className += " center";
                else if (offset === 1) className += " right-1";
                else if (offset === total - 1) className += " left-1";
                else if (offset === 2) className += " right-2";
                else if (offset === total - 2) className += " left-2";
                else className += " hidden";

                return (
                  <div key={index} className={className} onClick={() => updateCarousel(index)}>
                    <img src={member.image || "https://via.placeholder.com/300x400?text=Team+Member"} alt={member.name} />
                  </div>
                );
              })}
            </div>

            <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>›</button>
          </div>

          <div className="member-info">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
                <p className="member-role">{teamMembers[currentIndex].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="dots">
            {teamMembers.map((_, index) => (
              <div 
                key={index} 
                className={`dot ${index === currentIndex ? "active" : ""}`} 
                onClick={() => updateCarousel(index)}
              />
            ))}
          </div>
        </section>

        {/* STORY SECTION */}
        <motion.section 
          className="story-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Our Story</h2>
          <p className="section-paragraph">
            What began as a humble effort by a small group of devoted individuals has grown into a meaningful journey of service. 
            For many years, our team quietly engaged in social work, driven by compassion and a shared vision for a better future. 
            In 2023, that collective spirit gave birth to a formal mission — the founding of the <strong>Suwa Diwiya Social Care Foundation</strong>.
            <br /><br />
            Under the guidance of our founder, <strong>Ven. Bedirekke Suditha Thero</strong>, we focus on community wellness, education, and mindful service.
            Every act of kindness is a step toward building a healthier, more compassionate world.
          </p>
          <a href="/get-involved" className="cta donate-button">Join Our Mission</a>
        </motion.section>

        {/* JOURNEY TIMELINE */}
        <section className="journey-section">
          <h2 className="section-title">The Journey</h2>
          <div className="timeline-container" ref={timelineRef}>
            {journeyData.map((item, index) => (
              <motion.div 
                className="timeline-card" 
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="icon">{item.icon}</div>
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* JOURNEY DETAIL */}
        <section className="journey-detail-section">
          <div className="journey-detail-wrapper">
            <motion.div 
              className="journey-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://i.postimg.cc/2yhcsSwB/bag.jpg" alt="Community Support" />
            </motion.div>
            <motion.div 
              className="journey-description"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3>Healing Hands, Growing Hope</h3>
              <p>
                Our foundation believes in the power of small actions with big impacts. 
                We capture the essence of our work — healing, nurturing, and supporting those in need through compassionate care and mindful service. 
                Together, we plant seeds for a brighter tomorrow.
              </p>
              <div className="cta-buttons">
                <a href="/contact-us" className="contact-button">Contact Us</a>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
