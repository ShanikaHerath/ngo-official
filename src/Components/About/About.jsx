import React, { useState, useEffect } from "react";
import "./About.css";

// Import images
import emilyImg from "../assets/founder.jpg";
import michaelImg from "../assets/director1.jpg";
import emmaImg from "../assets/director2.jpg";
import juliaImg from "../assets/director3.jpg";
import lisaImg from "../assets/director4.jpg";
import jamesImg from "../assets/organizer.jpg";

const teamMembers = [
  { name: "Suditha Thero", role: "Founder", image: emilyImg },
  { name: "Michael Steward", role: "Creative Director", image: michaelImg },
  { name: "Emma Rodriguez", role: "Lead Developer", image: emmaImg },
  { name: "Julia Gimmel", role: "UX Designer", image: juliaImg },
  { name: "Lisa Anderson", role: "Marketing Manager", image: lisaImg },
  { name: "James Wilson", role: "Product Manager", image: jamesImg },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const index = (newIndex + teamMembers.length) % teamMembers.length;
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
    if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const handleSwipe = (start, end) => {
    const diff = start - end;
    if (Math.abs(diff) > 50) {
      if (diff > 0) updateCarousel(currentIndex + 1);
      else updateCarousel(currentIndex - 1);
    }
  };

  let touchStartX = 0;

  return (
    <div
      className="about-page"
      onTouchStart={(e) => (touchStartX = e.changedTouches[0].screenX)}
      onTouchEnd={(e) => handleSwipe(touchStartX, e.changedTouches[0].screenX)}
    >
      <div className="about-wrapper">
        <h1 className="team-title">OUR TEAM</h1>

        <div className="carousel-container">
          <button
            className="nav-arrow left"
            onClick={() => updateCarousel(currentIndex - 1)}
          >
            ‹
          </button>

          <div className="carousel-track">
            {teamMembers.map((member, index) => {
              let className = "card";
              const offset =
                (index - currentIndex + teamMembers.length) % teamMembers.length;

              if (offset === 0) className += " center";
              else if (offset === 1) className += " right-1";
              else if (offset === 2) className += " right-2";
              else if (offset === teamMembers.length - 1) className += " left-1";
              else if (offset === teamMembers.length - 2) className += " left-2";
              else className += " hidden";

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => updateCarousel(index)}
                >
                  <img src={member.image} alt={`Team Member ${index + 1}`} />
                </div>
              );
            })}
          </div>

          <button
            className="nav-arrow right"
            onClick={() => updateCarousel(currentIndex + 1)}
          >
            ›
          </button>
        </div>

        <div className="member-info">
          <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
          <p className="member-role">{teamMembers[currentIndex].role}</p>
        </div>

        <div className="dots">
          {teamMembers.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => updateCarousel(index)}
            ></div>
          ))}
        </div>

        {/* Our Story */}
        <section className="story-section professional-section">
          <h2 className="section-title">Our Story</h2>
          <p className="section-paragraph">
            Born from a passion to heal and help, our NGO began as a small community
            outreach and grew into a national movement. With every school supply, every
            ayurvedic session, and every act of kindness — we move closer to our goal of
            a better tomorrow.
          </p> <br></br>
          <a href="/donate" className="cta donate-button">Donate</a>
        </section>

        {/* Why We Do This */}
        <section className="why-section professional-section">
          <h2 className="section-title">Why We Do This</h2>
          <p className="section-paragraph">
            Because everyone deserves dignity, health, and opportunity. Whether it's
            remote villages or sacred pilgrim paths, we serve where help is needed the
            most. We believe in action, not just intention.
          </p>
        </section>

        {/* Call to Action */}
        <div className="cta-buttons">
          <a href="/contact-us" className="cta contact-button">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default About;
