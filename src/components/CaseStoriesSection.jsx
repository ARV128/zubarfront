import React from 'react'
import './CSS/CaseStoriesSection.css'
import { LuArrowUpRight } from 'react-icons/lu'

const CaseStoriesSection = () => {
  return (
    <section className="case-section">
        <div className="case-header">
            <div>
                <p className="case-subtitle">OUR CASE STORIES</p>
                <h2 className="case-title">
                    <span className="light-text">Patient Journeys to</span><br/>
                    <span>Healthier, Happier Smile</span>

                </h2>
            </div>
            <button className="case-btn">Explore All Case Stories</button>
        </div>
        <div className="case-cards">
            <div className="case-card">
                <img src="../../images/dentistry.jpeg" alt="Case 1" className="case-img" />
                <div className="case-info">
                    <h3>A Brihgter Tomorrow: <br/>Sarahs Whiteninh Journey</h3>
                    <div className="case-tags">
                        <span>2024</span>
                        <span>Teeth Whitening</span>
                        <span>Dental Care</span>

                    </div>
                </div>
                <div className="case-icon"><LuArrowUpRight /> </div>
            </div>

             <div className="case-card">
                <img src="../../images/dentistry.jpeg" alt="Case 1" className="case-img" />
                <div className="case-info">
                    <h3>A Brihgter Tomorrow: <br/>Sarahs Whiteninh Journey</h3>
                    <div className="case-tags">
                        <span>2024</span>
                        <span>Teeth Whitening</span>
                        <span>Dental Care</span>

                    </div>
                </div>
                <div className="case-icon"><LuArrowUpRight /> </div>
            </div>
        </div>

    </section>
  )
}

export default CaseStoriesSection