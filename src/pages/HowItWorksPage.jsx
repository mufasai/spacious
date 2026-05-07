import React, { useEffect } from 'react';
import HowItWorksHero from '../components/HowItWorksPage/HowItWorksHero';
import HowItWorksSteps from '../components/HowItWorksPage/HowItWorksSteps';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const HowItWorksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="how-it-works-page">
      <HowItWorksHero />
      <HowItWorksSteps />
      <FAQ />
      <CTA />
    </div>
  );
};

export default HowItWorksPage;
