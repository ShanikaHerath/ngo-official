import React from 'react';
import './About.css';

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

  return (
    <section className="section">
      <div className="section-wrapper">
        <header className="header">
          <hgroup className="hgroup">
            <h2 className="headline">Our Team!</h2>
            <p className="tagline">Creative minds shaping the future</p>
          </hgroup>
          <a href="#" className="section-link">
            View All
          </a>
        </header>
        <ul className="cards" style={{ '--nth-siblings': totalCards - 1 }}>
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
