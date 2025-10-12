import React from 'react'
import './CSS/AboutUsSection.css'
import { FaCheckCircle } from "react-icons/fa";

const AboutUsSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-img">
            <img src="../../images/about-us.png" alt="Dental care" />
        </div>

        <div className="about-text">
             <p class="about-subtitle">ABOUT US</p>
             <h2> <span className="highlight">15 Years of Experience in Dental Care</span></h2>
             <p class="about-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores eligendi possimus nisi at laborum quo distinctio suscipit </p>

             <ul className="about-list">
                <li><FaCheckCircle className="icon"/>Premium Dental Services You Can Trust</li>
                <li><FaCheckCircle className="icon"/>Award-Winning Experts in Dental Care</li>
                <li> <FaCheckCircle className="icon"/>Dedicated Experts Bhind Every Smile</li>
             </ul>

             <button>Learn More</button>
        </div>
      </div>

    </section>
  )
}

export default AboutUsSection