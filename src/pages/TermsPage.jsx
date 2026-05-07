import React, { useEffect } from 'react';
import LegalHero from '../components/Legal/LegalHero';
import '../components/Legal/LegalContent.css';

const TermsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="terms-page">
      <div className="reveal">
        <LegalHero 
          badge="TERMS"
          title="Terms of Service"
          description="By accessing or using Spacious, you agree to be bound by these Terms. If you do not agree, please do not access or use the Service."
          lastUpdated="Jan 5, 2025"
        />
      </div>
      
      <div className="reveal">
        <section className="legal-content-section">
          <div className="legal-container">
            <div className="legal-article">
              <h2>1. Use of the Service</h2>
              <p>You may use Spacious only in compliance with these Terms and all applicable laws and regulations.</p>
              <p>You agree not to:</p>
              <ul>
                <li>Use the Service for any unlawful, harmful, or misleading purposes</li>
                <li>Interfere with or disrupt the integrity or performance of the Service</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Use the Service to violate the privacy or rights of others</li>
              </ul>
              <p>Spacious reserves the right to suspend or terminate access if these Terms are violated.</p>

              <h2>2. Accounts and Responsibilities</h2>
              <p>To use certain features, you must create an account. You are responsible for:</p>
              <ul>
                <li>Providing accurate and up-to-date information</li>
                <li>Maintaining the confidentiality of your login credentials</li>
                <li>All activities that occur under your account</li>
              </ul>
              <p>You must notify us immediately of any unauthorized use or security breach.</p>

              <h2>3. Subscription, Fees, and Billing</h2>
              <p>Some parts of the Service may require a paid subscription.</p>
              <ul>
                <li>Pricing and plans are described on our website</li>
                <li>Fees are billed in advance and are non-refundable unless stated otherwise</li>
                <li>We may change pricing with reasonable notice</li>
                <li>Failure to pay may result in suspension or termination of access</li>
              </ul>
              <p>Taxes may apply depending on your location.</p>

              <h2>4. Data and Customer Content</h2>
              <p>You retain ownership of all data and content you upload to Spacious ("Customer Data").</p>
              <p>By using the Service, you grant Spacious a limited license to process Customer Data solely for the purpose of providing and improving the Service.</p>
              <p>We do not claim ownership of your data and do not sell Customer Data.</p>

              <h2>5. Contact Us</h2>
              <p>If you have questions, concerns, or requests regarding this Privacy Policy or your data, please contact us at:</p>
              <p>Email: <strong>privacy@spacious.ai</strong></p>
              <p>Company: Spacious</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
