import React, { useState } from 'react';
import './CustomerContext.css';

const contextFeatures = [
  {
    id: 1,
    title: "Sales Performance",
    desc: "Monitor revenue, pipeline health, and team performance in real time to identify trends and growth opportunities.",
    icon: "/product/customer/sales.png",
    image: "/product/customer/sales-1.png"
  },
  {
    id: 2,
    title: "Customer Engagement",
    desc: "Helping your team understand who's ready to buy, who needs follow-up, and what action to take next.",
    icon: "/product/intelligence/customer.png",
    image: "/product/customer/engagement.png"
  },
  {
    id: 3,
    title: "Conversion Rates",
    desc: "Track how leads move through each funnel stage and uncover insights to improve conversion efficiency.",
    icon: "/product/customer/conversion.png",
    image: "/product/customer/conversation-1.png"
  },
  {
    id: 4,
    title: "Custom Reports & Exports",
    desc: "Build custom reports and export key data easily for deeper analysis and team collaboration.",
    icon: "/product/customer/report.png",
    image: "/product/customer/report-1.png"
  }
];

const CustomerContext = () => {
  const [activeId, setActiveId] = useState(2); 

  return (
    <section className="customer-context">
      <div className="customer-context-inner">
        <div className="context-top-grid">
          <div className="context-header-left">
            <div className="context-badge">
              <span className="badge-icon">🧠</span>
              <span className="badge-text">AI CAPABILITIES</span>
            </div>
            <h2 className="context-heading">All Customer Context, Finally in One Place</h2>
          </div>
          <div className="context-header-right">
            <p className="context-top-subtext">
              Emails, messages, notes, and interactions are automatically connected into one clear view—so nothing gets missed and every decision is informed.
            </p>
          </div>
        </div>

        <div className="context-main-grid">
          <div className="context-visual">
            <div className="context-visual-container">
              {contextFeatures.map((feature) => (
                <img 
                  key={feature.id}
                  src={feature.image} 
                  alt={feature.title} 
                  className={`context-ui-image ${activeId === feature.id ? 'active' : ''}`} 
                />
              ))}
            </div>
          </div>

          <div className="context-list">
            {contextFeatures.map((feature) => (
              <div 
                key={feature.id} 
                className={`context-item ${activeId === feature.id ? 'active' : ''}`}
                onClick={() => setActiveId(feature.id)}
              >
                <div className="context-item-header">
                  <div className="context-icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="context-icon" />
                  </div>
                  <h3 className="context-title">{feature.title}</h3>
                </div>
                <div className="context-accordion-content">
                   <p className="context-desc">{feature.desc}</p>
                </div>
                <div className="context-divider" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerContext;
