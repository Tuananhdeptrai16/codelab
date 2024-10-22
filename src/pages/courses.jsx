import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import { Help } from "../components/help";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
export const Courses = () => {
  const [slides, setSlides] = useState([]);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    NProgress.start();
    fetch(`${process.env.PUBLIC_URL}/json/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setSlides(data.slideShow || []);
        setCourses(data.courses || []);
      })
      .catch((error) => console.log(error));
    NProgress.done();
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
  const settingsMyCourses = {
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Ẩn mũi tên
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settingsCourses = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    arrows: false, // Ẩn mũi tên
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
      <div className="breadcrumb">
        <div className="breadcrumb__wrap">
          <NavLink to="/home" className="breadcrumb__item">
            <p className="breadcrumb__name">Trang chủ</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
              alt=""
              className="breadcrumb__icon-arrow"
            />
          </NavLink>
          <NavLink to="/courses" className="breadcrumb__item">
            <p className="breadcrumb__name breadcrumb__active">
              Khóa học của tôi
            </p>
          </NavLink>
        </div>
      </div>
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
              className="icon"
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
              className="icon"
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
      <div className="courses">
        <div className="courses__top">
          <div className="courses__left">
            <h1 className="courses__heading">KHÓA HỌC ĐÃ THAM GIA</h1>
          </div>
          <div className="courses__right">
            <Link className="courses__link" to="#!">
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="courses__list">
          <div className="slider__container">
            <Slider {...settingsMyCourses}>
              {courses.map((course) => {
                return (
                  <div key={course.id} className="courses__item">
                    <div className="courses__content--wrap">
                      <Link to="/courses/details-course">
                        <picture className="courses__picture">
                          <img
                            src={`${process.env.PUBLIC_URL}${course.img}`}
                            alt="imge"
                            className="courses__img"
                          />
                        </picture>
                      </Link>

                      <div className="courses__content">
                        <div className="courses__content--top">
                          <h4 className="courses__title">{course.title}</h4>
                        </div>
                        <p className="courses__content--desc line-clamp">
                          {course.desc}
                        </p>

                        <div className="courses__content--bottom">
                          <span className="courses__price">{course.price}</span>
                          <div className="courses__total-file">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/book.svg`}
                              alt=""
                              className="courses__file--icon icon"
                            />
                            <p className="courses__file">128</p>
                          </div>
                          <div className="courses__total-lesson">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/pen.svg`}
                              alt=""
                              className="courses__lesson--icon icon"
                            />
                            <p className="courses__lesson">128</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="courses">
        <div className="courses__top">
          <div className="courses__left">
            <h1 className="courses__heading">Kho Khóa Học</h1>
            <p className="courses__desc">
              Mong rằng những khóa học này sẽ giúp ích cho bạn và sẽ là đòn bẩy
              đưa bạn đi xa trên con đường trở thành lập trình viên chuyên
              nghiệp
            </p>
          </div>
          <div className="courses__right">
            <Link className="courses__link" to="#!">
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="courses__list">
          <div className="slider__container">
            <Slider {...settingsCourses}>
              {courses.map((course) => {
                return (
                  <div key={course.id} className="courses__item">
                    <div className="courses__content--wrap">
                      <picture className="courses__picture">
                        <img
                          src={`${process.env.PUBLIC_URL}${course.img}`}
                          alt="imge"
                          className="courses__img"
                        />
                      </picture>
                      <div className="courses__content">
                        <div className="courses__content--top">
                          <h4 className="courses__title">{course.title}</h4>
                        </div>
                        <p className="courses__content--desc line-clamp">
                          {course.desc}
                        </p>
                        <div className="courses__content--bottom">
                          <span className="courses__price">{course.price}</span>
                          <div className="courses__total-file">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/file.svg`}
                              alt=""
                              className="courses__file--icon icon"
                            />
                            <p className="courses__file">128</p>
                          </div>
                          <div className="courses__total-lesson">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/pen.svg`}
                              alt=""
                              className="courses__lesson--icon icon"
                            />
                            <p className="courses__lesson">128</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>

      <Help></Help>
    </div>
  );
};
