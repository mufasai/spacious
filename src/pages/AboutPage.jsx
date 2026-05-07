import React, { useEffect } from 'react';
import AboutHero from '../components/About/AboutHero';
import AboutMissionVision from '../components/About/AboutMissionVision';
import AboutValues from '../components/About/AboutValues';
import AboutTeam from '../components/About/AboutTeam';
import CTA from '../components/CTA/CTA';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <AboutHero />
      <AboutMissionVision />
      <AboutValues />
      <AboutTeam />
      <CTA />
    </div>
  );
};

export default AboutPage;
