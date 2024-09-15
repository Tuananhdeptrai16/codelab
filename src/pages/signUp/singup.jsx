// The code was written by programmer Truong Tuan Anh
// Thanks for watching and sharing
import React from "react";
import { useState } from "react";
import Logo from "../../components/logo/logo";
import { NavLink } from "react-router-dom";
import { Validation } from "../login/Validation";
export const SignUp = () => {
  const [error, setError] = useState({});
  const [values, setValues] = useState({});
  const [show, setShow] = useState(false);
  const handleChange = (e) => {
    setValues({
      ...values, // sao chép lại đối tượng cũ
      [e.target.name]: e.target.value, // cập nhật giá trị dựa trên name
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(Validation(values));
  };
  return (
    <div className="signUp">
      <div
        className={`row row-cols-2 row-cols-md-1 signUp__wrap ${
          show === true ? "signUp__md-active" : ""
        }`}
      >
        <div className="col">
          <div className="signUp__background">
            <div className="signUp__image">
              <img
                src={`${process.env.PUBLIC_URL}/images/signUp/img1.png`}
                alt=""
                className="signUp__img"
              />
            </div>
            <h2 className="signUp__desc">
              Chào mừng bạn đến với Code
              <span className="signUp__highlight">Lab</span>!
            </h2>
            <p className="signUp__copyright">
              Khoa Điện Tử - Đại Học Công Nghiệp Hà Nội ❤️
            </p>
            <div
              onClick={() => setShow(true)}
              className="signUp__next d-none d-md-flex "
            >
              <div className="signUp__dot"></div>
              <div className="signUp__dot"></div>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/arrow_right.svg`}
                alt=""
                className="signUp__arrow--icon"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="signUp__content">
            <Logo></Logo>
            <h1 className="signUp__title">Đăng ký</h1>
            <p className="signUp__title--desc">
              Học tập là quá trình bền bỉ và lâu dài . Hãy để chúng tôi giúp bạn
              đạt tới thành công đó
            </p>
            <form className="input" onSubmit={handleSubmit}>
              <div className="input__form--wrap">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  autoComplete="username"
                  required
                  autoFocus
                  placeholder="Email"
                  className={`input__email input__form  ${
                    error.email
                      ? "input__border--error"
                      : "input__border--success"
                  }`}
                />

                {error.email ? (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon/error.svg`}
                    alt=""
                    className="input__error--icon"
                  />
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon/message.svg`}
                    alt=""
                    className={`input__icon`}
                  />
                )}
                {error.email && (
                  <p className="input__error--text">{error.email}</p>
                )}
              </div>
              <div className="input__form--wrap">
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  autoFocus
                  placeholder="Mật khẩu "
                  className={`input__password input__form ${
                    error.password
                      ? "input__border--error"
                      : "input__border--success"
                  }`}
                />

                {error.password ? (
                  <>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/error.svg`}
                      alt=""
                      className="input__error--icon"
                    />
                    {error.password && (
                      <p className="input__error--text">{error.password}</p>
                    )}
                  </>
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon/lock.svg`}
                    alt=""
                    className="input__icon"
                  />
                )}
              </div>
              <div className="input__form--wrap">
                <input
                  onChange={handleChange}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  autoFocus
                  placeholder="Nhập lại mật khẩu"
                  className={`input__password input__form ${
                    error.password
                      ? "input__border--error"
                      : "input__border--success"
                  }`}
                />

                {error.password ? (
                  <>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/error.svg`}
                      alt=""
                      className="input__error--icon"
                    />
                    {error.password && (
                      <p className="input__error--text">{error.password}</p>
                    )}
                  </>
                ) : (
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon/lock.svg`}
                    alt=""
                    className="input__icon"
                  />
                )}
              </div>
              <div className="input__action">
                <div className="input__checkbox">
                  <div className="input__checkbox--container">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="input__default"
                    />
                    <span className="input__checkmark"></span>
                  </div>
                  <p className="input__default--title">Đặt làm mặc định</p>
                </div>
                <NavLink to="./codelab/login" className="input__forgot">
                  Đăng nhập ngay?
                </NavLink>
              </div>
              <div className="input__button--wrap">
                <button
                  type="submit"
                  className="form__btn--primary input__button"
                >
                  Đăng nhập
                </button>
                <NavLink className="form__btn--outline input__button">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon/google-line.svg`}
                    alt=""
                  />
                  Đăng nhập với Google
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
