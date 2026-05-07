import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import './FAQ.css';

const faqData = [
  {
    question: "What is an AI-Powered CRM Platform?",
    answer: "An AI-powered CRM platform helps teams manage customer relationships more efficiently by combining traditional CRM tools with artificial intelligence."
  },
  {
    question: "Who Is This Platform Designed For?",
    answer: "This platform is designed for teams that manage customer relationships, sales activities, and ongoing customer interactions. It’s well suited for startups, growing businesses, sales teams, customer success teams, and operations teams."
  },
  {
    question: "Does This Platform Support Competitor Tracking?",
    answer: "This platform focuses on managing your own customer relationships, sales activities, and internal performance rather than direct competitor tracking."
  },
  {
    question: "Do I Need Technical or Coding Knowledge to Use It?",
    answer: "No technical or coding knowledge is required. The platform is designed with an intuitive interface so teams can get started quickly without complex setup."
  },
  {
    question: "Is a Free Trial or Demo Available?",
    answer: "Trial and demo availability depends on how the platform is offered or customized. Many teams choose to explore the product through a guided demo to understand how it fits their workflow."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1); 
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-inner">
        <div className="faq-content">
          <div className="faq-badge">
            <span className="badge-icon">❓</span>
            <span className="badge-text">FAQ</span>
          </div>
          <h2 className="faq-heading">
            Got Questions?<br />
            We’ve Got Answers
          </h2>
          <Link to="/contact">
            <button className="faq-cta-btn">
              START A CONVERSATION
            </button>
          </Link>
        </div>

        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button 
                className="accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <span className="question-text">{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="accordion-icon" />
                ) : (
                  <ChevronDown size={20} className="accordion-icon" />
                )}
              </button>
              <div className="accordion-body">
                <div className="accordion-body-inner">
                  <p className="answer-text">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
