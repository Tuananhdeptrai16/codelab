import React from "react";

export const Catalog = () => {
  return (
    <div className="catalog">
      <div className="row">
        <div className="col-7">
          <h2 className="catalog__heading">
            Chúc mừng bạn nhận được 10 ⭐ cho ngày hôm nay 🎊🎊
          </h2>
          <p className="catalog__desc">
            Hãy thu thập phần quà đăng nhập thường xuyên để mở những khóa học
            hữu ích nhé
          </p>
          <div className="catalog__btn">
            <button className="catalog__button">
              Nhận 10 sao ngày hôm nay
            </button>
          </div>
        </div>
        <div className="col-5">
          <img
            src={`${process.env.PUBLIC_URL}/images/catalog/catalog.gif`}
            alt="catalog__icon"
            className="catalog__icon"
          />
        </div>
      </div>
      <button onClick={() => {}} className="catalog__cancel">
        <img
          src={`${process.env.PUBLIC_URL}/images/icon/cancel.svg`}
          alt=""
          className="catalog__icon--cancel"
        />
      </button>
    </div>
  );
};
