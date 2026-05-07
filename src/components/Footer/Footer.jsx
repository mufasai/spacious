import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="/logo-spacious.png" alt="Spacious Logo" className="footer-logo-img" />
            <span className="footer-logo-text">Spacious</span>
          </div>
          <h2 className="footer-heading">
            Everything You Know About a<br />
            Customer, Together
          </h2>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/benefits">Benefits</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/features">Features</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Others</h4>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/#faq">Faq</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li>4517 Washington Ave.</li>
              <li>Manchester, Kentucky 39495</li>
              <li>(205) 555-0100</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
