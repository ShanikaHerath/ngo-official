import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const projectGridRef = useRef(null);

  const scrollProjects = (direction) => {
    const scrollAmount = 320;
    if (projectGridRef.current) {
      projectGridRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <header className="home-header">
        <div className="hero-text">
          <h1>Welcome to Suwa Diwiya Social Care Foundation</h1>
          <p>Improving lives through compassionate care and community support.</p>
        </div>
        <img
          src="/Assests/WhatsApp Image 2025-05-16 at 13.36.14_f38b4d1c.jpg"
          alt="Community volunteers working together"
          className="featured-project-image"
        />
      </header>

      {/* Vision, Mission, Values Section */}
      <section className="vmv-section">
        <h2>Our Vision, Mission & Values</h2>
        <div className="vmv-cards">
          <article className="vmv-card">
            <h3>Vision</h3>
            <p>Empowering communities through sustainable care and support.</p>
          </article>
          <article className="vmv-card">
            <h3>Mission</h3>
            <p>To uplift underprivileged lives with health, education, and compassion.</p>
          </article>
          <article className="vmv-card">
            <h3>Values</h3>
            <p>Compassion, integrity, inclusiveness, and empowerment.</p>
          </article>
        </div>
      </section>

      {/* Projects Section */}
      <section className="home-projects">
        <h2>Our Projects</h2>

        <div className="project-carousel-wrapper">
          {/* Arrows */}
          <span
            className="carousel-arrow arrow-left"
            onClick={() => scrollProjects('left')}
            aria-label="Scroll Left"
          >
            &#8678;
          </span>
          <div className="projects-grid" ref={projectGridRef}>
            <div className="project-card">
              <img
                src="/Assests/WhatsApp Image 2025-05-16 at 13.36.11_9b70b061.jpg"
                alt="Project 1"
                className="project-image"
              />
              <div className="project-info">
                <h3>Project 1</h3>
                <p>Providing clean water access to rural villages.</p>
              </div>
            </div>

            <div className="project-card">
              <img
                src="/Assests/WhatsApp Image 2025-05-16 at 13.36.11_9b70b061.jpg"
                alt="Project 2"
                className="project-image"
              />
              <div className="project-info">
                <h3>Project 2</h3>
                <p>Healthcare outreach and education programs.</p>
              </div>
            </div>

            <div className="project-card">
              <img
                src="/Assests/WhatsApp Image 2025-05-16 at 13.36.11_9b70b061.jpg"
                alt="Project 3"
                className="project-image"
              />
              <div className="project-info">
                <h3>Project 3</h3>
                <p>Empowering youth through skill development workshops.</p>
              </div>
            </div>

            {/* Add more projects here... */}
          </div>
          <span
            className="carousel-arrow arrow-right"
            onClick={() => scrollProjects('right')}
            aria-label="Scroll Right"
          >
            &#8680;
          </span>
        </div>

        {/* CTA Button */}
        <Link to="/projects" className="pro-button" aria-label="View more projects">
          More projects
        </Link>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <h2>Get Involved</h2>
        <p>Join us in making a difference. Volunteer, donate, or participate in our events.</p>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
  );
};

export default Home;
