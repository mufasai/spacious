import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

const blogs = [
  {
    id: 1,
    image: '/pricing/image-1.png',
    date: 'March 14, 2025',
    title: 'From Data to Decisions: How AI Helps Teams Act Faster'
  },
  {
    id: 2,
    image: '/pricing/image-2.png',
    date: 'March 25, 2025',
    title: 'The Hidden Cost of Manual CRM Work'
  },
  {
    id: 3,
    image: '/pricing/image-3.png',
    date: 'April 2, 2025',
    title: 'What Customer Intent Really Looks Like in Practice'
  }
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="blog-header">
          <div className="blog-header-left">
            <div className="blog-badge">
              <span className="badge-icon">✅</span>
              <span className="badge-text">BLOGS</span>
            </div>
            <h2 className="blog-title">Latest Blog</h2>
          </div>
          <div className="blog-header-right">
            <p className="blog-description">
              Thoughtful content on productivity, customer understanding, and intelligent tools—written for modern teams.
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <Link key={blog.id} to="/blog-detail" className="blog-card-link">
              <div className="blog-card">
                <div className="blog-image-wrap">
                  <img src={blog.image} alt={blog.title} className="blog-image" />
                </div>
                <div className="blog-content">
                  <p className="blog-date">{blog.date}</p>
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <div className="blog-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
