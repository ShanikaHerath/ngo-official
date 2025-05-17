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
        </div>
      </section>

      {/* Projects Section */}
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
