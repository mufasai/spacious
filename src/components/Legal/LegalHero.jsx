import React from 'react';
import './LegalHero.css';
import { GridPattern } from "../ui/grid-pattern";

const LegalHero = ({ badge, title, description, lastUpdated }) => {
  return (
    <section className="legal-hero">
      <div className="hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="legal-hero-content">
        <div className="legal-badge">
          <span className="badge-icon">📄</span>
          <span className="badge-text">{badge}</span>
        </div>

        <h1 className="legal-heading">{title}</h1>
        <p className="legal-description">{description}</p>
        
        <div className="last-updated">
           <span className="calendar-icon">📅</span>
           Last Updated: {lastUpdated}
        </div>
      </div>
    </section>
  );
};

export default LegalHero;
