import React from 'react'
import HeroOstaleStranice from '../components/HeroOstaleStranice'
import ZubarSection from '../components/ZubarSection'
import useZubari from '../components/hooks/useZubari';
import ZakazivanjeForma from '../components/ZakazivanjeForma';
import Traka from '../components/Traka';
import VideoSnimakStats from '../components/VideoSnimakStats';
import Newsletter from '../components/Newsletter';
import AwardsSection from '../components/AwardSection';

const Dentists = () => {
    const zubari=useZubari();
  return (
    <>
     <HeroOstaleStranice naslov={"Dentists"}></HeroOstaleStranice>
     <ZubarSection dentists={zubari}/>
     <Traka/>
     <ZakazivanjeForma/>
     <VideoSnimakStats videoSrc="videos/videozubar.mp4"/>
     <Newsletter/>
     
    </>
  )
}

export default Dentists