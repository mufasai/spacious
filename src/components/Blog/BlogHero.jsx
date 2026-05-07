import React from 'react';
import { Link } from 'react-router-dom';
import './BlogHero.css';
import { GridPattern } from "../ui/grid-pattern";

const BlogHero = () => {
  return (
    <section className="blog-hero">
      <div className="hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="blog-hero-content">
        <div className="blog-hero-badge">
          <span className="badge-icon">📄</span>
          <span className="badge-text">BLOGS</span>
        </div>

        <h1 className="blog-hero-heading">
          Featured Reads From<br />
          Spacious
        </h1>

        <div className="featured-blog-card">
          <div className="featured-content">
            <p className="featured-date">March 18, 2026</p>
            <h2 className="featured-title">Why Modern CRM Needs AI to Truly Understand Customers</h2>
            <p className="featured-desc">
              Traditional CRM systems are great at storing data—but they often fail short when it comes to understanding customer intent, behavior, and predicting future needs.
            </p>
            <Link to="/blog-detail">
              <button className="read-more-btn">READ MORE</button>
            </Link>
          </div>
          <div className="featured-image-wrap">
            <img src="/pricing/image-hero.png" alt="Featured Blog" />
            <div className="featured-badge">
              <span className="badge-check">✅</span> FEATURED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
