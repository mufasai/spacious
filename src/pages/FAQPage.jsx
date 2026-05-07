import React, { useEffect } from 'react';
import FAQHero from '../components/FAQ/FAQHero';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const FAQPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="faq-page">
      <FAQHero />
      <FAQ />
      <CTA />
    </div>
  );
};

export default FAQPage;
