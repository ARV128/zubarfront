import React from 'react'
import './CSS/HeroOstaleStranice.css'
import Breadcrumbs from './navigacija/Breadcrumbs'

const HeroOstaleStranice = ({naslov}) => {
  return (
    <section>
        <div className="hero-ostale-stranice">
            <h2 className="title">{naslov}</h2>
            <Breadcrumbs/>
        </div>
    </section>
  )
}

export default HeroOstaleStranice