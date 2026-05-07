import React, { useEffect } from 'react';
import LegalHero from '../components/Legal/LegalHero';
import Footer from '../components/Footer/Footer';
import '../components/Legal/LegalContent.css';

const PrivacyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="reveal">
        <LegalHero 
          badge="PRIVACY"
          title="Privacy Policy"
          description="At Spacious, we are committed to protecting your personal data and handling information responsibly. This Privacy Policy explains how we collect, use, and safeguard your data when you use our platform."
          lastUpdated="Jan 5, 2025"
        />
      </div>
      
      <div className="reveal">
        <section className="legal-content-section">
          <div className="legal-container">
            <div className="legal-article">
              <h2>1. Information We Collect</h2>
              <p>We collect information to provide, improve, and secure our services. The types of data we may collect include:</p>
              
              <h3>a. Information You Provide Directly</h3>
              <ul>
                <li>Name, email address, company name, and contact details</li>
                <li>Account credentials and profile information</li>
                <li>Customer data you choose to upload or manage within the CRM</li>
                <li>Communications with us (support requests, feedback, inquiries)</li>
              </ul>

              <h3>b. Information Collected Automatically</h3>
              <ul>
                <li>Device and browser information</li>
                <li>IP address and approximate location</li>
                <li>Usage data (pages viewed, features used, interactions)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3>c. Information from Integrated Services</h3>
              <p>When you connect third-party tools (such as email, messaging, or analytical platforms), we may collect data from those services based on your permissions.</p>

              <h2>2. How We Use Your Information</h2>
              <p>We use your data to:</p>
              <ul>
                <li>Provide and operate the Spacious platform</li>
                <li>Analyze customer interactions and generate AI-driven insights</li>
                <li>Improve product performance, features, and user experience</li>
                <li>Communicate with you about updates, support, and service-related notices</li>
                <li>Maintain platform security and prevent misuse or fraud</li>
                <li>Comply with legal and regulatory obligations</li>
              </ul>
              <p>We do not sell your personal data.</p>

              <h2>3. How AI Uses Data</h2>
              <p>Spacious uses AI to assist with automation, insights, and predictions. This includes analyzing interaction patterns and behavioral signals to support smarter workflows.</p>
              <ul>
                <li>AI processing is designed to support decision-making, not replace human judgment</li>
                <li>Your data is not used to train public or external AI models</li>
                <li>AI outputs are generated based on your organization's data and configurations</li>
              </ul>

              <h2>4. Data Sharing and Disclosure</h2>
              <p>We only share data when necessary and under strict controls:</p>
              <ul>
                <li><strong>Service Providers:</strong> Trusted partners who help us operate the platform (hosting, analytics, customer support)</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or asset sale, with appropriate safeguards</li>
              </ul>
              <p>All partners are required to maintain confidentiality and data protection standards.</p>

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

export default PrivacyPage;
