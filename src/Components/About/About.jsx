import React, { useRef } from 'react';
import './About.css';

const founder = {
  name: 'Alex M.',
  title: 'Founder & CEO',
  bio: `Visionary, strategist, and the heartbeat behind our mission.
        Alex has been driving innovation and cultivating creativity since day one.`,
  img: 'https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-trig-functions/images/img-founder.avif',
  alt: 'Alex M., Founder & CEO',
};

const teamMembers = [
  {
    name: 'Ethan B.',
    title: 'DevOps Engineer',
    bio: 'Master of servers, pipelines, and keeping things running smoothly.',
    img: 'https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-trig-functions/images/img-1.avif',
    alt: 'Ethan B., DevOps Engineer',
  },
  {
    name: 'Ava L.',
    title: 'UI/UX Designer',
    bio: 'Turning ideas into stunning designs, one pixel at a time.',
    img: 'https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-trig-functions/images/img-2.avif',
    alt: 'Ava L., UI/UX Designer',
  },
  {
    name: 'Liam J.',
    title: 'Mobile Developer',
    bio: 'Crafting sleek, intuitive apps for users on the go.',
    img: 'https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-trig-functions/images/img-3.avif',
    alt: 'Liam J., Mobile Developer',
  },
  {
    name: 'Sophia K.',
    title: 'Data Scientist',
    bio: 'Decoding patterns and finding insights in the chaos.',
    img: 'https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-trig-functions/images/img-4.avif',
    alt: 'Sophia K., Data Scientist',
  },
  {
    name: 'Codey X',
    title: 'AI Code Assistant',
    bio: 'Powered by algorithms, driven by collaboration.',
    img: 'https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-trig-functions/images/img-5.avif',
    alt: 'Codey X, AI Code Assistant',
  },
  {
    name: 'Maya R.',
    title: 'Project Manager',
    bio: 'Keeping the team in sync and deadlines on track.',
    img: 'https://raw.githubusercontent.com/mobalti/modern-web-ui/refs/heads/main/css-trig-functions/images/img-6.avif',
    alt: 'Maya R., Project Manager',
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
    <section className="section">
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

        {/* Arrows (Mobile only via CSS) */}
        <div className="arrow-controls">
          <button className="arrow arrow-left" onClick={scrollLeft} aria-label="Scroll Left">◀</button>
          <button className="arrow arrow-right" onClick={scrollRight} aria-label="Scroll Right">▶</button>
        </div>

        {/* Team Members List */}
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
