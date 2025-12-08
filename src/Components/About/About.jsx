import React, { useState, useEffect, useRef } from "react";
import "./About.css";
import { FiFeather } from "react-icons/fi";
import { BiLeaf } from "react-icons/bi";
import { BsClipboardCheck, BsHeart } from "react-icons/bs";

// Team Members with online image links
const teamMembers = [
  { name: "Ven. Suditha Thero", role: "Founder", image: "https://i.postimg.cc/bwsbrF7m/founder.jpg" },
  { name: "C. Sooriyabandara", role: "Director", image: "https://i.postimg.cc/85hLDJ2D/director1.jpg" },
  { name: "Emma", role: "Director", image: "https://i.postimg.cc/XYzfg0KM/director2.jpg" },
  { name: "Emma", role: "Director", image: "https://i.postimg.cc/G20vZJSq/director4.jpg" },
  { name: "L. Thushari", role: "Director", image: "https://i.postimg.cc/hGQ9y3MX/director3.jpg" },
  { name: "C. Lakmal", role: "Chief Organizer", image: "https://i.postimg.cc/wxQDGN5Q/organizer.jpg" },
];

const journeyData = [
  {
    year: "2019",
    icon: <FiFeather />,
    title: "Quiet Beginnings",
    description: "A small group of kind souls quietly serving communities with compassion.",
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
    description: "We officially registered the Suwa Diwiya Social Care Foundation as a non-profit.",
  },
  {
    year: "Now",
    icon: <BsHeart />,
    title: "The Journey Continues...",
    description: "We continue to grow with small, impactful projects rooted in healing and hope.",
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const touchStartX = useRef(0);
  const timelineRef = useRef(null);

  const updateCarousel = (newIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    const total = teamMembers.length;
    const index = (newIndex + total) % total;
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

  const scrollAmount = 400;

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

        {/* Journey Detail with Image */}
        <section className="journey-detail-section">
          <div className="journey-detail-wrapper">
            <div className="journey-image">
              <img
                src="https://i.postimg.cc/2yhcsSwB/bag.jpg"
                alt="Healing hands helping community"
              />
            </div>
            <div className="journey-description">
              <h3>Healing Hands, Growing Hope</h3>
              <p>
                Our foundation believes in the power of small actions with big impacts. This
                image captures the essence of our work — healing, nurturing, and supporting
                those in need through compassionate care and mindful service. Together, we
                plant seeds for a brighter tomorrow.
              </p>
            </div>
          </div>
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
