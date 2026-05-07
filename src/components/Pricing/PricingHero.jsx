import React from 'react';
import './PricingHero.css';
import { GridPattern } from "../ui/grid-pattern";

const PricingHero = () => {
  return (
    <section className="pricing-hero">
      <div className="hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="pricing-hero-content">
        <div className="pricing-hero-badge">
          <span className="badge-icon">💰</span>
          <span className="badge-text">PRICING</span>
        </div>

        <h1 className="pricing-hero-heading">
          Focused on Accelerating your<br />
          Business Growth
        </h1>

        <p className="pricing-hero-subtext">
          Flexible, transparent, and built for every stage. Pick the plan that matches your team's<br />
          needs and scale effortlessly as you grow
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
