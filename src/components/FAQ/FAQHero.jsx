import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FAQHero.css';
import { GridPattern } from "../ui/grid-pattern";

const FAQHero = () => {
  const navigate = useNavigate();
  
  const scrollToContent = () => {
    const content = document.getElementById('faq-content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="faq-hero">
      <div className="faq-hero-glow" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      <div className="faq-hero-inner">
        <div className="faq-hero-badge">
          <span className="badge-icon">💡</span>
          <span className="badge-text">FAQ</span>
        </div>
        
        <h1 className="faq-hero-heading">
          Everything You Need to Know<br />
          Before You Start
        </h1>
        
        <p className="faq-hero-subtext">
          Learn how Spacious fits into your workflow, protects your<br />
          data, and delivers value from day one.
        </p>

        <div className="faq-hero-actions">
          <button className="faq-hero-btn-primary" onClick={scrollToContent}>
            SEE THE QUESTIONS
          </button>
          <button 
            className="faq-hero-btn-secondary"
            onClick={() => navigate('/contact')}
          >
            BOOK A DEMO
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQHero;
