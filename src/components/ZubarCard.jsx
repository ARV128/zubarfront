import React, { useState } from 'react';
import { FaFacebook } from "react-icons/fa";



const ZubarCard = ({ image, name, specialty, socials }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="team-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="team-card-image">
        <img src={image} alt={name} />
      </div>
      
      {isHovered && (
        <div className="team-card-overlay">
          <div className="social-icons">
            {socials.facebook && (
              <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
            )}
            {socials.twitter && (
              <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
                <FaFacebook size={20} />
              </a>
            )}
            
            
          </div>
        </div>
      )}

      <div className="team-card-info">
        <h3>{name}</h3>
        <p>{specialty}</p>
      </div>

      <div className={`team-card-border ${isHovered ? 'active' : ''}`}></div>
    </div>
  );
};

export default ZubarCard;