import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Help } from "../components/help";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
export const HomePage = () => {
  const [slides, setSlides] = useState([]);
  const [courses, setCourses] = useState([]);
  const [showCatalog, setShowCatalog] = useState(true);
  const [shares, setShares] = useState([]);
  useEffect(() => {
    NProgress.start();
    fetch(`${process.env.PUBLIC_URL}/json/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setSlides(data.slideShow || []);
        setCourses(data.courses || []);
        setShares(data.shares || []);
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
  const settingsCourses = {
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
        breakpoint: 1300,
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
  const settingsPopular = {
    autoplay: true,
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
        breakpoint: 1300,
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
  const settingsShare = {
    autoplay: true,
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
        breakpoint: 1300,
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
  const [likedCourses, setLikedCourses] = useState([]);
  const handleChangeIcon = (id) => {
    const course = courses.find((item) => item.id === id);
    if (course) {
      const isLiked = likedCourses.includes(id);
      console.log(isLiked);
      if (isLiked) {
        // Nếu đã thích, bỏ thích
        setLikedCourses(likedCourses.filter((courseId) => courseId !== id));
      } else {
        // Nếu chưa thích, thêm vào danh sách
        setLikedCourses([...likedCourses, id]);
      }
    }
    console.log(likedCourses);
  };
  const coursesRef = useRef(null);
  const handleNextCourses = () => {
    if (coursesRef.current) {
      coursesRef.current.slickNext();
    }
  };
  const handlePrevCourse = () => {
    if (coursesRef.current) {
      coursesRef.current.slickPrev();
    }
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
            <h1 className="courses__heading">Kho Khóa Học</h1>
            <p className="courses__desc">
              Mong rằng những khóa học này sẽ giúp ích cho bạn và sẽ là đòn bẩy
              đưa bạn đi xa trên con đường trở thành lập trình viên chuyên
              nghiệp
            </p>
          </div>
          <div className="courses__right">
            <button
              onClick={handlePrevCourse}
              className="courses__btn courses__btn-left"
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="courses__icon"
              >
                <path
                  d="M9.78435 18.104L2.00099 9.8931L10.2119 2.10974"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={handleNextCourses}
              className="courses__btn courses__btn-right"
            >
              <svg
                width="12"
                height="20"
                viewBox="0 0 12 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="courses__icon"
              >
                <path
                  d="M2 2L10 10L2 18"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="courses__list">
          <div className="slider__container">
            <Slider ref={coursesRef} {...settingsCourses}>
              {courses.map((course) => {
                return (
                  <div key={course.id} className="courses__item">
                    <div className="courses__content--wrap">
                      <Link to="/codelab/courses/details-course">
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
                          <button
                            onClick={() => handleChangeIcon(course.id)}
                            className="courses__like"
                          >
                            {likedCourses.includes(course.id) ? (
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/heartRed.svg`}
                                className="courses__heart courses__active "
                                alt=""
                              />
                            ) : (
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/heart.svg`}
                                className="courses__heart icon"
                                alt=""
                              />
                            )}
                          </button>
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
                    <Link />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
      <div className="shares">
        <div className="shares__top">
          <div className="shares__top--left">
            <h2 className="shares__heading">Góc chia sẻ </h2>
            <p className="shares__desc">
              Học thầy không tày học bạn, không học bạn thì mình cùng học tiền
              bối, những chia sẻ cách học lộ trình học từ những bậc tiền bối đi
              trước cho chúng ta rút ra được những kinh nghiệm vô cùng quý báu,
              ...
            </p>
          </div>
          <div className="shares__top--right">
            <Link to="#!" className="shares__link--top">
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="shares__list">
          <div className="slider-container">
            <Slider {...settingsShare}>
              {shares.map((share) => {
                return (
                  <div key={share.id} className="shares__item">
                    <div className="shares__item--wrap">
                      <picture className="shares__pictures">
                        <img
                          src={`${process.env.PUBLIC_URL}${share.img}`}
                          alt=""
                          className="shares__img"
                        />
                      </picture>
                      <div className="shares__content">
                        <div className="shares__date">
                          <span>{share.date}</span>
                        </div>
                        <div className="separate"></div>
                        <Link to="#!" className="shares__title line-clamp">
                          {share.title}
                        </Link>
                        <div className="shares__bottom">
                          <div className="shares__timeRead">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/clock.svg`}
                              alt=""
                              className="shares__time--icon"
                            />
                            <p className="shares__time">{share.time}</p>
                          </div>
                          <div className="shares__views">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/eye.svg`}
                              alt=""
                              className="shares__views--icon icon"
                            />
                            <span className="shares__views--number">
                              {share.viewers}
                            </span>
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
      <div className="popular">
        <div className="popular__top">
          <div className="popular__top--left">
            <h2 className="popular__heading">Video thịnh hành</h2>
            <p className="popular__desc">
              Những video mang tính giải trí về lập trình, bổ ích sẽ mang tới
              cho các bạn những bài học bổ ích bổ trợ kiến thức bài học
            </p>
          </div>
          <div className="popular__top--right">
            <Link to="#!" className="popular__link--top">
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="popular__list">
          <div className="slider-container">
            <Slider {...settingsPopular}>
              {shares.map((share) => {
                return (
                  <div key={share.id} className="popular__item">
                    <div className="popular__item--wrap">
                      <picture className="popular__pictures">
                        <img
                          src={`${process.env.PUBLIC_URL}${share.img}`}
                          alt=""
                          className="popular__img"
                        />
                      </picture>
                      <div className="popular__content">
                        <div className="popular__date">
                          <span>{share.date}</span>
                        </div>
                        <div className="separate"></div>
                        <h1 className="popular__title line-clamp">
                          {share.title}
                        </h1>
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
      {showCatalog && (
        <div className="catalog">
          <div className="row catalog__wrap">
            <div className="col-7 col-xl-12">
              <h2 className="catalog__heading">
                Chúc mừng bạn nhận được 10 ⭐ cho ngày hôm nay 🎊🎊
              </h2>
              <p className="catalog__desc">
                Hãy thu thập phần quà đăng nhập thường xuyên để mở những khóa
                học hữu ích nhé
              </p>
              <div className="catalog__btn">
                <button className="catalog__button">
                  Nhận 10 sao ngày hôm nay
                </button>
              </div>
            </div>
            <div className="col-5 col-xl-12 catalog__img">
              <img
                src={`${process.env.PUBLIC_URL}/images/catalog/catalog.gif`}
                alt="catalog__icon"
                className="catalog__icon"
              />
            </div>
          </div>
          <button
            onClick={() => {
              setShowCatalog(!showCatalog);
            }}
            className="catalog__cancel"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icon/cancel.svg`}
              alt=""
              className="catalog__icon--cancel"
            />
          </button>
        </div>
      )}
    </div>
  );
};
