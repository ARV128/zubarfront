import React, { useState } from "react";
import "../components/CSS/FAQ.css";
import { GrChatOption } from "react-icons/gr";

export default function FAQ({boja}) {
  const faqs = [
    {
      q: "What services do you offer?",
      a:
        "We provide general dentistry, teeth cleaning, fillings, root canals, cosmetic dentistry (veneers, whitening), and orthodontic consultations.",
    },
    {
      q: "Do I need to make an appointment?",
      a:
        "Yes — we recommend booking in advance to guarantee the time you need. Walk-ins are accepted depending on availability.",
    },
    {
      q: "Do you accept walk-in appointments?",
      a:
        "We accept walk-ins when there are free slots, but for specific procedures it's best to schedule to ensure a dentist is available.",
    },
    {
      q: "Can I book an emergency dental appointment?",
      a:
        "Absolutely. For dental emergencies (severe pain, trauma, uncontrolled bleeding) call our emergency line and we will prioritise your care.",
    },
    {
      q: "Do you offer online consultations?",
      a:
        "Yes — we offer tele-dentistry consultations for initial assessments, follow-ups and prescription guidance when appropriate.",
    },
    {
      q: "What is the cost of a dental consultation?",
      a:
        "Consultation costs vary by type (in-person vs online). Please contact reception for the current price list or check our website pricing page.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(1); // default open (like on sample)

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className={`faq-section ${boja?boja:''}`}>
      <div className="faq-container">
        <div className="faq-left">
          <p className="faq-subtitle">FAQs</p>
          <h2 className="faq-title">
            <span className="faq-title-blue">Dental Care FAQ:</span> Your Questions Answered
          </h2>

          <div className="faq-list">
            {faqs.map((item, i) => {
              const open = openIndex === i;
              return (
                <div
                  key={i}
                  className={`faq-item ${open ? "open" : ""}`}
                  aria-expanded={open}
                >
                  <button
                    className="faq-toggle"
                    onClick={() => toggle(i)}
                    aria-controls={`faq-panel-${i}`}
                    aria-expanded={open}
                  >
                    <span className="faq-question">{item.q}</span>
                    <span className="faq-icon">{open ? "−" : "+"}</span>
                  </button>

                  <div
                    id={`faq-panel-${i}`}
                    className="faq-panel"
                    style={{ maxHeight: open ? "400px" : "0px" }}
                  >
                    <p className="faq-answer">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="faq-right">
          <div className="contact-card">
            <div className="contact-inner">
              <div className="contact-icon"><GrChatOption /></div>
              <div>
                <p className="naslovBeli">You have different questions?</p>
                <h4 className="naslovBeli">Our team will answer all your questions.</h4>
                <p className="contact-sub">We ensure a quick response.</p>
              </div>
            </div>
            <button className="contact-btn">Contact Us</button>
          </div>

          <div className="contact-card white emergency-card">
            <div className="em-row">
              <div className="em-icon">📞</div>
              <div>
                <p className="em-small">Your Smile, Our Priority</p>
                <h4 className="em-title">24/7 Emergency</h4>
                <p className="em-number">(000) 000-0000</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
