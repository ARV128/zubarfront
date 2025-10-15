import React from 'react'
import './CSS/HeroOstaleStranice.css'

const HeroOstaleStranice = ({naslov}) => {
  return (
    <section>
        <div className="hero-ostale-stranice">
            <h2 className="title">{naslov}</h2>
        </div>
    </section>
  )
}

export default HeroOstaleStranice