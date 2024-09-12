import React from "react";
import "./logo.scss";
import { Link, NavLink } from "react-router-dom";
export const LogoOnly = () => {
  return (
    <div className="logo">
      <div className="logo__wrap">
        <NavLink to="/codelab/home">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt="logo"
            className="logo__img"
          />
        </NavLink>
      </div>
    </div>
  );
};
