import React from 'react';
import './CSS/AwardSection.css';


const AwardsSection = () => {
  const awards = [
    {
      id: 1,
      year: 2024,
      title: "Smile Excellence Award",
      awardName: "SMILE EXCELLENCE AWARD",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      icon: '/images/award.png'
    },
    {
      id: 2,
      year: 2023,
      title: "Trusted Dentist Award",
      awardName: "TRUSTED DENTIST AWARD",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
       icon: '/images/award.png'
    },
    {
      id: 3,
      year: 2022,
      title: "Advanced Dental Solutions",
      awardName: "ADVANCED DENTAL SOLUTIONS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      icon: '/images/award.png'
    },
    {
      id: 4,
      year: 2021,
      title: "Premier Dental Provider",
      awardName: "PREMIER DENTAL PROVIDER",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      icon: '/images/award.png'
    }
  ];

  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="awards-header">
          <p className="podnaslov">Our Award</p>
          <h2 className="title">
            <span className="title-span">Award-Winning</span> Dental Care
          </h2>
        </div>

        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={award.id} className="award-card">
              <div className="award-badge">
                <svg viewBox="0 0 200 200" className="award-wreath">
                  <circle cx="100" cy="100" r="95" fill="none" stroke="#c0a080" strokeWidth="2" />
                  
                  {/* Left wreath */}
                  <path d="M 80 50 Q 70 70 75 90 Q 80 110 90 120" fill="none" stroke="#5a5a5a" strokeWidth="3" />
                  <ellipse cx="76" cy="65" rx="4" ry="6" fill="#5a5a5a" transform="rotate(-45 76 65)" />
                  <ellipse cx="72" cy="85" rx="4" ry="6" fill="#5a5a5a" transform="rotate(-30 72 85)" />
                  <ellipse cx="78" cy="105" rx="4" ry="6" fill="#5a5a5a" transform="rotate(-15 78 105)" />

                  {/* Right wreath */}
                  <path d="M 120 50 Q 130 70 125 90 Q 120 110 110 120" fill="none" stroke="#5a5a5a" strokeWidth="3" />
                  <ellipse cx="124" cy="65" rx="4" ry="6" fill="#5a5a5a" transform="rotate(45 124 65)" />
                  <ellipse cx="128" cy="85" rx="4" ry="6" fill="#5a5a5a" transform="rotate(30 128 85)" />
                  <ellipse cx="122" cy="105" rx="4" ry="6" fill="#5a5a5a" transform="rotate(15 122 105)" />

                  {/* Stars */}
                  <text x="100" y="75" textAnchor="middle" fontSize="14" fill="#ffc107">★ ★ ★ ★ ★</text>
                  
                  {/* Award text */}
                  <text x="100" y="100" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0c1f41">
                    {award.awardName.split(' ')[0]}
                  </text>
                  <text x="100" y="115" textAnchor="middle" fontSize="9" fill="#0c1f41">
                    {award.awardName.split(' ')[1] || ''}
                  </text>
                  {award.awardName.split(' ')[2] && (
                    <text x="100" y="128" textAnchor="middle" fontSize="9" fill="#0c1f41">
                      {award.awardName.split(' ')[2]}
                    </text>
                  )}
                </svg>
              </div>

              <div className="award-year">{award.year}</div>

              <div className="award-info">
                <h3 className="award-title">{award.title}</h3>
                <p className="award-description">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;