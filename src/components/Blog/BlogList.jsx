import React from 'react';
import { Link } from 'react-router-dom';
import './BlogList.css';

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
  },
  {
    id: 4,
    image: '/pricing/image-4.png',
    date: 'April 17, 2025',
    title: 'Why a Unified Customer View Changes Everything'
  },
  {
    id: 5,
    image: '/pricing/image-5.png',
    date: 'May 1, 2025',
    title: 'AI in CRM: Assistance, Not Replacement'
  },
  {
    id: 6,
    image: '/pricing/image-6.png',
    date: 'May 27, 2025',
    title: 'Building Trust at Scale With Intelligent Tools'
  }
];

const BlogList = () => {
  return (
    <section className="blog-list-section">
      <div className="blog-list-container">
        <div className="blog-list-header">
          <div className="blog-list-header-left">
            <div className="blog-list-badge">
              <span className="badge-icon">✅</span>
              <span className="badge-text">BLOGS</span>
            </div>
            <h2 className="blog-list-title">Insights on Smarter<br />Customer Relationships</h2>
          </div>
          <div className="blog-list-header-right">
            <p className="blog-list-description">
              Thoughtful content on productivity, customer understanding, and intelligent tools—written for modern teams.
            </p>
          </div>
        </div>

        <div className="blog-list-grid">
          {blogs.map((blog) => (
            <Link key={blog.id} to="/blog-detail" className="blog-list-card-link">
              <div className="blog-list-card">
                <div className="blog-list-image-wrap">
                  <img src={blog.image} alt={blog.title} className="blog-list-image" />
                </div>
                <div className="blog-list-content">
                  <p className="blog-list-date">{blog.date}</p>
                  <h3 className="blog-list-card-title">{blog.title}</h3>
                  <div className="blog-list-arrow">
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

export default BlogList;
