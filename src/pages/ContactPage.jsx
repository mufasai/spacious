import React, { useEffect } from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactInfo from '../components/Contact/ContactInfo';
import FAQ from '../components/FAQ/FAQ';
import CTA from '@/components/CTA/CTA';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <ContactHero />
      <ContactInfo />
      <CTA/>
    </div>
  );
};

export default ContactPage;
