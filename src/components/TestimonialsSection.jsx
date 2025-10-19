import React, { useState } from 'react';
import '../components/CSS/TestimonialsSection.css';

const Testimonials = () => {
  const [activeDot, setActiveDot] = useState(0);

  const testimonials = [
    {
      id: 1,
      rating: 5.0,
      title: "Professional and Friendly!",
      text: "ed ut perspiciatis unde omnis late natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Leslie Alexander",
      role: "Satisfied Patient",
      image: '/images/testimonial2.png'
      
    },
    {
      id: 2,
      rating: 5.0,
      title: "Highly Recommended!",
      text: "ed ut perspiciatis unde omnis late natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Bessie Lane",
      role: "Satisfied Patient",
      image: '/images/testimonial2.png'
    },
    {
      id: 3,
      rating: 5.0,
      title: "Excellent Service!",
      text: "ed ut perspiciatis unde omnis late natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Kathy Smith",
      role: "Satisfied Patient",
      image: '/images/testimonial1.png'
    }
  ];

  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <div className="podnaslov naslovBeli">Testimonials</div>
        <h1 className="title naslovBeli">
          What Our <span className="title-span">Patients</span> Have to Say
        </h1>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
                <span className="rating">{testimonial.rating}</span>
              </div>
              <h3 className="testimonial-title">{testimonial.title}</h3>
              <p className="testimonial-text">{testimonial.text}</p>
              <div className="testimonial-author">
                <img src={testimonial.image} alt={testimonial.author} className="author-avatar" />
                <div className="author-info">
                  <h4>{testimonial.author}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dots">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`dot ${activeDot === i ? 'active' : ''}`}
              onClick={() => setActiveDot(i)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;