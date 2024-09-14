import React, { useEffect } from "react";
import { useState } from "react";
export const Help = () => {
  const [show, setShow] = useState(true);
  const [notification, setNotification] = useState(true);
  const [className, setClassName] = useState(false);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setNotification((prev) => !prev);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="help">
      <button className="help__picture">
        {show === true ? (
          <img
            onClick={() => setShow(!show)}
            src={`${process.env.PUBLIC_URL}/images/icon/capy.svg`}
            alt=""
            className="help__icon"
          />
        ) : (
          <div
            onMouseEnter={() => setClassName(true)}
            onMouseLeave={() => setClassName(false)}
            className="help__action--wrap"
          >
            <div
              className={`help__action help__unActive ${
                className && "help__active"
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/zalo.svg`}
                alt=""
                className="help__icon--social"
              />
            </div>
            <div
              className={`help__action help__unActive ${
                className && "help__active"
              }`}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/icon/phone.svg`}
                alt=""
                className="help__icon--social help__icon--active"
              />
            </div>
            <div className="help__action">
              <img
                onClick={() => setShow(!show)}
                src={`${process.env.PUBLIC_URL}/images/icon/cancelBlack.svg`}
                alt=""
                className="help__icon"
              />
            </div>
          </div>
        )}
      </button>
      {notification && className === false && (
        <div className="help__notification">
          <button
            onClick={() => setNotification(!notification)}
            className="help__cancel"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/icon/cancel.svg`}
              alt=""
              className="help__cancel--icon"
            />
          </button>
          <p className="help__desc">
            Xin chào, CodeLab rất vui được hỗ trợ bạn. Hãy chọn cách thức kết
            nối và gửi vấn đề cụ thể mà bạn cần CodeLab hỗ trợ nhé!
          </p>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/tamgiac.png`}
            alt=""
            className="help__triangle"
          />
        </div>
      )}
    </div>
  );
};
