import React, { useState } from 'react';
import '../components/CSS/Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Ovde dodaj logiku za slanje email-a
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <p className="podnaslov">OUR NEWSLETTER</p>
        <h2 className="title">
          Subscribe to Our Newsletter for<br />
          the <span className="highlight">Latest Updates and Offers</span>
        </h2>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="input-wrapper">
            <div className="icon-wrapper">
              <svg 
                className="email-icon" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="email-input"
              required
            />
          </div>
          <button type="submit" className="subscribe-button">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;