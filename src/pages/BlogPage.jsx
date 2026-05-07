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
      <BlogHero />
      <BlogList />
      <CTA />
    </div>
  );
};

export default BlogPage;
