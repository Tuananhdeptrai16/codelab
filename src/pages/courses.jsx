import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { Help } from "../components/help";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import axios from "axios";
export const Courses = () => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    NProgress.start();
    console.log(
      `${process.env.REACT_APP_API_BACKEND_URL}/courses?populate=lessonInfo`
    );
    try {
      const getCourses = async () => {
        const res = await axios.get(
          `${process.env.REACT_APP_API_BACKEND_URL}/courses`
        );
        setCourses(res.data);
      };
      getCourses();
    } catch (error) {
      console.log(error);
    }
    NProgress.done();
  }, []);
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
  if (!courses) {
    return (
      <div className="loader__wrap">
        <div className="loader"></div>
        <div className="loader-text">Loading..</div>
      </div>
    ); // Nếu dataBlog là null, hiển thị Loading
  }

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
        </div>
        <div className="courses__list">
          <div className="slider__container">
            <Slider {...settingsCourses}>
              {courses &&
                courses.data &&
                courses.data.map((course) => {
                  return (
                    <div key={course._id} className="courses__item">
                      <div className="courses__content--wrap">
                        <picture className="courses__picture">
                          <img
                            src={course.courseImage}
                            alt="imge"
                            className="courses__img"
                          />
                        </picture>
                        <div className="courses__content">
                          <div className="courses__content--top">
                            <h4 className="courses__title">{course.title}</h4>
                          </div>
                          <p className="courses__content--desc line-clamp">
                            {course.description}
                          </p>
                          <div className="courses__content--bottom">
                            <span className="courses__price">
                              {course.price.amount === 0
                                ? "Miễn phí"
                                : course.price.amount}
                            </span>
                            <div className="courses__total-file">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/file.svg`}
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
