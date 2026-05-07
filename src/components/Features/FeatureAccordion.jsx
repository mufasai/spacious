import React, { useState } from 'react';
import './FeatureAccordion.css';

const features = [
  {
    id: 1,
    title: "Know Your Customers Before You Even Talk to Them",
    description: "AI automatically analyzes behavior, interactions, and historical data to score leads, prioritize opportunities, and help your sales team focus on the highest-impact prospects.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        <path d="M13 8h.01"></path>
        <path d="M17 8h.01"></path>
        <path d="M9 8h.01"></path>
      </svg>
    ),
    image: "/Home/status.png"
  },
  {
    id: 2,
    title: "Automate Repetitive Work and Accelerate Every Process",
    description: "AI streamlines time-consuming tasks like data entry, follow-ups, and workflow routing, so your team can work faster with fewer errors. By automating routine operations, your business gains efficiency.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    image: "/Home/customer.png"
  },
  {
    id: 3,
    title: "See Every Customer Touchpoint Clearly in One Unified View",
    description: "All customer interactions across channels are automatically consolidated into a single, real-time dashboard. This unified view helps your team understand customer journeys.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
    ),
    image: "/public/Home/status.png"
  }
];

const FeatureAccordion = () => {
  const [activeFeature, setActiveFeature] = useState(1);

  return (
    <section className="feature-accordion-section">
      <div className="feature-accordion-container">
        <div className="feature-image-side">
          <div className="image-display-box">
             {features.map((feature) => (
               <img
                 key={feature.id}
                 src={feature.image}
                 alt={feature.title}
                 className={`feature-display-image ${activeFeature === feature.id ? 'active' : ''}`}
               />
             ))}
          </div>
        </div>

        <div className="feature-content-side">
          <div className="accordion-list">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className={`accordion-item ${activeFeature === feature.id ? 'active' : ''}`}
                onClick={() => setActiveFeature(feature.id)}
              >
                <div className="accordion-header">
                  <div className="feature-icon-box">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
                <div className="accordion-body">
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="active-indicator"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAccordion;
