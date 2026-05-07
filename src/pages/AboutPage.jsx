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
      <div className="reveal">
        <AboutHero />
      </div>
      <div className="reveal">
        <AboutMissionVision />
      </div>
      <div className="reveal"><AboutValues /></div>
      <div className="reveal"><AboutTeam /></div>
      <div className="reveal"><CTA /></div>
    </div>
  );
};

export default AboutPage;
