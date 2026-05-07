import React, { useState, useEffect } from 'react';
import './Hero.css';
import { GridPattern } from "@/components/ui/grid-pattern";


const Hero = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [heroLine1, setHeroLine1] = useState('');
  const [heroLine2, setHeroLine2] = useState('');

  useEffect(() => {
    const line1Text = "Transform your Business";
    const line2Text = "Manages Relationships";
    let isMounted = true;

    const runAnimation = async () => {
      while (isMounted) {
        setHeroLine1('');
        setHeroLine2('');
        
        for (let i = 0; i <= line1Text.length; i++) {
          if (!isMounted) return;
          setHeroLine1(line1Text.substring(0, i));
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        for (let j = 0; j <= line2Text.length; j++) {
          if (!isMounted) return;
          setHeroLine2(line2Text.substring(0, j));
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    };

    runAnimation();

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 400, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentTilt = 20 - (20 * scrollProgress);
  const currentTranslate = 80 - (80 * scrollProgress);

  return (
    <section className="hero" id="home">
      <div className="hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-icon">🧠</span>
          <span className="badge-text">AI-POWERED CUSTOMER GROWTH</span>
        </div>

        <h1 className="hero-heading">
          {heroLine1}
          {heroLine1 === "Transform your Business" && <br />}
          {heroLine2}
          <span className="hero-cursor"></span>
        </h1>

        <p className="hero-subtext">
          A modern CRM powered by advanced AI to help you automate workflows, understand<br />
          customers deeply, and scale your business with clarity and speed.
        </p>

        <div className="hero-actions">
          <button className="hero-btn-primary">GET STARTED</button>
          <button className="hero-btn-secondary">BOOK A DEMO</button>
        </div>
      </div>

      <div 
        className="hero-dashboard"
        style={{
          transform: `perspective(1200px) rotateX(${currentTilt}deg) translateY(${currentTranslate}px) scale(${0.95 + (0.05 * scrollProgress)})`,
          opacity: 1 
        }}
      >
        <div className="dashboard-window">
          <div className="dashboard-img-wrapper">
            <img src="dashboard.png" alt="Spacious Dashboard" className="dashboard-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;