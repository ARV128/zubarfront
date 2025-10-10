import React from 'react'
import './CSS/Appointment.css'
import { CiCalendarDate, CiTimer, CiUser, CiPhone } from "react-icons/ci";

const AppointmentForm = () => {
  return (
    <form className="appointment-form" onSubmit={(e) => e.preventDefault()}>

      <div className="form-group">
        <label htmlFor="name">Name</label>
        <div className="input-wrapper">
            <CiUser className="icon" />
           < input type="text" id="name" name="name" placeholder="John Doe" />
        </div>
      </div>


      <div className="form-group">
        <label htmlFor="phone">Phone Number</label>
        <div className="input-wrapper">
            <CiPhone className="icon" />
           < input type="tel" id="phone" name="phone" placeholder="Your phone" />
        </div>
      </div>


      <div className="form-group">
        <label htmlFor="date">Preffered Date</label>
        <div className="input-wrapper">
            <CiCalendarDate className="icon" />
           < input type="date" id="date" name="date" />
        </div>
      </div>


      <div className="form-group">
        <label htmlFor="time">Time</label>
        <div className="input-wrapper">
            <CiTimer className="icon" />
           < input type="time" id="time" name="time" />
        </div>
      </div>

    </form>
  )
}

export default AppointmentForm