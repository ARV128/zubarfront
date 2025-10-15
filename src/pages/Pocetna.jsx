import React from 'react'
import HeroSekcija from '../components/HeroSekcija'
import AboutUsSection from '../components/AboutUsSection'
import Traka from '../components/Traka'
import ServiceCard from '../components/ServiceCard'
import OurServices from '../components/OurServices'
import WhyChooseUsSection from '../components/WhyChooseUsSection'
import CaseStoriesSection from '../components/CaseStoriesSection'
import HowItWorksSection from '../components/HowItWorksSection'
import ZakazivanjeForma from '../components/ZakazivanjeForma'
import FAQ from '../components/FAQ'
import Newsletter from '../components/Newsletter'

const Pocetna = () => {
  return (
    <>
     <HeroSekcija 
       naslov={"Your <span>Best Dental Experience</span> Awaits"}
       opis={"Discover top-notch dental care with our experienced team. From routine check-ups to advanced treatments, we prioritize your comfort and oral health.Book your appointment today and smile with confidence!"}
       dugme1={"Explore Our Services"}
       dugme2={"Watch Video"}
       slika={'../../images/hero-doktorka.png'}
     > </HeroSekcija>
         

    <AboutUsSection />
    <Traka />
    
    <OurServices />
    <Traka />
    <WhyChooseUsSection />
    <CaseStoriesSection />
    <HowItWorksSection />
    <Traka />

    <ZakazivanjeForma></ZakazivanjeForma>
    <FAQ></FAQ>
    <Newsletter></Newsletter>
   </>
  )
}

export default Pocetna