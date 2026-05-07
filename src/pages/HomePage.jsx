import React from 'react';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import HowItWorks from '../components/HowItWorks/HowItWorks';
import Pricing from '../components/Pricing/Pricing';
import Testimonials from '../components/Testimonials/Testimonials';
import FAQ from '../components/FAQ/FAQ';
import CTA from '../components/CTA/CTA';

const HomePage = () => {
  return (
    <>
      <div className="reveal"><Hero /></div>
      <div className="reveal"><Features /></div>
      <div className="reveal"><HowItWorks /></div>
      <div className="reveal"><Pricing /></div>
      <div className="reveal"><Testimonials /></div>
      <div className="reveal"><FAQ /></div>
      <div className="reveal"><CTA /></div>
    </>
  );
};

export default HomePage;
