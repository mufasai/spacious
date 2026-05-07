import React, { useState } from 'react';
import './Pricing.css';

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(1); 

  const plans = [
    {
      name: 'Freelancer',
      desc: 'Everything you need to begin',
      monthlyPrice: 19,
      yearlyPrice: 15,
    },
    {
      name: 'Enterprise',
      desc: 'Everything you need to begin',
      monthlyPrice: 24,
      yearlyPrice: 20,
    },
    {
      name: 'Custom',
      desc: 'Everything you need to begin',
      monthlyPrice: 32,
      yearlyPrice: 28,
    }
  ];

  const featuresList = [
    'Core CRM tools for basic management',
    'Contact & lead tracking made simple',
    'Email sync for unified communication',
    'Light automation for daily tasks',
    'Essential analytics overview',
    'Up to 3 team members allowed',
    'Standard email support'
  ];

  return (
    <section className="pricing" id="pricing">
      <div className="pricing-inner">        
        <div className="pricing-header">
          <div className="pricing-badge">
            <span className="pricing-badge-icon">💰</span>
            <span className="pricing-badge-text">PRICING</span>
          </div>
          <h2 className="pricing-heading">
            Focused on Accelerating your<br />Business Growth
          </h2>
          <p className="pricing-subtext">
            Flexible, transparent, and built for every stage. Pick the plan that matches<br />
            your team's needs and scale effortlessly as you grow
          </p>

          <div className="pricing-toggle-wrapper">
            <div className="pricing-toggle">
              <button 
                className={`toggle-btn ${!isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(false)}
              >
                Monthly
              </button>
              <button 
                className={`toggle-btn ${isYearly ? 'active' : ''}`}
                onClick={() => setIsYearly(true)}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-cards-container">
          {plans.map((plan, index) => {
            const isHighlighted = index === selectedPlanIndex;
            
            return (
              <div 
                key={index} 
                className={`pricing-card ${isHighlighted ? 'highlighted' : ''}`}
                onClick={() => setSelectedPlanIndex(index)}
              >
                <div className="card-header">
                  <div className="custom-icon-wrapper">
                    <div className="icon-circle">
                      <div className="icon-square">
                        <div className="icon-dot"></div>
                      </div>
                    </div>
                  </div>
                  <div className="card-title-wrap">
                    <h3 className="card-title">{plan.name}</h3>
                    <p className="card-desc">{plan.desc}</p>
                  </div>
                </div>

                <div className="card-price-wrap">
                  <span className="card-price">${isYearly ? plan.yearlyPrice : plan.monthlyPrice}</span>
                  <span className="card-period">/ Months</span>
                </div>

                <button className={`card-btn ${isHighlighted ? 'primary' : 'outline'}`}>
                  GET STARTED
                </button>

                <div className="card-divider"></div>

                <div className="card-features">
                  <p className="features-label">WHAT'S INCLUDE:</p>
                  <ul className="features-list">
                    {featuresList.map((feature, i) => (
                      <li key={i}>
                        <div className="check-icon">
                          <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="8" fill="#4C6FFF" />
                            <path d="M4.5 8L7 10.5L11.5 5.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
