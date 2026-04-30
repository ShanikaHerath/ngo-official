import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Image, Play, ArrowRight } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    category: "Annual",
    title: 'School Supplies Drive',
    description: 'Distributed books, bags, shoes, and educational toys to children in need.',
    image: 'https://i.postimg.cc/2yhcsSwB/bag.jpg',
  },
  {
    id: 2,
    category: "Pilgrimage",
    title: 'Sri Pada Journey',
    description: "Organized a sacred journey to Adam's Peak with local devotees.",
    image: 'https://i.postimg.cc/bwsbrF7m/founder.jpg',
  },
  {
    id: 3,
    category: "Community",
    title: 'Community Dansala',
    description: 'Hosted food donation stalls serving free meals to the public.',
    image: 'https://i.postimg.cc/wxQDGN5Q/organizer.jpg',
  },
  {
    id: 4,
    category: "Wellness",
    title: 'Ayurveda Awareness',
    description: 'Offered natural healing and wellness education to the public.',
    image: 'https://i.postimg.cc/85hLDJ2D/director1.jpg',
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-page">
      <div className="container">
        <motion.header 
          className="page-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>Our Impact</h1>
          <p>Explore our ongoing initiatives and past successes in uplifting the community.</p>
          
          <div className="search-wrapper">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </motion.header>

        <div className="projects-grid">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div 
                key={project.id}
                className="project-card-premium"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <span className="category-tag">{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <button className="icon-btn"><Image size={18} /> <span>Gallery</span></button>
                    <button className="icon-btn"><Play size={18} /> <span>Video</span></button>
                  </div>
                  <Link to={`/projects/${project.id}`} className="view-more">
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <motion.p 
            className="no-results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            No projects found matching "{searchTerm}"
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default Projects;
