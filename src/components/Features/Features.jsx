import React, { useState } from 'react';
import './Features.css';

const featureData = [
  {
    id: 1,
    icon: <img src="know.png" alt="know" width="40" height="40" />,
    title: 'Know Your Customers Before You Even Talk to Them',
    desc: 'AI automatically analyzes behavior, interactions, and historical data to score leads, prioritize opportunities, and help your sales team focus on the highest-impact prospects.',
    image: '/Home/message.png'
  },
  {
    id: 2,
    icon: <img src="cart.png" alt="cart" width="40" height="40" />,
    title: 'Automate Repetitive Work and Accelerate Every Process',
    desc: 'AI streamlines time-consuming tasks like data entry, follow-ups, and workflow routing, so your team can work faster with fewer errors. By automating routine operations, your business gains efficiency.',
    image: '/Home/status.png'
  },
  {
    id: 3,
    icon: <img src="eye.png" alt="eye" width="40" height="40" />,
    title: 'See Every Customer Touchpoint Clearly in One Unified View',
    desc: 'All customer interactions across channels are automatically consolidated into a single, real-time dashboard. This unified view helps your team understand customer journeys.',
    image: '/Home/customer.png'
  },
];

const Features = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="features">
      <div className="features-inner">

        <div className="features-header-full">
          <div className="features-badge">
            <span className="features-badge-icon">🧠</span>
            <span className="features-badge-text">INTELEGENTS TOOLS FOR EVERY TEAM</span>
          </div>
          
          <div className="features-header-content">
            <h2 className="features-heading">
              A Complete AI CRM Built to Accelerate Your Operations
            </h2>
            
            <p className="features-subtext">
              From lead generation to customer support, our AI-driven features streamline processes,
              eliminate manual tasks, and ensure your team focuses on what truly matters—building
              strong customer relationships.
            </p>
          </div>
        </div>

        <div className="features-main-content">
          <div className="features-mockup-wrapper">
            <div className="features-mockup">
              {featureData.map((f) => (
                <img 
                  key={f.id}
                  src={f.image} 
                  alt={f.title} 
                  className={`features-mockup-img ${activeId === f.id ? 'active' : ''}`} 
                />
              ))}
            </div>
          </div>

          <div className="features-right">
            <div className="features-list">
              {featureData.map((f) => (
                <div 
                  key={f.id} 
                  className={`feature-item ${activeId === f.id ? 'active' : ''}`}
                  onClick={() => setActiveId(f.id)}
                >
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-body">
                    <h3 className="feature-title">{f.title}</h3>
                    <div className="feature-accordion-content">
                      <p className="feature-desc">{f.desc}</p>
                      <div className="feature-divider" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;