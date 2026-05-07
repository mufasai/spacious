import React, { useEffect } from 'react';
import ContactHero from '../components/Contact/ContactHero';
import ContactInfo from '../components/Contact/ContactInfo';
import CTA from '../components/CTA/CTA';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <div className="reveal">
        <ContactHero />
      </div>
      <div className="reveal">
        <ContactInfo />
      </div>
      <div className="reveal">
        <CTA />
      </div>
    </div>
  );
};

export default ContactPage;
