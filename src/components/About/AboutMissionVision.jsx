import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutMissionVision.css';

const StatItem = ({ target, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; 
    const stepTime = 16; 
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="stat-item" ref={elementRef}>
      <h3 className="stat-number">{prefix}{count}{suffix}</h3>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const AboutMissionVision = () => {
  const navigate = useNavigate();

  return (
    <section className="about-mv" id="mission">
      <div className="about-mv-inner">
        {/* Stats Row */}
        <div className="about-stats">
          <StatItem prefix="+" target={40} suffix="%" label="Faster Deal Follow-Ups" />
          <StatItem target={500} suffix="K+" label="Customer Interactions Analyzed" />
          <StatItem target={90} suffix="%" label="Less Manual CRM Work" />
          <StatItem target={50} suffix="+" label="Teams Across Countries" />
        </div>

        <div className="mv-block mission">
          <div className="mv-content">
            <div className="mv-badge">
              <span className="badge-icon">✅</span>
              <span className="badge-text">MISSION</span>
            </div>
            <h2 className="mv-heading">Our Mission</h2>
            <p className="mv-text">
              To help teams understand customers deeply and act with clarity—by turning 
              everyday interactions into meaningful insights through practical, human-centered AI.
            </p>
            <button 
              className="mv-btn"
              onClick={() => navigate('/pricing')}
            >
              GET STARTED
            </button>
          </div>
          <div className="mv-image">
            <img src="/about/mission.png" alt="Our Mission" />
          </div>
        </div>

        <div className="mv-block vision">
          <div className="mv-image">
            <img src="/about/vision.png" alt="Our Vision" />
          </div>
          <div className="mv-content">
            <div className="mv-badge">
              <span className="badge-icon">✅</span>
              <span className="badge-text">VISION</span>
            </div>
            <h2 className="mv-heading">Our Vision</h2>
            <p className="mv-text">
              A future where customer relationships are guided by understanding, not 
              complexity—where technology quietly supports teams in building trust, 
              relevance, and lasting growth.
            </p>
            <button 
              className="mv-btn"
              onClick={() => navigate('/pricing')}
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};


export default AboutMissionVision;
