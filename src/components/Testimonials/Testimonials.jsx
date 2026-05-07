import React, { useState, useEffect, useRef } from 'react';
import './Testimonials.css';

const testimonialsData = [
  {
    id: 'software',
    label: 'Software',
    message: 'This platform helped me organize my clients without overcomplicating things. I can finally track conversations, follow-ups, and projects in one place. It saves me hours every week.',
    name: 'Yantolo',
    role: 'Freelance UI/UX Designer',
    avatar: '/yantolo.png',
    icon: '/software.png'
  },
  {
    id: 'camera',
    label: 'Camera',
    message: '“Switching to this platform was the best decision for our SEO strategy. We saw a 38% increase in visibility within the first month. The AI-driven insights are incredibly accurate. Our content team is finally aligned with what actually works in search.”',
    name: 'Emily R.',
    role: 'Head of Digital at Marketa',
    avatar: '/emily.png',
    icon: '/camera.png'
  },
  {
    id: 'startup',
    label: 'Startup',
    message: 'Before using this, I relied on spreadsheets and notes everywhere. Now my entire workflow is structured—from leads to ongoing projects. Upgrading to the yearly plan was an easy decision.',
    name: 'Kevin M.',
    role: 'Co-founder, Creative Studio',
    avatar: '/kevin.png',
    role: 'Co-founder, Creative Studio',
    avatar: '/kevin.png',
    icon: '/startup.png'
  }
];

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('camera');
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const activeTestimonial = testimonialsData.find(t => t.id === activeTab);

  useEffect(() => {
    if (!isInView) return;

    let i = 0;
    const fullMessage = activeTestimonial.message;
    setDisplayedMessage('');

    const typingInterval = setInterval(() => {
      if (i < fullMessage.length) {
        setDisplayedMessage(fullMessage.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 15); 

    return () => clearInterval(typingInterval);
  }, [activeTab, activeTestimonial.message, isInView]);

  return (
    <section className="testimonials" ref={sectionRef}>
      <div className="testimonials-inner">
        <div className="testimonials-header">
          <div className="testimonials-badge">
            <span className="badge-icon">💬</span>
            <span className="badge-text">TESTIMONIALS</span>
          </div>
          <h2 className="testimonials-heading">
            Hear from users benefiting from our platform
          </h2>
        </div>

        <div className="testimonial-card">
          <div className="testimonial-content">
            <p className="testimonial-message">
              {displayedMessage}
              <span className="typing-cursor">|</span>
            </p>
            <div className="testimonial-user">
              <img src={activeTestimonial.avatar} alt={activeTestimonial.name} className="user-avatar" />
              <h3 className="user-name">{activeTestimonial.name}</h3>
              <p className="user-role">{activeTestimonial.role}</p>
            </div>
          </div>

          <div className="testimonial-tabs">
            {testimonialsData.map((tab) => (
              <button
                key={tab.id}
                className={`tab-item ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <img src={tab.icon} alt={tab.label} className="tab-icon" />
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
