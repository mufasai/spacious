import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductHero.css';
import { GridPattern } from "../ui/grid-pattern";

const StatItem = ({ target, label, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000; 
    const stepTime = 16; 
    const totalSteps = duration / stepTime;
    const increment = target / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div className="product-stat-item" ref={elementRef}>
      <h3 className="product-stat-number">{prefix}{count}{suffix}</h3>
      <p className="product-stat-label">{label}</p>
    </div>
  );
};

const ProductHero = () => {
  const navigate = useNavigate();

  return (
    <section className="product-hero">
      <div className="product-hero-top">
        <div className="product-hero-glow" />
        <img src="/light-hero.png" alt="" className="hero-light-top-right" />
        <GridPattern
          width={60}
          height={60}
          className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
        />
        
        <div className="product-hero-container">
          <div className="product-hero-content">
            <div className="product-hero-badge">
              <span className="badge-icon">📦</span>
              <span className="badge-text">PRODUCTS OVERVIEW</span>
            </div>

            <h1 className="product-hero-heading">
              Turn Customer Data<br />
              Into Intelligent Growth
            </h1>

            <p className="product-hero-subtext">
              Your team can focus on building meaningful connections<br />
              and closing more deals
            </p>

            <div className="product-hero-actions">
              <button 
                className="product-btn-primary"
                onClick={() => navigate('/pricing')}
              >
                GET STARTED
              </button>
              <button 
                className="product-btn-secondary"
                onClick={() => navigate('/contact')}
              >
                BOOK A DEMO
              </button>
            </div>
          </div>

          <div className="product-hero-image">
            <img src="/product/hero-product.png" alt="Product Dashboard" className="product-mockup" />
          </div>
        </div>
      </div>

      <div className="product-stats-bar">
        <div className="product-stats-inner">
          <StatItem prefix="+" target={40} suffix="%" label="Faster Deal Follow-Ups" />
          <StatItem target={500} suffix="K+" label="Customer Interactions Analyzed" />
          <StatItem target={90} suffix="%" label="Less Manual CRM Work" />
          <StatItem target={50} suffix="+" label="Teams Across Countries" />
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
