import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link, NavLink } from "react-router-dom";
import { Help } from "../components/help";

export const Blog = () => {
  const [newPost, setnewPost] = useState([]);
  const [shares, setShares] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/json/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setnewPost(data.newposts || []);
        setShares(data.featuredposts || []);
      })
      .catch((error) => console.log(error));
  }, []);

  const settingsnewPost = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Ẩn mũi tên
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
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
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Ẩn mũi tên
    rows: 2,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1300,
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
  const [likednewPost, setLikednewPost] = useState([]);
  const handleChangeIcon = (id) => {
    const course = newPost.find((item) => item.id === id);
    if (course) {
      const isLiked = likednewPost.includes(id);
      console.log(isLiked);
      if (isLiked) {
        // Nếu đã thích, bỏ thích
        setLikednewPost(likednewPost.filter((courseId) => courseId !== id));
      } else {
        // Nếu chưa thích, thêm vào danh sách
        setLikednewPost([...likednewPost, id]);
      }
    }
    console.log(likednewPost);
  };

  return (
    <div className="container">
      <div className="breadcrumb">
        <div className="breadcrumb__wrap">
          <NavLink to="/codelab/home" className="breadcrumb__item">
            <p className="breadcrumb__name">Trang chủ</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
              alt=""
              className="breadcrumb__icon-arrow"
            />
          </NavLink>
          <NavLink to="/codelab/blog" className="breadcrumb__item">
            <p className="breadcrumb__name  breadcrumb__active">Blog</p>
          </NavLink>
        </div>
      </div>
      <div className="newPost">
        <div className="newPost__top">
          <div className="newPost__left">
            <h1 className="newPost__heading">BÀI VIẾT MỚI</h1>
          </div>
          <div className="newPost__right">
            <Link to="#!" className="shares__link--top">
              Xem tất cả
            </Link>
          </div>
        </div>
        <div className="newPost__list">
          <div className="slider__container">
            <Slider {...settingsnewPost}>
              {newPost.map((newpost) => {
                return (
                  <div key={newpost.id} className="newPost__item">
                    <div className="newPost__content--wrap">
                      <picture className="newPost__picture">
                        <img
                          src={`${process.env.PUBLIC_URL}${newpost.img}`}
                          alt="imge"
                          className="newPost__img"
                        />
                      </picture>
                      <div className="newPost__content">
                        <div className="newPost__content--top">
                          <h4 className="newPost__title line-clamp">
                            {newpost.title}
                          </h4>
                          <button
                            onClick={() => handleChangeIcon(newpost.id)}
                            className="newPost__like"
                          >
                            {likednewPost.includes(newpost.id) ? (
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/save.svg`}
                                className="newPost__heart newPost__active icon"
                                alt=""
                              />
                            ) : (
                              <img
                                src={`${process.env.PUBLIC_URL}/images/icon/saveactive.svg`}
                                className="newPost__heart "
                                alt=""
                              />
                            )}
                          </button>
                        </div>
                        <p className="newPost__content--desc">{newpost.desc}</p>
                        <div className="newPost__content--bottom">
                          <span className="newPost__price">
                            {newpost.posttime}
                          </span>
                          <div className="newPost__timeRead">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/clock.svg`}
                              alt=""
                              className="newPost__time--icon"
                            />
                            <p className="newPost__time">{newpost.readtime}</p>
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
      <div className="shares">
        <div className="shares__top">
          <div className="shares__top--left">
            <h2 className="shares__heading">BÀI VIẾT NỔI BẬT </h2>
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
                        <div className="separate"></div>
                        <h1 className="shares__title line-clamp">
                          {share.title}
                        </h1>
                        <div className="newPost__content--bottom">
                          <div className="newPost__timeRead">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/clock.svg`}
                              alt=""
                              className="newPost__time--icon"
                            />
                            <p className="newPost__time">{share.time}</p>
                          </div>
                          <div className="newPost__views">
                            <img
                              src={`${process.env.PUBLIC_URL}/images/icon/eye.svg`}
                              alt=""
                              className="newPost__views--icon icon"
                            />
                            <span className="newPost__views--number">
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

      <Help></Help>
    </div>
  );
};
