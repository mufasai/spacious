import React from 'react';
import './ContactInfo.css';

const contactMethods = [
  {
    id: 1,
    icon: '/contact/email.png',
    title: 'Email',
    value: 'hello@onpoint.com'
  },
  {
    id: 2,
    icon: '/contact/phone.png',
    title: 'Phone Number',
    value: '+6281212908743'
  },
  {
    id: 3,
    icon: '/contact/address.png',
    title: 'Address',
    value: 'Manchester, Kentucky 39495'
  }
];

const ContactInfo = () => {
  return (
    <section className="contact-info-section">
      <div className="contact-info-container">
        {contactMethods.map((method) => (
          <div key={method.id} className="contact-info-card">
            <div className="info-icon-wrap">
              <img src={method.icon} alt={method.title} />
            </div>
            <div className="info-text">
              <h3 className="info-title">{method.title}</h3>
              <p className="info-value">{method.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
