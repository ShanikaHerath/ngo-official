import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import './Classes.css';


const courseData = [
  {
    id: 1,
    title: 'Vital Point Therapy',
    nativeTitle: 'නිල වෙදකම (Nila Wedakama)',
    description: 'Learn the ancient art of manipulating vital energy points for healing.',
    icon: '🌿'
  },
  {
    id: 2,
    title: 'Toxicology & Snakebite Treatment',
    nativeTitle: 'සර්පවිෂ (Sarpa Visha)',
    description: 'Traditional methods for neutralizing toxins and treating snakebites.',
    icon: '🐍'
  },
  {
    id: 3,
    title: 'Pulse Diagnosis',
    nativeTitle: 'නාඩි වෙදකම (Nadi Wedakama)',
    description: 'Master the diagnostic technique of reading the body’s pulse signals.',
    icon: '❤️'
  },
  {
    id: 4,
    title: 'General Medicine',
    nativeTitle: 'සර්වාංග වෙදකම (Sarvanga)',
    description: 'Comprehensive holistic treatments for general systemic health.',
    icon: '🧘'
  },
  {
    id: 5,
    title: 'Medicinal Oil Preparation',
    nativeTitle: 'තෙල් සිදීමේ වැඩසටහන්',
    description: 'Practical workshops on preparing traditional herbal oils.',
    icon: '⚱️'
  }
];

const Classes = () => {
  const navigate = useNavigate();

  return (
    <section className="ayurveda-section">
      <div className="container">
        <button className="back-btn" onClick={() => navigate('/ayurvedha')}>
          <ArrowLeft size={20} />
          <span>Back to Offerings</span>
        </button>

        <div className="header-content">
          <h1>Ayurveda Learning Programs</h1>
          <p className="subtitle">
            Explore our ancient healing wisdom through these specialized sessions.
          </p>
          <div className="divider"></div>
        </div>

        <div className="classes-grid">
          {courseData.map((course) => (
            <div key={course.id} className="class-card">
              <div className="card-icon">{course.icon}</div>
              <div className="card-content">
                <h3>{course.title}</h3>
                <span className="native-text">{course.nativeTitle}</span>
                <p>{course.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
