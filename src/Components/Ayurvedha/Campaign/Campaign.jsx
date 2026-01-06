import React from 'react';
import './Campaign.css';

// Placeholder data for the campaign services
const campaignServices = [
  {
    id: 1,
    title: 'General Health Check-up',
    description: 'Comprehensive body constitution analysis (Prakriti) by expert practitioners.',
    icon: '🩺'
  },
  {
    id: 2,
    title: 'Pulse Diagnosis',
    description: 'Traditional Nadi Pariksha to detect imbalances in the body.',
    icon: '❤️'
  },
  {
    id: 3,
    title: 'Dietary Awareness',
    description: 'Personalized food guidance based on your body type and season.',
    icon: '🥗'
  },
  {
    id: 4,
    title: 'Herbal Medicine',
    description: 'Distribution of essential herbal supplements for immunity.',
    icon: '🌿'
  }
];

const Campaign = () => {
  return (
    <section className="campaign-section">
      <div className="container">
        <div className="header-content">
          <h1>Ayurvedic Medical Clinic</h1>
          <span className="tagline">Free Health Campaign</span>
          <p className="subtitle">
            Join our community health initiative. We offer free check-ups, 
            treatments, and awareness programs to restore your natural balance.
          </p>
          <div className="divider"></div>
        </div>

        <div className="campaign-grid">
          {campaignServices.map((service) => (
            <div key={service.id} className="service-card">
              <div className="card-icon">{service.icon}</div>
              <div className="card-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaign;