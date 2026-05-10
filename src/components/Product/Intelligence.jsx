import React, { useState } from 'react';
import './Intelligence.css';

const aiFeatures = [
  {
    id: 1,
    title: "Automatic lead scoring",
    desc: "Automatically evaluates and prioritizes leads based on customer behavior, engagement, and interaction data.",
    icon: "/product/intelligence/lead.png",
    image: "/product/lead.png"
  },
  {
    id: 2,
    title: "Customer intent prediction",
    desc: "Helping your team understand who's ready to buy, who needs follow-up, and what action to take next.",
    icon: "/product/intelligence/customer.png",
    image: "/product/intelligence/intent.png"
  },
  {
    id: 3,
    title: "Smart recommendations",
    desc: "Delivers AI-powered recommendations to guide sales actions and customer engagement.",
    icon: "/about/clarity.png",
    image: "/product/smart.png"
  },
  {
    id: 4,
    title: "Conversation analysis",
    desc: "Analyzes conversations across channels to reveal customer intent, sentiment, and key insights.",
    icon: "/product/intelligence/converation.png",
    image: "/product/conversation.png"
  }
];

const Intelligence = () => {
  const [activeId, setActiveId] = useState(2); 

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
            {aiFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className={`intelligence-item ${activeId === feature.id ? 'active' : ''}`}
                onClick={() => setActiveId(feature.id)}
              >
                <div className="intelligence-item-header">
                  <div className="intelligence-icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="intelligence-icon" />
                  </div>
                  <h3 className="intelligence-title">{feature.title}</h3>
                </div>
                <div className="intelligence-accordion-content">
                   <p className="intelligence-desc">{feature.desc}</p>
                </div>
                <div className="intelligence-divider" />
              </div>
            ))}
          </div>

          <div className="intelligence-visual">
            <div className="visual-container">
              {aiFeatures.map((feature) => (
                <img 
                  key={feature.id}
                  src={feature.image} 
                  alt={feature.title} 
                  className={`visual-image ${activeId === feature.id ? 'active' : ''}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intelligence;
