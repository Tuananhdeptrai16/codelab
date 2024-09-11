import React from "react";
import "./logo.scss";
import { Link } from "react-router-dom";
export const LogoOnly = () => {
  return (
    <div className="logo">
      <div className="logo__wrap">
        <Link>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo/logo.png`}
            alt="logo"
            className="logo__img"
          />
        </Link>
      </div>
    </div>
  );
};
