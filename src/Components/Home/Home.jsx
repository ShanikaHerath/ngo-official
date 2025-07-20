import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

// ✅ Image imports (replace with actual images)
import featuredProjectImage from '../assets/sclB.jpg';
import schoolSupplies from '../assets/school-supplies.jpg';
import ayurvedicCamp from '../assets/ayurvedic-camp.jpg';
import sriPada from '../assets/sri-pada.jpg';
import ruwanweliseya from '../assets/ruwanweliseya.jpg';
import vesakDansala from '../assets/vesak-dansala.jpg';

const vmvData = [
  {
    title: 'Vision',
    description:
      'To create a world where every individual, regardless of their background, has access to quality care, education, and empowerment opportunities.',
  },
  {
    title: 'Mission',
    description:
      'To implement inclusive, sustainable programs that address healthcare, education, and social development in underserved communities.',
  },
  {
    title: 'Values',
    description:
      'We are guided by compassion, integrity, inclusiveness, and a commitment to empowering individuals and communities to thrive.',
  },
];

// 🎯 Updated Annual Projects
const projectData = [
  {
    id: 1,
    title: 'Backpacks of Hope: Supplying Dreams to Underprivileged Schools',
    description: 'Providing essential school supplies to students in need.',
    image: schoolSupplies,
  },
  {
    id: 2,
    title: 'Healing for All: Free Ayurvedic Medical Camp',
    description: 'Offering free traditional healing and consultations for rural communities.',
    image: ayurvedicCamp,
  },
  {
    id: 3,
    title: 'Sacred Steps & Soothing Hands: Sri Pada Pilgrim Support',
    description: 'Ayurvedic massage & refreshment for pilgrims after their sacred journey.',
    image: sriPada,
  },
  {
    id: 4,
    title: 'Divine Journey: Ruwanweli Maha Seya Pilgrimage',
    description: 'Organizing respectful religious tours to one of the most sacred sites.',
    image: ruwanweliseya,
  },
  {
    id: 5,
    title: 'Vesak Kindness Kitchen: Free Dansal for Devotees',
    description: 'Spreading joy and unity through free meals during Vesak celebrations.',
    image: vesakDansala,
  },
];

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const VMVCard = ({ title, description }) => (
  <motion.article
    className="vmv-card-content"
    role="article"
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.article>
);

const ProjectCard = ({ title, description, image }) => (
  <motion.div
    className="project-card"
    role="region"
    aria-label={title}
    variants={fadeUpVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.4 }}
  >
    <img
      src={image}
      alt={`${title} image`}
      className="project-image"
      loading="lazy"
    />
    <div className="project-info">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </motion.div>
);

const Home = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    const cardWidth = 320;
    if (direction === 'left') {
      current.scrollLeft -= cardWidth;
    } else {
      current.scrollLeft += cardWidth;
    }
  };

  return (
    <main className="home" id="home">
      {/* Hero Section */}
      <header className="home-header">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Suwa Diwiya Social Care Foundation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Improving lives through compassionate care and community support.
        </motion.p>

        <motion.figure
          className="featured-project-image-wrapper"
          aria-label="Featured Project"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <img
            src={featuredProjectImage}
            alt="Community volunteers working together"
            className="featured-project-image"
            loading="lazy"
          />
        </motion.figure>
      </header>

      {/* Vision, Mission, Values */}
      <section className="vmv-section" aria-labelledby="vmv-heading">
        <div className="vmv-cards">
          {vmvData.map((item, index) => (
            <VMVCard key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="home-projects" aria-labelledby="projects-heading">
        <h2 id="projects-heading">Our Annual Projects</h2>
        <div className="projects-wrapper">
          <button
            className="scroll-btn scroll-left"
            onClick={() => scroll('left')}
          >
            &lt;
          </button>
          <div className="projects-scroll" ref={scrollRef}>
            {projectData.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <button
            className="scroll-btn scroll-right"
            onClick={() => scroll('right')}
          >
            &gt;
          </button>
        </div>

        <Link to="/projects" className="pro-button" aria-label="View more projects">
          More projects
        </Link>
      </section>

      {/* Call to Action */}
      <motion.section
        className="home-cta"
        aria-labelledby="cta-heading"
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h2 id="cta-heading">Get Involved</h2>
        <p>Join us in making a difference. Volunteer, donate, or participate in our events.</p>
        <Link to="/get-involved" className="cta-button" role="button">
          Learn More
        </Link>
      </motion.section>
    </main>
  );
};

export default Home;
