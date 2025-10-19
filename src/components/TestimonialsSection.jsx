import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/CSS/TestimonialsSection.css';

const Testimonials = () => {
  const [sliderRef, setSliderRef] = useState(null);

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
    },
    {
      id: 4,
      rating: 5.0,
      title: "Amazing Experience!",
      text: "ed ut perspiciatis unde omnis late natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Michael Johnson",
      role: "Satisfied Patient",
      image: '/images/testimonial1.png'
    },
    {
      id: 5,
      rating: 5.0,
      title: "Highly Professional!",
      text: "ed ut perspiciatis unde omnis late natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      author: "Sarah Williams",
      role: "Satisfied Patient",
      image: '/images/testimonial2.png'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    dotsClass: 'slick-dots custom-dots',
    appendDots: (dots) => (
      <div className="dots">
        {dots}
      </div>
    ),
    customPaging: (i) => (
      <div className="dot" />
    )
  };

  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <div className="podnaslov naslovBeli">Testimonials</div>
        <h1 className="title naslovBeli">
          What Our <span className="title-span">Patients</span> Have to Say
        </h1>

        <Slider {...settings} ref={setSliderRef}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card-wrapper">
              <div className="testimonial-card">
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;