import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <header className="projects-header">
        <h1>Our Projects</h1>
        <p>Discover the various initiatives and programs we are working on to support our community.</p>
      </header>
      <section className="projects-list">
        <div className="project-item">
          <h2>Project 1: Health Outreach Program</h2>
          <p>Providing essential medical services to underprivileged communities.</p>
        </div>
        <div className="project-item">
          <h2>Project 2: Education for All</h2>
          <p>Empowering children with quality education and learning resources.</p>
        </div>
        <div className="project-item">
          <h2>Project 3: Community Support</h2>
          <p>Offering support and resources to families in need.</p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
