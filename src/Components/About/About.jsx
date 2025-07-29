import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { FiFeather } from "react-icons/fi";
import { BiLeaf } from "react-icons/bi";
import { BsClipboardCheck, BsHeart } from "react-icons/bs";

// Images
import emilyImg from "../assets/founder.jpg";
import michaelImg from "../assets/director1.jpg";
import emmaImg from "../assets/director2.jpg";
import juliaImg from "../assets/director3.jpg";
import lisaImg from "../assets/director4.jpg";
import jamesImg from "../assets/organizer.jpg";


const teamMembers = [
  { name: "Ven. Suditha Thero", role: "Founder", image: emilyImg },
  { name: "C. Sooriyabandara", role: "Director", image: michaelImg },
  { name: "Emma Rodriguez", role: "Director", image: emmaImg },
  { name: "L. Thushari", role: "Director", image: juliaImg },
  { name: "Lisa Anderson", role: "Director", image: lisaImg },
  { name: "C. Lakmal", role: "Chief Organizer", image: jamesImg },
];

const journeyData = [
  {
    year: "2019",
    icon: <FiFeather />,
    title: "Quiet Beginnings",
    description:
      "A small group of kind souls quietly serving communities with compassion.",
  },
  {
    year: "2023",
    icon: <BiLeaf />,
    title: "Birth of Suwa Diwiya",
    description: "Inspired by purpose, the idea to form a foundation was born.",
  },
  {
    year: "2024",
    icon: <BsClipboardCheck />,
    title: "Legal Registration",
    description:
      "We officially registered the Suwa Diwiya Social Care Foundation as a non-profit.",
  },
  {
    year: "Now",
    icon: <BsHeart />,
    title: "The Journey Continues...",
    description:
      "We continue to grow with small, impactful projects rooted in healing and hope.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // For team carousel swipe handling
  const touchStartX = useRef(0);

  // For timeline scroll container
  const timelineRef = useRef(null);

  // Update team carousel index safely with animation lock
  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const total = teamMembers.length;
    const index = (newIndex + total) % total;
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 800); // animation duration
  };

  // Keyboard navigation for team carousel
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
    if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  // Swipe detection for team carousel
  const handleSwipe = (start, end) => {
    const diff = start - end;
    if (Math.abs(diff) > 50) {
      if (diff > 0) updateCarousel(currentIndex + 1);
      else updateCarousel(currentIndex - 1);
    }
  };

  // Timeline scroll functions for arrows
  const scrollAmount = 400; // should match CSS card width + gap (adjust if needed)

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div
      className="about-page"
      onTouchStart={(e) => (touchStartX.current = e.changedTouches[0].screenX)}
      onTouchEnd={(e) => handleSwipe(touchStartX.current, e.changedTouches[0].screenX)}
    >
      <div className="about-wrapper">
        {/* OUR TEAM */}
        <h1 className="team-title">OUR TEAM</h1>

        <div className="carousel-container">
          <button
            className="nav-arrow left"
            aria-label="Previous team member"
            onClick={() => updateCarousel(currentIndex - 1)}
          >
            ‹
          </button>

          <div className="carousel-track">
            {teamMembers.map((member, index) => {
              let className = "card";
              // Calculate offset relative to current index, circularly
              const total = teamMembers.length;
              const offset = (index - currentIndex + total) % total;

              if (offset === 0) className += " center";
              else if (offset === 1) className += " right-1";
              else if (offset === 2) className += " right-2";
              else if (offset === total - 1) className += " left-1";
              else if (offset === total - 2) className += " left-2";
              else className += " hidden";

              return (
                <div
                  key={index}
                  className={className}
                  onClick={() => updateCarousel(index)}
                >
                  <img src={member.image} alt={`Team Member ${member.name}`} />
                </div>
              );
            })}
          </div>

          <button
            className="nav-arrow right"
            aria-label="Next team member"
            onClick={() => updateCarousel(currentIndex + 1)}
          >
            ›
          </button>
        </div>

        {/* Selected member info */}
        <div className="member-info">
          <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
          <p className="member-role">{teamMembers[currentIndex].role}</p>
        </div>

        {/* Dots navigation */}
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
            What began as a humble effort by a small group of devoted individuals
            has grown into a meaningful journey of service. For many years, our
            team quietly engaged in social work, driven by compassion and a shared
            vision for a better future. In 2023, that collective spirit gave birth
            to a formal mission — the founding of the Suwa Diwiya Social Care
            Foundation.
            <br />
            <br />
            Under the guidance and leadership of our founder,{" "}
            <strong>Ven. Bedirekke Suditha Thero</strong>, the foundation was
            legally registered in 2024. Rooted in traditional values and the
            healing wisdom of Ayurveda, we focus on community wellness, education,
            and mindful service.
            <br />
            <br />
            While our projects may not be large in scale, they are rich in
            purpose. Every school supply given, every healing session shared, and
            every act of kindness delivered is a step toward building a healthier,
            more compassionate world.
            <br />
            <br />
            <strong>We invite you to join us</strong> — as a volunteer, supporter,
            or friend — in this journey of care and connection. Together, we can
            sow seeds of healing and hope across the world.
          </p>
          <br />
          <a href="/get-involved" className="cta donate-button">
            Join with Us
          </a>
        </section>

        {/* Our Journey Timeline */}
        <section className="journey-section">
          <h2 className="section-title">Our Journey</h2>

          <button
            className="timeline-arrow left"
            aria-label="Scroll Left"
            onClick={scrollLeft}
          >
            &lt;
          </button>
          <button
            className="timeline-arrow right"
            aria-label="Scroll Right"
            onClick={scrollRight}
          >
            &gt;
          </button>

          <div className="timeline-container" ref={timelineRef}>
            {journeyData.map((item, index) => (
              <div className="timeline-card" key={index}>
                <div className="icon">{item.icon}</div>
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why We Do This */}
        <section className="why-section professional-section">
          <h2 className="section-title">Why We Do This</h2>
          <p className="section-paragraph">
            Because everyone deserves dignity, health, and opportunity. Whether
            it's remote villages or sacred pilgrim paths, we serve where help is
            needed the most. We believe in action, not just intention.
          </p>
        </section>

        {/* Call to Action */}
        <div className="cta-buttons">
          <a href="/contact-us" className="cta contact-button">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
