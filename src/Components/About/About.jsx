import React, { useState, useEffect } from "react";
import "./About.css";

const teamMembers = [
  { name: "Emily Kim", role: "Founder" },
  { name: "Michael Steward", role: "Creative Director" },
  { name: "Emma Rodriguez", role: "Lead Developer" },
  { name: "Julia Gimmel", role: "UX Designer" },
  { name: "Lisa Anderson", role: "Marketing Manager" },
  { name: "James Wilson", role: "Product Manager" },
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
      onTouchEnd={(e) =>
        handleSwipe(touchStartX, e.changedTouches[0].screenX)
      }
    >
      <div className="about-wrapper">
        <h1 className="about-title">OUR TEAM</h1>

        <div className="carousel-container">
          <button
            className="nav-arrow left"
            onClick={() => updateCarousel(currentIndex - 1)}
          >
            ‹
          </button>

          <div className="carousel-track">
            {teamMembers.map((_, index) => {
              let className = "card";
              const offset = (index - currentIndex + teamMembers.length) % teamMembers.length;

              if (offset === 0) className += " center";
              else if (offset === 1) className += " right-1";
              else if (offset === 2) className += " right-2";
              else if (offset === teamMembers.length - 1) className += " left-1";
              else if (offset === teamMembers.length - 2) className += " left-2";
              else className += " hidden";

              const imageUrl = `https://source.unsplash.com/400x400/?portrait,person&sig=${index}`;

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => updateCarousel(index)}
                >
                  <img src={imageUrl} alt={`Team Member ${index + 1}`} />
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
      </div>
    </div>
  );
};

export default About;
