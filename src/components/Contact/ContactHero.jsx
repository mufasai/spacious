import React from 'react';
import './ContactHero.css';
import { GridPattern } from "../ui/grid-pattern";

const ContactHero = () => {
  return (
    <section className="contact-hero">
      <div className="hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="contact-hero-container">
        <div className="contact-hero-left">
          <div className="contact-badge">
            <span className="badge-icon">🚀</span>
            <span className="badge-text">CONTACT US</span>
          </div>
          <h1 className="contact-heading">
            Get in Touch With the<br />
            Spacious Team
          </h1>
          <p className="contact-subtext">
            Questions, ideas, or feedback? Send us a message and let's<br />
            start the conversation.
          </p>
        </div>

        <div className="contact-form-card">
          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Input your name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="Input your email" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Subject</label>
                <input type="text" placeholder="Input your subject" />
              </div>
              <div className="form-group">
                <label>Phone number</label>
                <input type="text" placeholder="Input your phone number" />
              </div>
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea placeholder="Input your message here..." maxLength="200"></textarea>
              <span className="char-count">0/200</span>
            </div>
            <button type="submit" className="submit-btn">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
