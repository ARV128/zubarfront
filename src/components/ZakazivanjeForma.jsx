import React from "react";
import "../components/CSS/ZakazivanjeForma.css";

export default function ZakazivanjeForma() {
  return (
    <section className="zakazivanje-sekcija">
      <div className="zakazivanje-kontejner">
        {/* LEVI DEO - FORMA */}
        <div className="zakazivanje-levo">
          <p className="zakazivanje-podnaslov">Book an appointment</p>
          <h2 className="zakazivanje-naslov">
            <span className="zakazivanje-naslov-primarni">Effortless Online Booking</span>
            <br />
            for Your Dental Visit
          </h2>

          <form className="zakazivanje-forma" onSubmit={(e) => e.preventDefault()}>
            <div className="zakazivanje-row zakazivanje-twocols">
              <label className="zakazivanje-polje">
                <span className="zakazivanje-label">Your Name *</span>
                <input className="zakazivanje-input" placeholder="Ex. John Doe" />
              </label>

              <label className="zakazivanje-polje">
                <span className="zakazivanje-label">Phone Number *</span>
                <input className="zakazivanje-input" placeholder="Enter Phone Number" />
              </label>
            </div>

            <div className="zakazivanje-row zakazivanje-twocols">
              <label className="zakazivanje-polje">
                <span className="zakazivanje-label">Type of Appointment *</span>
                <select className="zakazivanje-input">
                  <option>Select</option>
                  <option>Cleaning</option>
                  <option>Filling</option>
                </select>
              </label>

              <label className="zakazivanje-polje">
                <span className="zakazivanje-label">Preferred Dentist *</span>
                <select className="zakazivanje-input">
                  <option>Dr. David Brown</option>
                </select>
              </label>
            </div>

            <div className="zakazivanje-row zakazivanje-twocols">
              <label className="zakazivanje-polje">
                <span className="zakazivanje-label">Preferred Date*</span>
                <input className="zakazivanje-input" type="date" />
              </label>

              <label className="zakazivanje-polje">
                <span className="zakazivanje-label">Preferred Time*</span>
                <input className="zakazivanje-input" type="time" />
              </label>
            </div>

            <label className="zakazivanje-polje zakazivanje-polje-full">
              <span className="zakazivanje-label">Special Requests or Notes *</span>
              <textarea className="zakazivanje-textarea" placeholder="Enter here.." />
            </label>

            <div className="zakazivanje-actions">
              <button className="zakazivanje-cta">Book an Appointment</button>
            </div>
          </form>
        </div>

        {/* DESNI DEO - SIDEBAR */}
        <aside className="zakazivanje-desno">
          <div className="zakazivanje-about">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="zakazivanje-card zakazivanje-hours">
            <h4 className='naslovBeli'>Clinic Hours</h4>
            <ul>
              <li className='naslovBeli'>
                <span>Monday to Friday</span>
                <span>09:00 - 22:00</span>
              </li>
              <li className='naslovBeli'>
                <span>Saturday</span>
                <span>11:00 - 20:00</span>
              </li>
              <li className='naslovBeli'>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div className="zakazivanje-card zakazivanje-emergency">
            <div className="zakazivanje-em-row">
              <div className="zakazivanje-ikonica">📞</div>
              <div>
                <p className="zakazivanje-small">Your Smile, Our Priority</p>
                <h4>24/7 Emergency</h4>
                <p className="zakazivanje-muted">(000) 000-0000</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
