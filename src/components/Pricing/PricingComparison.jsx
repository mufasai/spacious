import React, { useState } from 'react';
import './PricingComparison.css';

const features = [
  { name: "Core CRM Management", freelancer: "check", enterprise: "check", custom: "check" },
  { name: "Contact & Lead Tracking", freelancer: "check", enterprise: "check", custom: "check" },
  { name: "Email Sync & Integration", freelancer: "check", enterprise: "check", custom: "check" },
  { name: "AI-Powered Insights", freelancer: "-", enterprise: "Advanced", custom: "Custom" },
  { name: "Analytics & Reporting", freelancer: "Standard", enterprise: "Standard", custom: "check" },
  { name: "Integrations (Email, Tools)", freelancer: "Limited", enterprise: "check", custom: "Custom" },
  { name: "Support", freelancer: "-", enterprise: "Priority", custom: "24/7 Premium" },
  { name: "Data Export", freelancer: "-", enterprise: "check", custom: "check" }
];

const PricingComparison = () => {
  const [selectedPlan, setSelectedPlan] = useState('enterprise');

  return (
    <section className="pricing-comparison">
      <div className="comparison-inner">
        <div className="comparison-header">
          <div className="comparison-badge">
            <span className="badge-icon">💰</span>
            <span className="badge-text">COMPARE</span>
          </div>
          <h2 className="comparison-heading">Compare Plans at a Glance</h2>
        </div>

        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-col">Plan Features</th>
                <th 
                  className={`plan-col ${selectedPlan === 'freelancer' ? 'highlighted' : ''}`}
                  onClick={() => setSelectedPlan('freelancer')}
                >
                  Freelancer
                </th>
                <th 
                  className={`plan-col enterprise-col ${selectedPlan === 'enterprise' ? 'highlighted' : ''}`}
                  onClick={() => setSelectedPlan('enterprise')}
                >
                  <div className="plan-name-wrap">
                    Enterprise
                    <div className="most-popular-badge">
                      <span>🔥 MOST POPULAR</span>
                    </div>
                  </div>
                </th>
                <th 
                  className={`plan-col ${selectedPlan === 'custom' ? 'highlighted' : ''}`}
                  onClick={() => setSelectedPlan('custom')}
                >
                  Custom
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="feature-name">{feature.name}</td>
                  <td 
                    className={`plan-value ${selectedPlan === 'freelancer' ? 'highlighted' : ''}`}
                    onClick={() => setSelectedPlan('freelancer')}
                  >
                    {feature.freelancer === "check" ? <img src="/verified.png" alt="check" className="check-icon" /> : feature.freelancer}
                  </td>
                  <td 
                    className={`plan-value ${selectedPlan === 'enterprise' ? 'highlighted' : ''}`}
                    onClick={() => setSelectedPlan('enterprise')}
                  >
                    {feature.enterprise === "check" ? <img src="/verified.png" alt="check" className="check-icon" /> : feature.enterprise}
                  </td>
                  <td 
                    className={`plan-value ${selectedPlan === 'custom' ? 'highlighted' : ''}`}
                    onClick={() => setSelectedPlan('custom')}
                  >
                    {feature.custom === "check" ? <img src="/verified.png" alt="check" className="check-icon" /> : feature.custom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default PricingComparison;
