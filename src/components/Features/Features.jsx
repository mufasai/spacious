import React from 'react';
import './Features.css';

// import featureImg from '../../assets/feature-mockup.png';

const features = [
  {
    icon: (
      <img src="know.png" alt="know" width="40" height="40" />
    ),
    title: 'Know Your Customers Before You Even Talk to Them',
    desc: 'AI automatically analyzes behavior, interactions, and historical data to score leads, prioritize opportunities, and help your sales team focus on the highest-impact prospects.',
    divider: 'blue',
  },
  {
    icon: (
     <img src="cart.png" alt="cart" width="40" height="40" />
    ),
    title: 'Automate Repetitive Work and Accelerate Every Process',
    desc: null,
    divider: 'gray',
  },
  {
    icon: (
      <img src="eye.png" alt="eye" width="40" height="40" />
    ),
    title: 'See Every Customer Touchpoint Clearly in One Unified View',
    desc: null,
    divider: 'gray',
  },
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-inner">

        {/* ── Row 1: Header ── */}
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

        {/* ── Row 2: Mockup & Features List ── */}
        <div className="features-mockup-wrapper">
          <div className="features-mockup">
            <img src="message.png" alt="Feature Mockup" className="features-mockup-img" />
          </div>
        </div>

        <div className="features-right">
          <div className="features-list">
            {features.map((f, i) => (
              <div key={i} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <div className="feature-body">
                  <h3 className="feature-title">{f.title}</h3>
                  {f.desc && <p className="feature-desc">{f.desc}</p>}
                  {f.divider && <div className={`feature-divider ${f.divider}`} />}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;