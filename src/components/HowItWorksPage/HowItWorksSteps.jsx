import React from 'react';
import { Link } from 'react-router-dom';
import './HowItWorksSteps.css';

const steps = [
  {
    id: "1.0",
    title: "Capture From Every Channel",
    desc: "Collect every customer interaction across channels and keep your CRM always up to date—without switching tools or copying data.",
    image: "/how/capture.png",
    imageLeft: false
  },
  {
    id: "2.0",
    title: "Automate With Smart AI",
    desc: "Let AI take care of routine workflows while you stay in control. Spacious automates the busywork without removing the human touch.",
    image: "/how/automate.png",
    imageLeft: true
  },
  {
    id: "3.0",
    title: "Analyze Insights, Take Action",
    desc: "Move from information to impact. Spacious helps you spot what matters, prioritize confidently, and act faster.",
    image: "/how/analyze.png",
    imageLeft: false
  }
];

const HowItWorksSteps = () => {
  return (
    <section className="hiw-steps" id="steps">
      <div className="hiw-steps-inner">
        {steps.map((step, index) => (
          <div key={index} className={`hiw-step-block ${step.imageLeft ? 'image-left' : 'image-right'}`}>
            <div className="step-content">
              <div className="step-badge">
                <span className="badge-icon">✅</span>
                <span className="badge-text">{step.id}</span>
              </div>
              <h2 className="step-heading">{step.title}</h2>
              <p className="step-subtext">{step.desc}</p>
              <Link to="/pricing">
                <button className="step-btn">GET STARTED</button>
              </Link>
            </div>
            <div className="step-visual">
              <div className="step-visual-container">
                <img src={step.image} alt={step.title} className="step-image" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorksSteps;
