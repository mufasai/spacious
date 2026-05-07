import React from 'react';
import './Intelligence.css';

const aiFeatures = [
  {
    title: "Lead scoring otomatis",
    icon: "/product/intelligence/lead.png",
    active: false
  },
  {
    title: "Customer intent prediction",
    icon: "/product/intelligence/customer.png",
    desc: "Helping your team understand who's ready to buy, who needs follow-up, and what action to take next.",
    active: true
  },
  {
    title: "Smart recommendations",
    icon: "/about/clarity.png",
    active: false
  },
  {
    title: "Conversation analysis",
    icon: "/product/intelligence/converation.png",
    active: false
  }
];

const Intelligence = () => {
  return (
    <section className="intelligence">
      <div className="intelligence-inner">
        <div className="intelligence-header">
          <div className="intelligence-header-left">
            <div className="intelligence-badge">
              <span className="badge-icon">✅</span>
              <span className="badge-text">AI CAPABILITIES</span>
            </div>
            <h2 className="intelligence-heading">Intelligence Built Into Every Interaction</h2>
          </div>
          <div className="intelligence-header-right">
            <p className="intelligence-subtext">
              Our AI works quietly in the background, analyzing conversations, signals, and behavior to deliver clear priorities, timely suggestions
            </p>
          </div>
        </div>

        <div className="intelligence-grid">
          <div className="intelligence-list">
            {aiFeatures.map((feature, index) => (
              <div key={index} className={`intelligence-item ${feature.active ? 'active' : ''}`}>
                <div className="intelligence-item-header">
                  <div className="intelligence-icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="intelligence-icon" />
                  </div>
                  <h3 className="intelligence-title">{feature.title}</h3>
                </div>
                {feature.desc && <p className="intelligence-desc">{feature.desc}</p>}
              </div>
            ))}
            <button className="intelligence-btn">SEE AI IN ACTION</button>
          </div>

          <div className="intelligence-visual">
            <div className="visual-container">
              <img src="/product/intelligence/intent.png" alt="Intent Prediction Diagram" className="visual-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
