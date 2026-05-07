import React, { useEffect } from 'react';
import BlogDetailHero from '../components/BlogDetail/BlogDetailHero';
import BlogDetailContent from '../components/BlogDetail/BlogDetailContent';
import BlogSection from '../components/Blog/BlogSection';
import CTA from '../components/CTA/CTA';

const BlogDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-detail-page">
      <div className="reveal">
        <BlogDetailHero />
      </div>
      <div className="reveal">
        <BlogDetailContent />
      </div>
      <div className="reveal">
        <BlogSection />
      </div>
      {/* <div className="reveal">
        <CTA />
      </div> */}
    </div>
  );
};

export default BlogDetailPage;
