import React, { useState, useEffect } from "react";
import "./home.scss";
import Slider from "react-slick";

export const HomePage = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/json/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setSlides(data.slideShow || []); // Handle cases where data.slideShow might be undefined
      })
      .catch((error) => console.log(error));
  }, []);

  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };

  return (
    <div className="container">
      <div className="slide">
        <div className="slider-container">
          <Slider {...settings}>
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
      </div>
    </div>
  );
};
