import React from "react";
import { useState } from "react";
import Logo from "../../components/logo/logo";
import { NavLink } from "react-router-dom";
import { Validation } from "./Validation";
export const Login = () => {
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
  console.log(show);
  return (
    <div className="login">
      <div
        className={`row row-cols-2 row-cols-md-1 login__wrap ${
          show === true ? "login__md-active" : ""
        }`}
      >
        <div className="col">
          <div className="login__background">
            <div className="login__image">
              <img
                src={`${process.env.PUBLIC_URL}/images/login/img1.png`}
                alt=""
                className="login__img"
              />
            </div>
            <h2 className="login__desc">
              Chào mừng bạn đến với Code
              <span className="login__highlight">Lab</span>!
            </h2>
            <p className="login__copyright">
              Khoa Điện Tử - Đại Học Công Nghiệp Hà Nội ❤️
            </p>
            <div
              onClick={() => setShow(true)}
              className="login__next d-none d-md-flex "
            >
              <div className="login__dot"></div>
              <div className="login__dot"></div>
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/arrow_right.svg`}
                alt=""
                className="login__arrow--icon"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="login__content">
            <Logo></Logo>
            <h1 className="login__title">Chào mừng quay trở lại!</h1>
            <p className="login__title--desc">
              Chào mừng bạn đã quay trở lại , hãy đăng nhập và lưu lại để đăng
              nhập lần sau được dễ dàng hơn
            </p>
            <form className="input" onSubmit={handleSubmit}>
              <div className="input__form--wrap">
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
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

              <div className="input__action">
                <div className="input__checkbox">
                  <div className="input__checkbox--container">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="input__default"
                    />
                    <span class="input__checkmark"></span>
                  </div>
                  <p className="input__default--title">Đặt làm mặc định</p>
                </div>
                <NavLink to="./codelab/forget" className="input__forgot">
                  Quên mật khẩu ?
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
