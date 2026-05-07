import React from 'react';
import './AboutValues.css';

const values = [
  {
    icon: "/about/clarity.png",
    title: "Clarity Over Complexity",
    desc: "Every decision we make aims to reduce noise and help teams focus on what truly matters."
  },
  {
    icon: "/about/human.png",
    title: "Human-Centered Intelligence",
    desc: "We design intelligence that enhances human judgment, empathy, and meaningful customer interactions."
  },
  {
    icon: "/about/trust.png",
    title: "Trust Through Transparency",
    desc: "Teams always understand how Spacious works and why it makes recommendations."
  },
  {
    icon: "/about/progress.png",
    title: "Progress With Purpose",
    desc: "Innovation at Spacious is driven by real customer needs and long-term value, not trends or hype."
  }
];

const AboutValues = () => {
  return (
    <section className="about-values">
      {/* Background Effects */}
      <div className="values-bg-effects">
        <img src="/light.png" alt="" className="values-light" />
        <img src="/meteor.png" alt="" className="values-meteor" />
      </div>

      <div className="about-values-inner">
        <div className="values-left">
          <div className="values-badge">
            <span className="badge-icon">🤝</span>
            <span className="badge-text">VALUES</span>
          </div>
          <h2 className="values-heading">Our Values</h2>
          <p className="values-subtext">
            These principles guide how we design, build our product, and the way we work with customers every day.
          </p>
          
          {/* Background decorations */}
          <div className="decor-dot dot-1" />
          <div className="decor-dot dot-2" />
          <div className="decor-dot dot-3" />
          <div className="decor-dot dot-4" />
        </div>

        <div className="values-right">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-wrapper">
                <img src={value.icon} alt={value.title} className="value-icon" />
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-desc">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
