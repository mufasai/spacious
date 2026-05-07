import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HowItWorksHero.css';
import { GridPattern } from "../ui/grid-pattern";

const HowItWorksHero = () => {
  const navigate = useNavigate();

  return (
    <section className="hiw-hero">
      <div className="hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="hiw-hero-content">
        <div className="hiw-hero-badge">
          <span className="badge-icon">🧩</span>
          <span className="badge-text">HOW IT WORKS</span>
        </div>

        <h1 className="hiw-hero-heading">
          From Data to Action,<br />
          Step by Step
        </h1>

        <p className="hiw-hero-subtext">
          See how Spacious collects customer signals, applies AI<br />
          intelligence, and turns everyday interactions into results.
        </p>

        <div className="hiw-hero-actions">
          <button className="hiw-btn-primary">SEE THE PROCESS</button>
          <button 
            className="hiw-btn-secondary"
            onClick={() => navigate('/contact')}
          >
            BOOK A DEMO
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksHero;
