import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';
import { GridPattern } from "../components/ui/grid-pattern";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-glow" />
      <img src="/light-hero.png" alt="" className="not-found-light-top-right" />
      <GridPattern
        width={60}
        height={60}
        className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,white,transparent)]"
      />
      
      <div className="not-found-content">
        <div className="not-found-image-container">
          <img src="/404.png" alt="404 Not Found" className="not-found-main-img" />
        </div>
        
        <h1 className="not-found-title">Sorry! Page not found</h1>
        <p className="not-found-text">
          The page you are looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/" className="not-found-btn">
          GO BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
