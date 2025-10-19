import React from 'react';
import ZubarCard from './ZubarCard';
import '../components/CSS/ZubarSection.css';


const ZubarSection = ({dentists}) => {
  

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
            

          {dentists?.map(dentist =>
            <ZubarCard
              key={dentist.id}
              image={dentist.image}
              name={dentist.name}
              specialty={dentist.specialty}
              socials={dentist.socials}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default ZubarSection;