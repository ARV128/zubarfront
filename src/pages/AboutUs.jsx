import React from 'react'
import HeroOstaleStranice from '../components/HeroOstaleStranice'
import AboutUsSection from '../components/AboutUsSection'
import Traka from '../components/Traka'
import '../components/CSS/AboutUs.css';
import { BsEye, BsRocket } from 'react-icons/bs';
import VideoSnimakStats from '../components/VideoSnimakStats';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import HowItWorksSection from '../components/HowItWorksSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ZubarSection from '../components/ZubarSection';

const AboutUs = () => {
  return (
    <>
     <HeroOstaleStranice naslov={"About Us"}></HeroOstaleStranice>
     <AboutUsSection></AboutUsSection>
     <Traka></Traka>

    <div className="vision-mission-container">
      <div className="vision-mission-content">
        <div className="vision-mission-card">
          <div className="vision-mission-icon-container">
            <BsEye className="vision-mission-card-icon" size={24} />
          </div>
          <h3 className="card-title">Our Vision</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>

        <div className="vision-mission-card">
          <div className="vision-mission-icon-container">
            <BsRocket className="card-icon" size={24} />
          </div>
          <h3 className="card-title">Our Mission</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
            enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
        </div>
      </div>
    </div>


    <VideoSnimakStats videoSrc="videos/videozubar.mp4"></VideoSnimakStats>
    <Traka></Traka>
    <HowItWorksSection/>
    <TestimonialsSection></TestimonialsSection>
    <WhyChooseUsSection></WhyChooseUsSection>
    <Traka></Traka>
     <ZubarSection></ZubarSection>
    </>
  )
}

export default AboutUs