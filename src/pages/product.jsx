import React from "react";
import { NavLink } from "react-router-dom";
import { Gift } from "../components/gift";
import { Pagination } from "antd";
export const Product = () => {
  return (
    <div className="container">
      <div className="product">
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
            <NavLink to="/link" className="breadcrumb__item">
              <p className="breadcrumb__name breadcrumb__active">Sản phẩm </p>
            </NavLink>
          </div>
        </div>
        <div className="row">
          <div className="col-8 col-xl-12">
            <h1 className="product__heading">Sản phẩm nổi bật</h1>
            <p className="product__desc">
              Tổng hợp các sản phẩm chia sẻ về lập trình online và lập trình
              web.
            </p>
            <div className="product__list">
              <div className="product__item">
                <div className="product__item--top">
                  <div className="product__info-user">
                    <div className="product__avatar">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/avatar.jpg`}
                        alt=""
                        srcset=""
                        className="product__avatar--img"
                      />
                    </div>
                    <p className="product__user-name">Truong Tuan Anh</p>
                  </div>
                  <div className="product__action">
                    <button className="product__save icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/save.svg`}
                        alt=""
                        srcset=""
                        className="product__icon icon"
                      />
                    </button>
                    <button className="product__more icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/dots.svg`}
                        alt=""
                        srcset=""
                        className="product__icon icon"
                      />
                    </button>
                  </div>
                </div>
                <div className="product__item--bottom">
                  <div className="row">
                    <div className="col-8 col-md-12">
                      <h2 className="product__title">
                        <NavLink
                          to="https://tuananhdeptrai16.github.io/Grocery-Mart/"
                          className="product__link"
                        >
                          Thương mại điện tử Grocery Mart
                        </NavLink>
                      </h2>
                      <p className="product__item--desc line-clamp">
                        Một Website sử dụng rất nhiều kiến thức kỹ năng
                        front-end như là HTML, SASS, JAVASCRIPT tạo nên một
                        trang web ....
                      </p>
                      <div className="product__info">
                        <div className="product__tag">
                          <p className="product__tag-name">Html, Css</p>
                        </div>
                        <div className="product__tag">
                          <p className="product__tag-name">JavaScript </p>
                        </div>
                        <div className="product__time">một năm trước</div>
                      </div>
                    </div>
                    <div className="col-4 col-md-12 gy-md-3">
                      <div className="product__image">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/item.png`}
                          alt=""
                          className="product__img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item--top">
                  <div className="product__info-user">
                    <div className="product__avatar">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/avatar.jpg`}
                        alt=""
                        srcset=""
                        className="product__avatar--img"
                      />
                    </div>
                    <p className="product__user-name">Truong Tuan Anh</p>
                  </div>
                  <div className="product__action">
                    <button className="product__save icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/save.svg`}
                        alt=""
                        srcset=""
                        className="product__icon icon"
                      />
                    </button>
                    <button className="product__more icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/dots.svg`}
                        alt=""
                        srcset=""
                        className="product__icon icon"
                      />
                    </button>
                  </div>
                </div>
                <div className="product__item--bottom">
                  <div className="row">
                    <div className="col-8 col-md-12">
                      <h2 className="product__title">
                        <NavLink
                          to="https://tuananhdeptrai16.github.io/Grocery-Mart/"
                          className="product__link"
                        >
                          Thương mại điện tử Grocery Mart
                        </NavLink>
                      </h2>
                      <p className="product__item--desc line-clamp">
                        Một Website sử dụng rất nhiều kiến thức kỹ năng
                        front-end như là HTML, SASS, JAVASCRIPT tạo nên một
                        trang web ....
                      </p>
                      <div className="product__info">
                        <div className="product__tag">
                          <p className="product__tag-name">Html, Css</p>
                        </div>
                        <div className="product__tag">
                          <p className="product__tag-name">JavaScript </p>
                        </div>
                        <div className="product__time">một năm trước</div>
                      </div>
                    </div>
                    <div className="col-4 col-md-12 gy-md-3">
                      <div className="product__image">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/item.png`}
                          alt=""
                          className="product__img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product__item">
                <div className="product__item--top">
                  <div className="product__info-user">
                    <div className="product__avatar">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/avatar.jpg`}
                        alt=""
                        srcset=""
                        className="product__avatar--img"
                      />
                    </div>
                    <p className="product__user-name">Truong Tuan Anh</p>
                  </div>
                  <div className="product__action">
                    <button className="product__save icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/save.svg`}
                        alt=""
                        srcset=""
                        className="product__icon icon"
                      />
                    </button>
                    <button className="product__more icon">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/icon/dots.svg`}
                        alt=""
                        srcset=""
                        className="product__icon icon"
                      />
                    </button>
                  </div>
                </div>
                <div className="product__item--bottom">
                  <div className="row">
                    <div className="col-8 col-md-12">
                      <h2 className="product__title">
                        <NavLink
                          to="https://tuananhdeptrai16.github.io/Grocery-Mart/"
                          className="product__link line-clamp"
                        >
                          Thương mại điện tử Grocery Mart
                        </NavLink>
                      </h2>
                      <p className="product__item--desc line-clamp">
                        Một Website sử dụng rất nhiều kiến thức kỹ năng
                        front-end như là HTML, SASS, JAVASCRIPT tạo nên một
                        trang web ....
                      </p>
                      <div className="product__info">
                        <div className="product__tag">
                          <p className="product__tag-name">Html, Css</p>
                        </div>
                        <div className="product__tag">
                          <p className="product__tag-name">JavaScript </p>
                        </div>
                        <div className="product__time">một năm trước</div>
                      </div>
                    </div>
                    <div className="col-4 col-md-12 gy-md-3">
                      <div className="product__image">
                        <img
                          src={`${process.env.PUBLIC_URL}/images/item.png`}
                          alt=""
                          className="product__img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 col-xl-12">
            <div className="product__gift">
              <Gift></Gift>
            </div>
          </div>
        </div>
      </div>
      <div className="product__pagination">
        <Pagination
          align="center"
          defaultCurrent={1}
          total={50}
          onChange={() => {}}
        />
      </div>
    </div>
  );
};
