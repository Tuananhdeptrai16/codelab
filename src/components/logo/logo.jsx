import React from "react";
import "./logo.scss";
import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <div className="logo__wrap">
        <NavLink to="/codelab">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            className="logo__img"
          />
        </NavLink>
        <span className="logo__name">
          Code<span className="logo__highlight">Lab</span>
        </span>
      </div>
    </div>
  );
};

export default Logo;
