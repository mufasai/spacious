import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Set active link based on current path
    if (location.pathname === '/about') {
      setActive('About Us');
    } else if (location.pathname === '/products') {
      setActive('Products');
    } else if (location.pathname === '/how-it-works') {
      setActive('How It Works');
    } else if (location.pathname === '/pricing') {
      setActive('Pricing');
    } else if (location.pathname === '/blog') {
      setActive('Blog');
    } else if (location.pathname === '/') {
      setActive(null);
    }
  }, [location]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Products', 'About Us', 'How It Works', 'Pricing', 'Blog'];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          {isScrolled ? (
            <>
              <img src="logo-spacious.png" alt="Spacious Logo" className="logo-icon-only" />
              <span className="navbar-logo-text scrolled">Spacious</span>
            </>
          ) : (
            <img src="logo_nav.png" alt="Spacious Logo" width={250} />
          )}
        </Link>
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link}>
              {link === 'About Us' ? (
                <Link
                  to="/about"
                  className={`navbar-link ${active === link ? 'active' : ''}`}
                >
                  {link}
                </Link>
              ) : link === 'Products' ? (
                <Link
                  to="/products"
                  className={`navbar-link ${active === link ? 'active' : ''}`}
                >
                  {link}
                </Link>
              ) : link === 'How It Works' ? (
                <Link
                  to="/how-it-works"
                  className={`navbar-link ${active === link ? 'active' : ''}`}
                >
                  {link}
                </Link>
              ) : link === 'Pricing' ? (
                <Link
                  to="/pricing"
                  className={`navbar-link ${active === link ? 'active' : ''}`}
                >
                  {link}
                </Link>
              ) : link === 'Blog' ? (
                <Link
                  to="/blog"
                  className={`navbar-link ${active === link ? 'active' : ''}`}
                >
                  {link}
                </Link>
              ) : (
                <a
                  href={`/#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`navbar-link ${active === link ? 'active' : ''}`}
                  onClick={() => setActive(link)}
                >
                  {link}
                </a>
              )}
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
      </div>
    </nav>
  );
};

export default Navbar;