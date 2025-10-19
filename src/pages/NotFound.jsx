import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/CSS/NotFound.css';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="notfound-container">
      <div className="stars">
        <div className="star star-1"></div>
        <div className="star star-2"></div>
        <div className="star star-3"></div>
        <div className="star star-4"></div>
      </div>

      <div className="notfound-content">
        <div className="error-code">
          <span className="code-dark">4</span>
          <span className="code-blue">0</span>
          <span className="code-dark">4</span>
        </div>

        <h1 className="error-title">
          Oops! <span className="title-span">Page not Found</span>
        </h1>

        <p className="error-description">
          The page you are looking for cannot be<br />
          found. take a break before trying again
        </p>

        <button className="home-button" onClick={handleGoHome}>
          Go To Home Page
        </button>
      </div>
    </div>
  );
};

export default NotFound;