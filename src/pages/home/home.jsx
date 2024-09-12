import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";

export const HomePage = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/json/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setSlides(data.slideShow || []);
      })
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  const slideRef = useRef(null);
  const handleNextSlide = () => {
    if (slideRef.current) {
      slideRef.current.slickNext();
    }
  };
  const handlePrevSlide = () => {
    if (slideRef.current) {
      slideRef.current.slickPrev();
    }
  };
  return (
    <div className="container">
      <div className="slide">
        <div className="slider-container">
          <Slider ref={slideRef} {...settings}>
            {slides.map((slider) => (
              <div key={slider.id} className="slide__item">
                <figure className="slide__image">
                  <img
                    src={`${process.env.PUBLIC_URL}${slider.img}`}
                    alt=""
                    className="slide__image--img"
                  />
                </figure>
              </div>
            ))}
          </Slider>
        </div>
        <div className="slide__action">
          <button
            onClick={handlePrevSlide}
            className="slide__button slide__prev"
          >
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.78435 18.104L2.00099 9.8931L10.2119 2.10974"
                stroke="#171C28"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNextSlide}
            className="slide__button slide__next"
          >
            <svg
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 2L10 10L2 18"
                stroke="#171C28"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
