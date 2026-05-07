import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      {/* Background Effects */}
      <div className="hiw-bg-effects">
        <img src="/light.png" alt="" className="hiw-light-right" />
        <img src="/meteor.png" alt="" className="hiw-meteor" />
        {/* Subtle background dots/stars could be handled in CSS, but let's keep it simple for now */}
      </div>

      <div className="hiw-inner">
        {/* Header */}
        <div className="hiw-header">
          <div className="hiw-badge">
            <span className="hiw-badge-icon">🕵️‍♀️</span>
            <span className="hiw-badge-text">HOW IT WORKS</span>
          </div>
          <h2 className="hiw-heading">
            AI That Simplifies Every Part of Customer Management
          </h2>
          <p className="hiw-subtext">
            Our AI-driven CRM automates routine work, centralizes customer data, and delivers insights that help
            your team move faster, collaborate better, and grow smarter—without complexity.
          </p>
        </div>

        {/* Mockup */}
        <div className="hiw-mockup">
          <img src="/contact.png" alt="Contact Overview" className="hiw-mockup-img" />
        </div>

        {/* Bottom Columns */}
        <div className="hiw-features">
          <div className="hiw-feature">
            <h3>Capture From Every Channel</h3>
            <p>
              Automatically collect leads from all platforms and keep
              customer data neatly organized in one system.
            </p>
          </div>
          <div className="hiw-feature">
            <h3>Automate With Smart AI</h3>
            <p>
              Let AI handle routine tasks, answer customer queries, and
              streamline your workflow effortlessly.
            </p>
          </div>
          <div className="hiw-feature">
            <h3>Analyze Insights, Take Action</h3>
            <p>
              Use AI-powered analytics to understand customer behavior
              and make faster, smarter decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
