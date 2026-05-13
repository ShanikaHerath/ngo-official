import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Image, Play, ArrowRight } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    category: "Education",
    title: 'Habarana Educational Support',
    description: 'Distributing school uniforms and essential equipment to children at Puwakpitiya Bosath Dhamma School.',
    fullDescription: 'On March 23, 2026, under the spiritual guidance of Ven. Bedirakke Suditha Thero and with the support of Suwa Diwiya Foundation members, we distributed white school uniforms and educational equipment to the children of Puwakpitiya Bosath Dhamma School in Habarana. This initiative aimed to support the education and spiritual development of rural students.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'March 23, 2026',
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
  {
    id: 2,
    category: "Community",
    title: 'Bedirakke New Year Celebration',
    description: 'Celebrating the Sinhala and Tamil New Year with students and villagers of Bedirakke.',
    fullDescription: 'On March 22, 2026, under the leadership of Ven. Bedirakke Suditha Thero, a traditional New Year festival was organized for the students of Bedirakke School and the local community. Sponsored by the Suwa Diwiya Foundation, the event brought joy and cultural heritage to the village through traditional games and celebrations.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'March 22, 2026',
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
  {
    id: 3,
    category: "Education",
    title: 'Educational Book Donation Drive',
    description: 'Providing essential books to students of Am/Maha Bedirakke School to enhance their knowledge.',
    fullDescription: 'On March 31, 2025, Suwa Diwiya Foundation organized a book donation program for the students of Am/Maha Bedirakke School. Our goal was to expand the knowledge and educational growth of these young students. We extend our heartfelt gratitude to everyone who contributed to making this noble mission a success.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'March 31, 2025',
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
  {
    id: 4,
    category: "Healthcare",
    title: 'Anniversary Ayurvedic Medical Clinic',
    description: 'A free medical camp for rural health promotion marking the foundation\'s 1st anniversary.',
    fullDescription: 'To commemorate the 1st anniversary of the Suwa Diwiya Social Welfare Foundation on March 31, 2025, a free Ayurvedic medical clinic was held for the rural community. Guided by Ven. Bedirakke Suditha Thero, this initiative focused on promoting holistic health and well-being. We are grateful to all who dedicated their time and compassion to this successful mission.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'March 31, 2025',
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
  {
    id: 5,
    category: "Spiritual",
    title: 'Blessing Ceremony at Ruwanwelisaya',
    description: 'A grand Pirith chanting and blessing ceremony with 100 venerable monks at the Swarnamali Maha Saya.',
    fullDescription: 'On November 21, 2024, a powerful Pirith chanting and blessing ceremony was held at the sacred Swarnamali Maha Saya (Ruwanwelisaya). Under the guidance of Ven. Bedirakke Suditha Thero and organized by Directors Malathi Wijesinghe and Sugath, 100 monks participated in this spiritual event to invoke blessings for the foundation and the community.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'November 21, 2024',
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
  {
    id: 6,
    category: "Training",
    title: 'Neelyadi Oil & Detox Training',
    description: 'Practical training for doctors and medical students on preparing traditional Neelyadi oil and detoxification methods.',
    fullDescription: 'On August 31 and September 1, 2024, Suwa Diwiya Foundation organized a specialized practical workshop led by Ven. Bedirakke Suditha Thero. The program provided hands-on training to Ayurvedic doctors and medical students on the traditional preparation of Neelyadi oil and various detoxification techniques, preserving essential ancient medical knowledge.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'Aug 31 - Sep 1, 2024',
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
  {
    id: 7,
    category: "Special",
    title: 'Hearing Aid Donation for Students',
    description: 'Providing a life-changing hearing aid to a student with hearing impairment.',
    fullDescription: 'On April 19, 2024, following the guidance of Ven. Bedirakke Suditha Thero, a high-cost hearing aid was donated to a schoolgirl suffering from hearing impairment. This donation was made possible through the coordination of Dr. Chandrika de Silva and the financial contribution of teacher Seetha Ranjanee, opening new doors for the student\'s education.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'April 19, 2024',
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
  {
    id: 8,
    category: "Service",
    title: 'Sri Pada Pilgrim Care Service',
    description: 'Offering therapeutic foot care and medicinal oil treatments for pilgrims climbing Adam\'s Peak.',
    fullDescription: 'On March 16, 2024, Suwa Diwiya Foundation provided a dedicated service for Sri Pada pilgrims. Under the guidance of Ven. Bedirakke Suditha Thero and Dr. Chandrika de Silva, our team applied medicinal oils and used herbal compresses (Pottani) to soothe the weary feet of thousands of devotees. This merit-filled initiative was supported by generous donations of medicinal oils, gas, and supplies.',
    image: 'https://i.postimg.cc/t4W9H7mH/placeholder-project.jpg',
    date: 'March 16, 2024',
    requirements: [
      'Medicinal Oils (for 5,000 pilgrims)',
      '50 Prepared Herbal Poultices (Pottani)',
      '06 Filled Gas Tanks',
      '10kg Beli Mal (Dried Beli flowers)',
      'Jaggery (Hakuru) for 5,000 pilgrims',
      '02 Tents or Shelters'
    ],
    bankDetails: [
      {
        name: 'Ven. Badirukke Suditha Thero',
        bank: 'Bank of Ceylon (BOC)',
        branch: 'Bandaragama',
        account: '3252834'
      },
      {
        name: 'Ven. Badirukke Suditha Thero',
        bank: 'Sampath Bank',
        branch: 'Piliyandala',
        account: '101954665556'
      }
    ],
    whatsapp: '0777102801',
    inquiries: '0777102801'
  },
];

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="projects-page section-padding">
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
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} />
                  <span className="category-tag">{project.category}</span>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-actions">
                    <button className="icon-btn" onClick={() => setSelectedProject(project)}><Image size={18} /> <span>Photos</span></button>
                    <button className="icon-btn" onClick={() => setSelectedProject(project)}><Play size={18} /> <span>Videos</span></button>
                  </div>
                  <button onClick={() => setSelectedProject(project)} className="view-more">
                    View Full Story <ArrowRight size={16} />
                  </button>
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

        {/* Project Detail Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
              <motion.div 
                className="project-modal-content"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="close-modal" onClick={() => setSelectedProject(null)}>&times;</button>
                
                <div className="modal-header">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h2>{selectedProject.title}</h2>
                  <p className="modal-date"><strong>Date:</strong> {selectedProject.date}</p>
                </div>

                <div className="modal-scroll-area">
                  <div className="modal-section">
                    <h3>About the Project</h3>
                    <p>{selectedProject.fullDescription}</p>
                  </div>

                  {selectedProject.requirements && (
                    <div className="modal-section">
                      <h3>Required Materials</h3>
                      <ul className="requirements-list">
                        {selectedProject.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {selectedProject.bankDetails && (
                    <div className="modal-section">
                      <h3>Support via Donation</h3>
                      <div className="bank-grid">
                        {selectedProject.bankDetails.map((bank, i) => (
                          <div key={i} className="bank-card">
                            <h4>{bank.bank}</h4>
                            <p><strong>Name:</strong> {bank.name}</p>
                            <p><strong>Account:</strong> {bank.account}</p>
                            <p><strong>Branch:</strong> {bank.branch}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="modal-section contact-info">
                    <h3>How to Contribute</h3>
                    <p>After your donation, please WhatsApp your receipt with your name to <strong>{selectedProject.whatsapp}</strong>.</p>
                    <p>For inquiries: <strong>{selectedProject.inquiries}</strong></p>
                  </div>
                </div>

                <div className="modal-actions">
                  <a href={`https://wa.me/${selectedProject.whatsapp.replace(/\s/g, '')}`} target="_blank" rel="noreferrer" className="whatsapp-btn">
                    WhatsApp Receipt
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
