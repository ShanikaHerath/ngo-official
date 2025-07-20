<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom'; // <-- You forgot this import!
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Welcome to Suwa Diwiya Social Care Foundation</h1>
        <p>Improving lives through compassionate care and community support.</p>

        {/* Featured Project Image */}
        <div className="featured-project-image-wrapper" aria-label="Featured Project">
          <img
            src="/Assests/WhatsApp Image 2025-05-16 at 13.36.14_f38b4d1c.jpg"
            alt="Community volunteers working together"
            className="featured-project-image"
          />
        </div>
      </header>

      {/* Vision, Mission & Values Section */}
      <section className="vmv-section">
        <h2>Our Vision, Mission & Values</h2>
        <div className="vmv-cards">
          <article className="vmv-card">
            <img src="/assets/vision.jpg" alt="Vision symbolic image" className="vmv-image" />
            <h3>Vision</h3>
            <p>Empowering communities through sustainable care and support.</p>
          </article>

          <article className="vmv-card">
            <img src="https://scontent.fcmb4-2.fna.fbcdn.net/v/t39.30808-6/489448140_122224067036161057_4760894478053854149_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_ohc=wI1B00FZdPIQ7kNvwFw5ndE&_nc_oc=Adm3Cqt2M7urSTkZ-dbjvCmqpkHwPYz7Ra54SH82NqWOc3PDkewZXPQjY6_ZQFzjOPnCy8DTuEYHGz3hRs7Iy7gL&_nc_zt=23&_nc_ht=scontent.fcmb4-2.fna&_nc_gid=RCwraLuGj96nYvPksWpiAg&oh=00_AfKnApEZscVfSQm2kRurIv2W_BoSK6IrVVnIFPPSV1a9VA&oe=682D344E" alt="Mission symbolic image" className="vmv-image" />
          </article>

          <article className="vmv-card">
            <img src="/assets/values.jpg" alt="Values symbolic image" className="vmv-image" />
            <h3>Values</h3>
            <p>Compassion, integrity, inclusiveness, and empowerment.</p>
          </article>
=======
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
>>>>>>> rescue-work
        </div>
      </section>

      {/* Projects Section */}
<<<<<<< HEAD
      <section className="home-projects">
        <h2>Our Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="/Assests/WhatsApp Image 2025-05-16 at 13.36.11_9b70b061.jpg" alt="Project 1 image" className="project-image" />
            <div className="project-info">
              <h3>Project 1</h3>
              <p>Providing clean water access to rural villages.</p>
            </div>
          </div>

          <div className="project-card">
            <img src="/Assests/WhatsApp Image 2025-05-16 at 13.36.11_9b70b061.jpg" alt="Project 2 image" className="project-image" />
            <div className="project-info">
              <h3>Project 2</h3>
              <p>Healthcare outreach and education programs.</p>
            </div>
          </div>

          <div className="project-card">
            <img src="/Assests/WhatsApp Image 2025-05-16 at 13.36.11_9b70b061.jpg" className="project-image" />
            <div className="project-info">
              <h3>Project 3</h3>
              <p>Empowering youth through skill development workshops.</p>
            </div>
          </div>
        </div>

        {/* Fixed: Use Link wrapping button for navigation */}
=======
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

>>>>>>> rescue-work
        <Link to="/projects" className="pro-button" aria-label="View more projects">
          More projects
        </Link>
      </section>

      {/* Call to Action */}
<<<<<<< HEAD
      <section className="home-cta">
        <h2>Get Involved</h2>
        <p>Join us in making a difference. Volunteer, donate, or participate in our events.</p>
        <button className="cta-button">Learn More</button>
      </section>
    </div>
=======
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
>>>>>>> rescue-work
  );
};

export default Home;
