import React from 'react'
import './CSS/HowItWorksSection.css'
import { CiCalendarDate, CiUser } from "react-icons/ci"
import { FaBriefcase, FaClipboardCheck } from "react-icons/fa"

const steps=[
    {
        icon:<CiCalendarDate />,
        number: '01',
        title: 'Book Your Appointment',
        description: 'Lorem ipsum dolor sit amet, consectetur balablaab',
    },
    {
        icon:<CiUser />,
        number: '02',
        title: 'Consultation and Examination',
        description: 'Lorem ipsum dolor sit amet, consectetur balablaab',
    },
    {
        icon:<FaBriefcase />,
        number: '03',
        title: 'Personalized Treatement Plan',
        description: 'Lorem ipsum dolor sit amet, consectetur balablaab',
    },
    {
        icon:<FaClipboardCheck />,
        number: '04',
        title: 'Ongoing Care and Follow-Up',
        description: 'Lorem ipsum dolor sit amet, consectetur balablaab',
    }
];
 
const HowItWorksSection = () => {
  return (
    <section className="how-section">
        <p className="podnaslov">HOW IT WORKS</p>
        <h2 className="title">The Path to <span>Your Perfect Smile</span></h2>
        <div className="how-steps">
            {steps.map((step,index) => (
              <div className="how-step" key={index}>
                <div className="how-icon-wrapper">
                    <div className="how-icon-circle">
                        {step.icon}
                        <div className="how-number">{step.number}</div>       
                    </div>                  
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < steps.length-1 && <div className="step-line"></div>}
              </div>
           ))}
        </div>
    </section>
  )
}

export default HowItWorksSection