import React from 'react';
import ZubarCard from './ZubarCard';
import '../components/CSS/ZubarSection.css';


const ZubarSection = () => {
  const dentists = [
    {
      id: 1,
      name: "Dr. Charlie Hayes",
      specialty: "Cosmetic Dentist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/olivia-hayes",
        twitter: "https://twitter.com/oliviahayes",
        linkedin: "https://linkedin.com/in/olivia-hayes",
        instagram: "https://instagram.com/oliviahayes"
      }
    },
    {
      id: 2,
      name: "Dr. James Carter",
      specialty: "General Dentist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/emily-carter",
        twitter: "https://twitter.com/emilycarter",
        linkedin: "https://linkedin.com/in/emily-carter",
        instagram: "https://instagram.com/emilycarter"
      }
    },
    {
      id: 3,
      name: "Dr. James Walker",
      specialty: "Orthodontist",
      image: "/images/zubar1.png",
      socials: {
        facebook: "https://facebook.com/james-walker",
        twitter: "https://twitter.com/jameswalker",
        linkedin: "https://linkedin.com/in/james-walker",
        instagram: "https://instagram.com/jameswalker"
      }
    }
  ];

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <p className="podnaslov">Our Team</p>
          <h2 className="title">
            Meet Our <span className="title-span">Expert<br />Dental Specialists</span>
          </h2>
        </div>

        <div className="team-grid">
          {dentists.map((dentist) => (
            <ZubarCard
              key={dentist.id}
              image={dentist.image}
              name={dentist.name}
              specialty={dentist.specialty}
              socials={dentist.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZubarSection;