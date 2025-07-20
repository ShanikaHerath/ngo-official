import React, { useRef } from 'react';
import './About.css';

// Founder & Team Images (upload your own!)
import founderImg from '../assets/founder.jpg';
import devaniImg from '../assets/director1.jpg';
import julianImg from '../assets/director2.jpg';
import nishanImg from '../assets/director3.jpg';
import taraImg from '../assets/director4.jpg';
import harshaImg from '../assets/organizer.jpg';

// Founder Info (for the spotlight section)
const founder = {
  name: ' Bedirekke Suditha Thero.',
  title: 'Founder',
  bio: `Ven. Bedireeke Sudith Thero founded this organization with a heart full of kindness and a vision to heal.
        Guided by the timeless teachings of the Buddha and driven by the needs of the most vulnerable,
        he has dedicated his life to serving communities through love, care, and unwavering commitment.
        A spiritual teacher, scholar, and compassionate leader —
        his work continues to touch lives, uplift spirits, and light the path toward a more just and peaceful world.

`,
  img: founderImg,
};

// Team Members (includes Founder too)
const teamMembers = [
  {
  name: ' Bedirekke Suditha Thero.',
    title: 'Founder',
    img: founderImg,
    alt: 'Alex M., Founder',
  },
  {
    name: 'Devani R.',
    title: 'Director - Ayurvedic Wellness',
    img: devaniImg,
    alt: 'Devani R., Director of Operations',
  },
  {
    name: 'Julian S.',
    title: 'Director - Education',
    img: julianImg,
    alt: 'Julian S., Director of Health Programs',
  },
  {
    name: 'L. Thushari',
    title: 'Director - Health Programs',
    img: nishanImg,
    alt: 'L. Thushari, Director of Education',
  },
  {
    name: 'M. C. Gunasekara',
    title: 'Director - Environment',
    img: taraImg,
    alt: 'M. C. Gunasekara, Director of Finance',
  },
  {
    name: 'C. Lakmal',
    title: 'Chief Organizer',
    img: harshaImg,
    alt: 'C. Lakmal, Chief Organizer',
  },
];

const About = () => {
  const totalCards = teamMembers.length;
  const cardsRef = useRef(null);

  const scrollLeft = () => {
    cardsRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    cardsRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <section className="section" style={{ backgroundColor: 'var(--about-bg-color)' }}>
      <div className="section-wrapper">
        {/* Who We Are */}
        <div className="intro-section">
          <h2 className="section-title">Who We Are</h2>
          <p className="section-description">
            We’re a small but mighty team of change-makers who believe that even the quietest efforts can spark global impact.
            Born from a shared passion to uplift marginalized communities, our NGO began as a grassroots movement—and we're still
            proudly rooted in those values.
          </p>
        </div>

        {/* Our Journey */}
        <div className="journey-section">
          <h2 className="section-title">Our Journey</h2>
          <p className="section-description">
            It all began in 2020 when a group of friends saw a gap in access to essential services. With zero funding and a whole
            lot of determination, we launched our first project. Today, we’ve impacted hundreds of lives—and we’re just getting started.
          </p>
        </div>

        {/* What We Do */}
        <div className="what-we-do-section">
          <h2 className="section-title">What We Do</h2>
          <ul className="service-list">
            <li><strong>Community Empowerment:</strong> Skills training, workshops, and mentorship.</li>
            <li><strong>Access to Resources:</strong> Providing essentials like clean water and food supplies.</li>
            <li><strong>Youth Development:</strong> Education programs, mental health support, and scholarships.</li>
          </ul>
        </div>

        {/* Founder Spotlight */}
        <div className="founder-container">
          <div className="founder-image-wrapper">
            <img
              className="founder-image"
              src={founder.img}
              alt={founder.alt}
              width={300}
              height={300}
            />
          </div>
          <div className="founder-description">
            <h2 className="founder-name">{founder.name}</h2>
            <h3 className="founder-title">{founder.title}</h3>
            <p className="founder-bio">{founder.bio}</p>
          </div>
        </div>

        {/* Team Section Header */}
        <header className="header">
          <hgroup className="hgroup">
            <h2 className="headline">Meet the Team</h2>
            <p className="tagline">Creative minds shaping the future</p>
          </hgroup>
        </header>

        {/* Arrow Controls */}
        <div className="arrow-controls">
          <button className="arrow arrow-left" onClick={scrollLeft} aria-label="Scroll Left">◀</button>
          <button className="arrow arrow-right" onClick={scrollRight} aria-label="Scroll Right">▶</button>
        </div>

        {/* Team Members */}
        <ul
          className="cards"
          ref={cardsRef}
          style={{ '--nth-siblings': totalCards - 1 }}
        >
          {teamMembers.map((member, index) => (
            <li
              key={member.name}
              className="card"
              style={{ '--nth-child': index + 1 }}
            >
              <a href="#" className="avatar-link-wrapper">
                <div className="visual">
                  <img
                    className="avatar-img"
                    src={member.img}
                    alt={member.alt}
                    width={144}
                    height={144}
                  />
                </div>
                <div className="tooltiptext">
                  <h3 className="team-name">{member.name}</h3>
                  <div className="team-content-wrapper">
                    <p className="team-title">{member.title}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
