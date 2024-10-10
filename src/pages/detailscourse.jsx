import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
export const DetailsCourse = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="detail">
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
              <NavLink
                to="/codelab/studyplant/frontEnd"
                className="breadcrumb__item"
              >
                <p className="breadcrumb__name breadcrumb__active">
                  Khóa học HTML - CSS
                </p>
              </NavLink>
            </div>
          </div>
          <div className="row detail__main">
            <div className="col-8 col-lg-12">
              <h1 className="detail__heading">Khoá học HMTL , CSS</h1>
              <p className="detail__desc">
                Trong khóa này chúng ta sẽ cùng nhau tìm hiểu về những ngôn ngữ
                mà chúng ta cần biết khi học về Website
              </p>
              <div className="detail__reward">
                <h2 className="detail__heading">Bạn sẽ học được những gì</h2>
                <div className="row row-cols-2 row-cols-md-1 detail__reward--list">
                  <div className="col">
                    <ul>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Biết cách đặt tên class CSS theo chuẩn BEM
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Biết cách đặt tên class CSS theo chuẩn BEM
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Làm chủ Flexbox khi dựng bố cục website
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Biết cách tự tạo động lực cho bản thân
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Học được cách làm UI chỉn chu, kỹ tính
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Biết cách xây dựng giao diện web với HTML, CSS
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Biết cách đặt tên class CSS theo chuẩn BEM
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Làm chủ Flexbox khi dựng bố cục website
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Biết cách tự tạo động lực cho bản thân
                      </li>
                      <li>
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/check.svg`}
                          alt=""
                          className="detail__check--icon"
                        />
                        Học được cách làm UI chỉn chu, kỹ tính
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="detail__content">
                <h2 className="detail__heading">Nội dung khóa học</h2>
                <div className="detail__info">
                  <div className="detail__info--left">
                    <p className="detail__text"> • 6 phần</p>
                    <p className="detail__text"> • 50 bài học</p>
                    <p className="detail__text">
                      • 6 giờ 19 phút tổng thời lượng
                    </p>
                  </div>
                  <div className="detail__info--right">
                    <button
                      onClick={() => setToggle(!toggle)}
                      className="detail__extend--button"
                    >
                      Mở rộng tất cả các phần
                    </button>
                  </div>
                </div>
                <div className="detail__list">
                  <button
                    onClick={() => {
                      console.log("click1");
                    }}
                    className="detail__item--info"
                  >
                    <div className="detail__item--wrap">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/${
                          toggle ? "arrow-up.svg" : "arrow-down.svg"
                        }`}
                        alt=""
                        srcset=""
                        className="detail__icon icon"
                      />
                      <p className="detail__item-text">
                        HTML, CSS là gì ? Tổng quan về Website
                      </p>
                    </div>
                    <p className="detail__item--desc">8 bài học</p>
                  </button>
                  {toggle && (
                    <div className="detail__lecture--wrap">
                      <div className="detail__lecture">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/file.svg`}
                          alt=""
                          srcset=""
                          className="detail__icon icon"
                        />
                        <p className="detail__text">
                          1. Bạn sẽ làm được gì sau khóa học?
                        </p>
                      </div>
                      <div className="detail__lecture">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/file.svg`}
                          alt=""
                          srcset=""
                          className="detail__icon icon"
                        />
                        <p className="detail__text">2. Tìm hiểu về HTML, CSS</p>
                      </div>
                      <div className="detail__lecture">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/pen.svg`}
                          alt=""
                          srcset=""
                          className="detail__icon icon"
                        />
                        <p className="detail__text">
                          3. Cài đặt VS Code, Page Ruler extension
                        </p>
                      </div>
                    </div>
                  )}

                  <button className="detail__item--info">
                    <div className="detail__item--wrap">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/${
                          toggle ? "arrow-up.svg" : "arrow-down.svg"
                        }`}
                        alt=""
                        srcset=""
                        className="detail__icon icon"
                      />
                      <p className="detail__item-text">
                        HTML, CSS là gì ? Tổng quan về Website
                      </p>
                    </div>
                    <p className="detail__item--desc">8 bài học</p>
                  </button>
                  {toggle && (
                    <div className="detail__lecture--wrap">
                      <div className="detail__lecture">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/file.svg`}
                          alt=""
                          srcset=""
                          className="detail__icon icon"
                        />
                        <p className="detail__text">
                          1. Bạn sẽ làm được gì sau khóa học?
                        </p>
                      </div>
                      <div className="detail__lecture">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/file.svg`}
                          alt=""
                          srcset=""
                          className="detail__icon icon"
                        />
                        <p className="detail__text">2. Tìm hiểu về HTML, CSS</p>
                      </div>
                      <div className="detail__lecture">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/icon/pen.svg`}
                          alt=""
                          srcset=""
                          className="detail__icon icon"
                        />
                        <p className="detail__text">
                          3. Cài đặt VS Code, Page Ruler extension
                        </p>
                      </div>
                    </div>
                  )}

                  <button className="detail__item--info">
                    <div className="detail__item--wrap">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/arrow-down.svg`}
                        alt=""
                        srcset=""
                        className="detail__icon icon"
                      />
                      <p className="detail__item-text">
                        HTML, CSS là gì ? Tổng quan về Website
                      </p>
                    </div>
                    <p className="detail__item--desc">8 bài học</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-4 d-lg-none">
              <div className="detail__wrap">
                <div className="detail__background d-xl-none">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/courses/item1.png`}
                    alt=""
                    srcset=""
                    className="detail__img"
                  />
                </div>
                <div className="detail__price">Miễn phí</div>
                <button className="btn detail__register">
                  <Link to="/codelab/courses/form-study">Tiếp tục học</Link>
                </button>
                <div className="detail__includes">
                  <p className="detail__includes--heading">
                    Khóa học này cung cấp
                  </p>

                  <div className="detail__item">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/level.svg`}
                      alt=""
                      srcset=""
                      className="detail__icon icon"
                    />
                    <p className="detail__text">Trình độ cơ bản</p>
                  </div>
                  <div className="detail__item">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/file.svg`}
                      alt=""
                      srcset=""
                      className="detail__icon icon"
                    />
                    <p className="detail__text">12 tài liệu</p>
                  </div>
                  <div className="detail__item">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/lesson.svg`}
                      alt=""
                      srcset=""
                      className="detail__icon icon"
                    />
                    <p className="detail__text">Bài tập luyện tập mỗi bài</p>
                  </div>
                  <div className="detail__item">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/star.svg`}
                      alt=""
                      srcset=""
                      className="detail__icon"
                    />
                    <p className="detail__text">Tổng số 100 ⭐</p>
                  </div>
                  <div className="detail__item">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/certify.svg`}
                      alt=""
                      srcset=""
                      className="detail__icon icon"
                    />
                    <p className="detail__text">Có chứng nhận khi hoàn thành</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <button className="btn detail__register detail__register-lg">
          <Link to="/codelab/courses/form-study">Tiếp tục học</Link>
        </button>
      </div>
    </div>
  );
};
