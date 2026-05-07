import React from 'react';
import './BlogDetailHero.css';
import { GridPattern } from "../ui/grid-pattern";

const BlogDetailHero = () => {
  return (
    <section className="blog-detail-hero">
      <div className="hero-glow" />
      <img src="/light-hero.png" alt="" className="hero-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="blog-detail-hero-content">
        <div className="blog-detail-badge">
          <span className="badge-icon">📄</span>
          <span className="badge-text">BLOGS</span>
        </div>

        <h1 className="blog-detail-heading">
          Why Modern CRM Needs AI to Truly<br />
          Understand Customers
        </h1>

        <div className="blog-detail-image-wrap">
          <img src="/blog/hero-blog-detail.png" alt="Blog Detail" />
          <div className="detail-featured-badge">
             <span className="badge-check">✅</span> FEATURED
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetailHero;
