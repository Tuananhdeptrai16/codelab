import React from "react";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Gift } from "../components/gift";
import { Help } from "../components/help";
export const BackEnd = () => {
  const [routePlants, setroutePlants] = useState([]);
  const [comunity, setComunity] = useState([]);
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/json/db.json`)
      .then((response) => response.json())
      .then((data) => {
        setroutePlants(data.BackEnd || []);
        setComunity(data.Facebookcomunity || []);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(comunity);
  return (
    <div className="container">
      <div className="studyPlant">
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
            <NavLink to="/codelab/studyplant" className="breadcrumb__item">
              <p className="breadcrumb__name ">StudyPlant</p>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
                alt=""
                className="breadcrumb__icon-arrow"
              />
            </NavLink>
            <NavLink
              to="/codelab/studyplant/frontEnd"
              className="breadcrumb__item"
            >
              <p className="breadcrumb__name breadcrumb__active">BackEnd</p>
            </NavLink>
          </div>
        </div>
        <div className="row studyPlant__wrap">
          <div className="col-9 col-xxl-8 col-xl-12">
            <div className="studyPlant__title">
              <h1 className="studyPlant__heading">Lộ trình học BackEnd</h1>
              <p className="studyPlant__desc">
                Backend là phần xử lý logic và quản lý dữ liệu của một ứng dụng
                hoặc trang web mà người dùng không thể trực tiếp nhìn thấy. Nó
                bao gồm việc xây dựng và quản lý các chức năng như xử lý yêu cầu
                từ phía người dùng, tương tác với cơ sở dữ liệu, xác thực người
                dùng, và các hoạt động logic khác trên máy chủ
              </p>
            </div>
            <div className="studyPlant__list">
              {routePlants.map((routePlant) => {
                return (
                  <div key={routePlant.id} className="studyPlant__item">
                    <div className="row">
                      <div className="col-4 col-xxl-5 col-md-12">
                        <picture className="studyPlant__image">
                          <img
                            src={`${process.env.PUBLIC_URL}${routePlant.img}`}
                            alt=""
                            className="studyPlant__img"
                          />
                        </picture>
                      </div>
                      <div className="col-8 col-xxl-7 col-md-12 gy-md-2">
                        <div className="studyPlant__content">
                          <h3 className="studyPlant__content-title">
                            {routePlant.title}
                          </h3>
                          <p className="studyPlant__content--desc line-clamp-3">
                            {routePlant.description}
                          </p>
                          <NavLink
                            to={routePlant.link}
                            className="btn studyPlant__button"
                          >
                            Vào học ngay
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="studyPlant__connect">
              <h1 className="studyPlant__connect--heading">
                Tham gia công đồng trên Facebook
              </h1>
              <div className="studyPlant__connect--list">
                {comunity.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="studyPlant__routePlants--item"
                    >
                      {" "}
                      <div className="row">
                        <div className="col-4 col-xxl-5 col-md-12">
                          <picture className="studyPlant__image">
                            <img
                              src={`${process.env.PUBLIC_URL}${item.img}`}
                              alt=""
                              className="studyPlant__img"
                            />
                          </picture>
                        </div>
                        <div className="col-8 col-xxl-7 col-md-12 gy-md-2">
                          <div className="studyPlant__content">
                            <h3 className="studyPlant__content-title">
                              Cộng đồng Code
                              <span className="studyPlant__highlight">Lab</span>
                            </h3>
                            <p className="studyPlant__content--desc line-clamp-3">
                              {item.description}
                            </p>
                            <NavLink
                              to="https://www.facebook.com/groups/congdongitsupport?locale=vi_VN"
                              className="btn studyPlant__button"
                            >
                              Tham gia ngay
                            </NavLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-3 col-xxl-4 col-xl-12">
            <Gift></Gift>
            <Gift></Gift>
          </div>
        </div>
      </div>
      <Help></Help>
    </div>
  );
};
