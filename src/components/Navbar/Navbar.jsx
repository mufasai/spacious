import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set active link based on current path
    const path = location.pathname;
    if (path === '/about') {
      setActive('About Us');
    } else if (path === '/products') {
      setActive('Products');
    } else if (path === '/how-it-works') {
      setActive('How It Works');
    } else if (path === '/pricing') {
      setActive('Pricing');
    } else if (path === '/blog') {
      setActive('Blog');
    } else if (path === '/') {
      setActive(null);
    }
    // Close menu on navigation
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navLinks = ['Products', 'About Us', 'How It Works', 'Pricing', 'Blog'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo" onClick={() => setIsMenuOpen(false)}>
          <div className="logo-container">
            <img 
              src={isScrolled && !isMenuOpen ? "logo-spacious.png" : "logo_nav.png"} 
              alt="Spacious Logo" 
              className={`main-logo ${isScrolled && !isMenuOpen ? 'scrolled-icon' : ''}`} 
            />
            {(isScrolled && !isMenuOpen) && <span className="navbar-logo-text scrolled">Spacious</span>}
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link === 'About Us' ? '/about' : 
                   link === 'Products' ? '/products' : 
                   link === 'How It Works' ? '/how-it-works' : 
                   link === 'Pricing' ? '/pricing' : 
                   link === 'Blog' ? '/blog' : `/#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`navbar-link ${active === link ? 'active' : ''}`}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <Link to="/contact">
            <button className="btn-demo rounded-full">BOOK A DEMO</button>
          </Link>
          <Link to="/pricing">
            <button className="btn-started rounded-full">GET STARTED</button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          {navLinks.map((link) => (
            <li key={link}>
              <Link
                to={link === 'About Us' ? '/about' : 
                   link === 'Products' ? '/products' : 
                   link === 'How It Works' ? '/how-it-works' : 
                   link === 'Pricing' ? '/pricing' : 
                   link === 'Blog' ? '/blog' : `/#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className={`mobile-link ${active === link ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mobile-actions">
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <button className="btn-demo-mobile">BOOK A DEMO</button>
          </Link>
          <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>
            <button className="btn-started-mobile">GET STARTED</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;