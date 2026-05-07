import React, { useEffect } from 'react';
import BlogHero from '../components/Blog/BlogHero';
import BlogList from '../components/Blog/BlogList';
import CTA from '../components/CTA/CTA';

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog-page">
      <div className="reveal">
        <BlogHero />
      </div>
      <div className="reveal">
        <BlogList />
      </div>
      {/* <div className="reveal">
        <CTA />
      </div> */}
    </div>
  );
};

export default BlogPage;
