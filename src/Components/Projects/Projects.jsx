import React, { useState } from 'react';
import './Projects.css';

const annualProjects = [
  {
    id: 101,
    title: 'School Supplies Drive',
    description: 'Distributed books, bags, shoes, and educational toys to children in need.',
    image: 'https://source.unsplash.com/400x250/?school,supplies',
  },
  {
    id: 102,
    title: 'Sri Pada Pilgrimage',
    description: "Organized a sacred journey to Adam's Peak with local devotees.",
    image: 'https://source.unsplash.com/400x250/?mountain,pilgrimage',
  },
  {
    id: 103,
    title: 'Community Dansala Events',
    description: 'Hosted three food donation stalls serving free meals to the public.',
    image: 'https://source.unsplash.com/400x250/?food,charity',
  },
  {
    id: 104,
    title: 'Visit to Ruwanweliseya',
    description: 'Pilgrimage to the sacred stupa, nurturing spiritual growth.',
    image: 'https://source.unsplash.com/400x250/?temple,buddhism',
  },
  {
    id: 105,
    title: 'Ayurveda Awareness Camp',
    description: 'Offered natural healing and wellness education to the public.',
    image: 'https://source.unsplash.com/400x250/?ayurveda,healing',
  },
  {
    id: 106,
    title: 'Ayurvedic Oil Workshop',
    description: 'Demonstrated traditional oil preparation for health and wellbeing.',
    image: 'https://source.unsplash.com/400x250/?herbal,oil',
  },
];

const projectsData = [
  {
    id: 1,
    title: 'Health Outreach Program',
    description: 'Providing essential medical services to underprivileged communities.',
    image: 'https://source.unsplash.com/400x250/?healthcare,medical',
    photoGalleryLink: '#gallery1',
    youtubeLink: 'https://www.youtube.com/watch?v=healthoutreach',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Empowering children with quality education and learning resources.',
    image: 'https://source.unsplash.com/400x250/?education,children',
    photoGalleryLink: '#gallery2',
    youtubeLink: 'https://www.youtube.com/watch?v=educationforall',
  },
  {
    id: 3,
    title: 'Community Support',
    description: 'Offering support and resources to families in need.',
    image: 'https://source.unsplash.com/400x250/?community,support',
    photoGalleryLink: '#gallery3',
    youtubeLink: 'https://www.youtube.com/watch?v=communitysupport',
  },
  {
    id: 4,
    title: 'Environmental Awareness',
    description: 'Promoting eco-friendly habits and sustainability.',
    image: 'https://source.unsplash.com/400x250/?environment,nature',
    photoGalleryLink: '#gallery4',
    youtubeLink: 'https://www.youtube.com/watch?v=environment',
  },
  {
    id: 5,
    title: 'Youth Empowerment',
    description: 'Building skills and confidence in young adults.',
    image: 'https://source.unsplash.com/400x250/?youth,empowerment',
    photoGalleryLink: '#gallery5',
    youtubeLink: 'https://www.youtube.com/watch?v=youthempowerment',
  },
  {
    id: 6,
    title: 'Arts & Culture',
    description: 'Fostering creativity and cultural expression.',
    image: 'https://source.unsplash.com/400x250/?arts,culture',
    photoGalleryLink: '#gallery6',
    youtubeLink: 'https://www.youtube.com/watch?v=artsculture',
  },
  {
    id: 7,
    title: 'Food Security',
    description: 'Providing nutritious meals to vulnerable populations.',
    image: 'https://source.unsplash.com/400x250/?food,security',
    photoGalleryLink: '#gallery7',
    youtubeLink: 'https://www.youtube.com/watch?v=foodsecurity',
  },
  {
    id: 8,
    title: 'Disaster Relief',
    description: 'Rapid response to natural disasters.',
    image: 'https://source.unsplash.com/400x250/?disaster,relief',
    photoGalleryLink: '#gallery8',
    youtubeLink: 'https://www.youtube.com/watch?v=disasterrelief',
  },
  {
    id: 9,
    title: 'Senior Care',
    description: 'Support and activities for the elderly community.',
    image: 'https://source.unsplash.com/400x250/?senior,care',
    photoGalleryLink: '#gallery9',
    youtubeLink: 'https://www.youtube.com/watch?v=seniorcare',
  },
  {
    id: 10,
    title: 'Technology Access',
    description: 'Bridging the digital divide in underserved areas.',
    image: 'https://source.unsplash.com/400x250/?technology,digital',
    photoGalleryLink: '#gallery10',
    youtubeLink: 'https://www.youtube.com/watch?v=technologyaccess',
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects">
      <header className="projects-header">
        <h1>Our Projects</h1>
        <p>Discover the various initiatives and programs we are working on to support our community.</p>

        <input
          type="search"
          placeholder="Search projects..."
          aria-label="Search projects"
          className="projects-search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {searchTerm && (
        <section className="projects-list">
          {filteredProjects.length > 0 ? (
            filteredProjects.map(({ id, title, description, image, photoGalleryLink, youtubeLink }) => (
              <div key={id} className="project-item" tabIndex="0" aria-label={title}>
                <img src={image} alt={title} className="project-image" />
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="project-links">
                  <a href={photoGalleryLink} className="see-more-link" target="_blank" rel="noopener noreferrer">📸 See More</a>
                  <a href={youtubeLink} className="youtube-link" target="_blank" rel="noopener noreferrer">▶️ Watch Video</a>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No projects match your search.</p>
          )}
        </section>
      )}

      {!searchTerm && (
        <>
          <section className="annual-projects">
            <h2>🌟 1st Annual Projects (2025)</h2>
            <div className="projects-list">
              {annualProjects.map(({ id, title, description, image }) => (
                <div key={id} className="project-item" tabIndex="0" aria-label={title}>
                  <img src={image} alt={title} className="project-image" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </section>

          <hr style={{ margin: '3rem auto', borderTop: '1.5px solid #ccc', maxWidth: '800px' }} />

          <section className="projects-list">
            {projectsData.map(({ id, title, description, image, photoGalleryLink, youtubeLink }) => (
              <div key={id} className="project-item" tabIndex="0" aria-label={title}>
                <img src={image} alt={title} className="project-image" />
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="project-links">
                  <a href={photoGalleryLink} className="see-more-link" target="_blank" rel="noopener noreferrer">📸 See More</a>
                  <a href={youtubeLink} className="youtube-link" target="_blank" rel="noopener noreferrer">▶️ Watch Video</a>
                </div>
              </div>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default Projects;