import React, { useState, useEffect, useRef, useContext } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Help } from "../components/help";
import axios from "axios";
// import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useAuth } from "../context/authContext";
import StoreContext from "../db/context";
export const HomePage = () => {
  const { setTargetBlog, setTargetCourses, setShowCatalog, showCatalog } =
    useContext(StoreContext);
  const { userLoggedIn, currentUser } = useAuth();
  const [slides, setSlides] = useState([]);
  const [courses, setCourses] = useState([]);
  const [videos, setVideos] = useState([]);

  const [shares, setShares] = useState([]);
  const [users, setUsers] = useState(null);
  const [likedCourses, setLikedCourses] = useState([]);
  useEffect(() => {
    try {
      fetch(`${process.env.PUBLIC_URL}/json/db.json`)
        .then((response) => response.json())
        .then((data) => {
          setVideos(data.videos || []);
          setSlides(data.slideShow || []);
        })
        .catch((error) => console.log(error));

      const getBlog = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BACKEND_URL}/blog`
        );
        setShares(res.data);
      };

      const getCourses = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BACKEND_URL}/courses?populate=lessonInfo`
        );
        setCourses(res.data);
      };
      getBlog();
      getCourses();
    } catch (error) {
      console.error(error);
    }
  }, [likedCourses, userLoggedIn]);

  useEffect(() => {
    if (userLoggedIn && currentUser?.uid) {
      try {
        const getUsers = async () => {
          const res = await axios.get(
            `${process.env.REACT_APP_API_BACKEND_URL}/users`
          );

          const foundUser = res.data.data.find(
            (item) => item.userId === currentUser.uid
          );
          if (foundUser) {
            setLikedCourses(foundUser.favoriteListInfo);
            setUsers(foundUser);
          }
        };
        getUsers();
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
  }, [currentUser?.uid, likedCourses, userLoggedIn]);

  // ,
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

  const handleLikedCourses = async (courseId) => {
    const course = courses.data.find((item) => item._id === courseId);
    if (course) {
      const isLiked = likedCourses.includes(courseId);
      if (isLiked) {
        await axios.post(`${process.env.REACT_APP_API_BACKEND_URL}/users`, {
          type: "REMOVE_MY_FV_COURSE",
          userId: users._id,
          courseArr: [courseId],
        });
        // setLikedCourses(likedCourses.filter((courseId) => courseId !== id));
      } else {
        await axios.post(`${process.env.REACT_APP_API_BACKEND_URL}/users`, {
          type: "ADD_MY_FV_COURSE",
          userId: users._id,
          courseArr: [courseId],
        });
        // setLikedCourses([...likedCourses, id]);
      }
    }
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
              Mong rằng những khóa học này sẽ là đòn bẩy giúp bạn phát triển và
              tiến xa trong hành trình trở thành lập trình viên chuyên nghiệp.
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
              {courses &&
                courses.data &&
                courses.data.map((course) => {
                  return (
                    <div key={course._id} className="courses__item">
                      <div
                        onClick={() => setTargetCourses(course._id)}
                        className="courses__content--wrap"
                      >
                        <Link
                          to={userLoggedIn ? "/courses/form-study" : "/login"}
                        >
                          <picture className="courses__picture">
                            <img
                              src={`${process.env.PUBLIC_URL}${course.courseImage}`}
                              alt="imge"
                              className="courses__img"
                            />
                          </picture>
                        </Link>
                        <div className="courses__content">
                          <div className="courses__content--top">
                            <h4 className="courses__title">{course.title}</h4>
                            <button
                              onClick={() =>
                                userLoggedIn && handleLikedCourses(course._id)
                              }
                              className="courses__like"
                            >
                              {userLoggedIn ? (
                                <>
                                  {likedCourses.includes(course._id) ? (
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
                                </>
                              ) : (
                                <>
                                  <Link to="/login">
                                    <img
                                      src={`${process.env.PUBLIC_URL}/images/icon/heart.svg`}
                                      className="courses__heart courses__active "
                                      alt=""
                                    />
                                  </Link>
                                </>
                              )}
                            </button>
                          </div>
                          <p className="courses__content--desc line-clamp">
                            {course.description}
                          </p>
                          <div className="courses__content--bottom">
                            <span className="courses__price">
                              {course.price.amount === 0
                                ? "Miễn phí"
                                : `${course.price.amount}VND`}
                            </span>
                            <div className="courses__total-file">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/book.svg`}
                                alt=""
                                className="courses__file--icon icon"
                              />
                              <p className="courses__file">
                                {course.lessonInfo.length}
                              </p>
                            </div>
                            <div className="courses__total-lesson">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/pen.svg`}
                                alt=""
                                className="courses__lesson--icon icon"
                              />
                              <p className="courses__lesson">10</p>
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
              Học hỏi từ tiền bối giúp bạn rút ra những kinh nghiệm quý giá và
              xây dựng lộ trình học tập hiệu quả trong sự nghiệp.
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
              {shares.data &&
                shares.data.map((share) => {
                  return (
                    <div key={share._id} className="shares__item">
                      <div className="shares__item--wrap">
                        <picture className="shares__pictures">
                          <img
                            src={`${process.env.PUBLIC_URL}${share.urlImage}`}
                            alt=""
                            className="shares__img"
                          />
                        </picture>
                        <div className="shares__content">
                          <div className="shares__date">
                            <span>{share.date}</span>
                          </div>
                          <div className="separate"></div>
                          <Link
                            onClick={() => setTargetBlog(share._id)}
                            to={`/courses/form-blog`}
                            className="shares__title line-clamp"
                          >
                            {share.title}
                          </Link>
                          <div className="shares__bottom">
                            <div className="shares__timeRead">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/clock.svg`}
                                alt=""
                                className="shares__time--icon"
                              />
                              <p className="shares__time">
                                {share.duration} phút đọc
                              </p>
                            </div>
                            <div className="shares__views">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/eye.svg`}
                                alt=""
                                className="shares__views--icon icon"
                              />
                              <span className="shares__views--number">
                                {share.views}
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
              Khám phá video giải trí về lập trình để nâng cao kiến thức và kỹ
              năng một cách hiệu quả."
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
              {videos.map((video) => {
                return (
                  <div key={video.id} className="popular__item">
                    <div className="popular__item--wrap">
                      <div className="popular__pictures">
                        <a
                          href={video.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="popular__img"
                          />
                        </a>
                      </div>
                      <div className="popular__content">
                        <div className="popular__date">
                          <span>{video.date}</span>
                        </div>
                        <div className="separate"></div>
                        <Link to={video.link}>
                          <p className="popular__title line-clamp">
                            {video.title}
                          </p>
                        </Link>
                        <div className="popular__link">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icon/link.svg`}
                            alt=""
                            className="popular__link--icon icon"
                          />
                          <p className="popular__text">youtube.com</p>
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
