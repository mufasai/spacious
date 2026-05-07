import React, { useEffect } from 'react';
import PricingHero from '../components/Pricing/PricingHero';
import PricingCards from '../components/Pricing/PricingCards';
import PricingComparison from '../components/Pricing/PricingComparison';
import BlogSection from '../components/Blog/BlogSection';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricing-page">
      <div className="reveal">
        <PricingHero />
      </div>
      <div className="reveal">
        <PricingCards />
      </div>
      <div className="reveal">
        <PricingComparison />
      </div>
      <div className="reveal">
        <BlogSection />
      </div>
      <div className="reveal">
        <FAQ />
      </div>
      <div className="reveal">
        <CTA />
      </div>
    </div>
  );
};

export default PricingPage;
