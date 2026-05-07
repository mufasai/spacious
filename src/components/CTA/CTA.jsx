import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/pricing');
  };

  return (
    <section className="cta-section">
      <div className="cta-container">
        {/* Light effect */}
        <div className="cta-light" />
        <div className="cta-light-two" />
        
        <div className="cta-content">
          <div className="cta-badge">
            <span className="badge-icon">🏆</span>
            <span className="badge-text">GET STARTED NOW</span>
          </div>
          
          <h2 className="cta-title">
            Get your AI-Powered<br />
            CRM Today
          </h2>
          
          <p className="cta-subtitle">
            Get up and running in minutes and experience smarter workflows, deeper insights, and<br />
            seamless automation—designed to help your team grow faster.
          </p>
          
          <div className="cta-input-wrapper">
            <input 
              type="email" 
              placeholder="Enter your email here..." 
              className="cta-input"
            />
            <button 
              className="cta-submit-btn"
              onClick={handleGetStarted}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
