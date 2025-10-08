import React from 'react'
import HeroSekcija from '../components/HeroSekcija'
import OnamaSekcija from '../components/OnamaSekcija'

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
         <OnamaSekcija />

    <section className="about">

    </section>
   </>
  )
}

export default Pocetna