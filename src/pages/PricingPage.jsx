import React, { useEffect } from 'react';
import PricingHero from '../components/Pricing/PricingHero';
import PricingCards from '../components/Pricing/PricingCards';
import PricingComparison from '../components/Pricing/PricingComparison';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pricing-page">
      <PricingHero />
      <PricingCards />
      <PricingComparison />
      <FAQ />
      <CTA />
    </div>
  );
};

export default PricingPage;
