import React from 'react';
import './CustomerContext.css';

const contextFeatures = [
  {
    title: "Sales Performance",
    icon: "/product/customer/sales.png",
    active: false
  },
  {
    title: "Customer Engagement",
    icon: "/product/intelligence/customer.png",
    desc: "Helping your team understand who's ready to buy, who needs follow-up, and what action to take next.",
    active: true
  },
  {
    title: "Conversion Rates",
    icon: "/product/customer/conversion.png",
    active: false
  },
  {
    title: "Custom Reports & Exports",
    icon: "/product/customer/report.png",
    active: false
  }
];

const CustomerContext = () => {
  return (
    <section className="customer-context">
      <div className="customer-context-inner">
        <div className="context-top-grid">
          <div className="context-header-left">
            <div className="context-badge">
              <span className="badge-icon">✅</span>
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
              <img src="/product/customer/engagement.png" alt="Engagement UI" className="context-ui-image" />
            </div>
          </div>

          <div className="context-list">
            {contextFeatures.map((feature, index) => (
              <div key={index} className={`context-item ${feature.active ? 'active' : ''}`}>
                <div className="context-item-header">
                  <div className="context-icon-wrapper">
                    <img src={feature.icon} alt={feature.title} className="context-icon" />
                  </div>
                  <h3 className="context-title">{feature.title}</h3>
                </div>
                {feature.desc && <p className="context-desc">{feature.desc}</p>}
              </div>
            ))}
            <button className="context-btn">CUSTOM REPORTS & EXPORTS</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerContext;
