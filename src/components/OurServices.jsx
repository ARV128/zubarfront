import React from 'react'
import './CSS/OurServices.css'
import ServiceCard from './ServiceCard'

const OurServices = () => {
  return (
      <section className="services-section">
       <p className="podnaslov">OUR SERVICES</p>
         <h2 className="title">
            A Wide Range of Services <br /> <span>for Your Best Smile</span>
         </h2>
           <button className="explore-button">Explore All Services</button>


        <div className="cards-container">
            <ServiceCard
                icon="/images/zub.jpg"
                image="/images/dentistry.jpeg"
                title="General Dentristry"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit"
                onLearnMore={() => alert('General Dentistry Details')}
            />

            <ServiceCard
                icon="/images/zub.jpg"
                image="/images/dentistry.jpeg"
                title="General Dentristry"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit"
                onLearnMore={() => alert('General Dentistry Details')}
            />

            <ServiceCard
                icon="/images/zub.jpg"
                image="/images/dentistry.jpeg"
                title="General Dentristry"
                description="lorem ipsum dolor sit amet, consectetur adipiscing elit"
                onLearnMore={() => alert('General Dentistry Details')}
            />


        </div>
      </section>
  )
}

export default OurServices