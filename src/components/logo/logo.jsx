import React from "react";
import { NavLink } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <NavLink to="/codelab/homelogin" className="logo__wrap">
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
      </NavLink>
    </div>
  );
};

export default Logo;
