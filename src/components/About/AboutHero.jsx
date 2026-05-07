import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutHero.css';
import { GridPattern } from "../ui/grid-pattern";
import { Marquee } from "../ui/marquee";

const AboutHero = () => {
  const navigate = useNavigate();
  const images = [
    "/about/image-1.png",
    "/about/image-2.png",
    "/about/image-3.png",
    "/about/image-4.png",
  ];

  return (
    <section className="about-hero">
      <div className="about-hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="about-hero-content">
        <div className="about-hero-badge">
          <span className="badge-icon">🧩</span>
          <span className="badge-text">ABOUT SPACIOUS</span>
        </div>

        <h1 className="about-hero-heading">
          Built to Make Customer<br />
          Relationships Smarter
        </h1>

        <p className="about-hero-subtext">
          We believe strong relationships start with understanding. Spacious brings<br />
          intelligence and simplicity together to help teams focus on what matters.
        </p>

        <div className="about-hero-actions">
          <button className="about-btn-primary">SEE MORE</button>
          <button 
            className="about-btn-secondary"
            onClick={() => navigate('/contact')}
          >
            BOOK A DEMO
          </button>
        </div>
      </div>

      <div className="about-hero-marquee-container">
        <Marquee pauseOnHover className="[--duration:40s]">
          {images.concat(images).map((src, index) => (
            <div key={index} className="about-marquee-card">
              <img src={src} alt={`About ${index + 1}`} className="about-marquee-img" />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default AboutHero;
