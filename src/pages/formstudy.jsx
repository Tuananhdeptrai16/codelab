import React from "react";
import { NavLink } from "react-router-dom";
import { Gift } from "../components/gift";
import { Quote } from "../components/quote";
export const FormStudy = () => {
  return (
    <div className="container">
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
          <NavLink to="/codelab/courses" className="breadcrumb__item">
            <p className="breadcrumb__name">Khóa học của tôi</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
              alt=""
              className="breadcrumb__icon-arrow"
            />
          </NavLink>
          <NavLink to="/codelab/courses" className="breadcrumb__item">
            <p className="breadcrumb__name breadcrumb__active">JavaScript</p>
          </NavLink>
        </div>
      </div>
      <div className="study">
        <div className="row">
          <div className="col-8 col-xl-12">
            <div className="container">
              <h1 className="study__heading">Giới thiệu Javascript</h1>
              <p className="study__time">9 phút đọc</p>
              <p className="study__content">
                Javascript là ngôn ngữ lập trình bậc cao, cực kỳ linh hoạt được
                sử dụng chủ yếu để tao ra ứng dụng chạy trên trình duyệt web.
                Được tạo ra bởi Brendan Eich vào năm 1995. Nó thể viết code ở
                text editor và chạy nó trực tiếp trên trình duyệt mà không cần
                phải trải qua quá trình biên dịch như C++ hoặc Java.
              </p>
              <p className="study__content">
                Javascript tập trung nâng cao sự tương tác của người dùng với
                trang web. Bạn có thể làm cho trang web trở nên sống động và
                tăng tính tương tác hơn. Trong các ứng dụng web, người ta hay
                dùng JS để làm các hiệu ứng đặc biệt như sliders, pop-ups, hoặc
                xác thực dữ liệu các form (form validations) trước khi gửi dữ
                liệu lên server .v.v...
              </p>
              <p className="study__content">
                Vì nó cực kỳ linh hoạt, nên gần như rất nhiều lĩnh vực mà Js có
                thể tạo nên:
              </p>
              <p className="study__content study__list">
                Web App: ReactJS,{" "}
                <span className="study__hightLight">VueJS</span>,{" "}
                <span className="study__hightLight">Svelte</span>,{" "}
                <span className="study__hightLight"> Solid</span>...
              </p>
              <p className="study__content study__list">
                Mobile App: Có thể tạo ra được các ứng dụng di động chạy được đa
                nền tảng, như IOS và Android, điển hình có thể kể đến là React
                Native, Ionic, và NativeScript
              </p>
              <p className="study__content study__list">
                Desktop App: Js cho phép lập trình viên tạo ra được các ứng dụng
                trên Desktop dựa trên website một cách dễ dàng, điển hình là
                Tauri, Electron và NeutralinoJS
              </p>
              <h2 className="study__title">Javascript Engine</h2>
              <p className="study__content">
                Khi nghe từ Engine, đó hẳn là 1 cái gì đó cao siêu và phức tạp.
                Nhưng nếu để phải giải thích cho một người mới học JS, thì đó
                nên là:
              </p>
              <ol className="study__list-number">
                <li className="study__content">
                  Engine được tạo ra với mục đích đọc - Phân tích câu lệnh, cú
                  pháp code
                </li>
                <li className=" study__content">
                  Nó chuyển đổi, biên dịch những dòng code đó sang mã mà máy
                  tính có thể hiểu được(dãy số 0 và 1, VD:
                  000110101001100010101010110)
                </li>
                <li className=" study__content">
                  Máy chạy phần code và truyền tải thông điệp tới người dùng
                </li>
              </ol>
              <p className="study__content">
                Còn nếu muốn hiểu sâu sâu hơn nữa, thì bạn có thể đọc chi tiết
                về V8 Engine mà Chrome/Opera sử dung, hay SpiderMonkey trong
                FireFox, hoặc Nitro cho Safari.
              </p>
              <div className="study__image">
                <img
                  src={`https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png`}
                  alt=""
                  className="study__img"
                />
              </div>
              <h2 className="study__title">Javascript Engine</h2>
              <p className="study__content">
                Còn nếu muốn hiểu sâu sâu hơn nữa, thì bạn có thể đọc chi tiết
                về V8 Engine mà Chrome/Opera sử dung, hay SpiderMonkey trong
                FireFox, hoặc Nitro cho Safari.
              </p>
              <div className="study__action">
                <button className="btn study__action-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon/practice.svg`}
                    alt=""
                    className="study__icon study__icon--animation"
                  />
                  Luyện tập ngay{" "}
                </button>
              </div>
              <h2 className="study__title">Bình luận</h2>

              <div className="study__comment">
                <div className="study__user--comment">
                  <div className="study__user--info">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                      alt=""
                      className="study__user--avatar"
                    />
                    <p className="study__user--name">Truong Tuan Anh</p>

                    <p className="study__time--comment">5 tháng trước</p>
                  </div>
                  <div className="study__response">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/reply.svg`}
                      alt=""
                      className="study__icon "
                    />
                    <button className="study__response--btn">Phản hồi</button>
                  </div>
                </div>
                <p className="study__reply">Thanks</p>
              </div>
              <form className="study__form">
                <div className="study__user--comment">
                  <div className="study__user--info">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                      alt=""
                      className="study__user--avatar"
                    />
                    <p className="study__user--name d-none d-md-block">
                      Truong Tuan Anh
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Nhập bình luận ..."
                    className="study__input"
                  />
                  <button className="study__submit">Gửi</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-4 col-xl-12">
            <div className="study__lesson">
              <div className="study__lesson--item">
                <p className="study__lesson--name">1. Giới thiệu JavaScript</p>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/arrow-down.svg`}
                  alt=""
                  className="study__lesson-icon icon"
                />
              </div>
              {/* <div className="study__lesson--details">
                <ul>
                  <li>
                    <NavLink>1.Giới thiệu JavaScript</NavLink>
                  </li>
                  <li>
                    <NavLink>Ide là gì ?</NavLink>
                  </li>
                  <li>
                    <NavLink>3. DevTools là gì ?</NavLink>
                  </li>
                </ul>
              </div> */}
              <div className="study__lesson--item">
                <p className="study__lesson--name">2. JavaScript cơ bản</p>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/lock-lesson.svg`}
                  alt=""
                  className="study__lesson-icon icon"
                />
              </div>

              <div className="study__gift">
                <Gift></Gift>
              </div>
              <div className="study__quote">
                <Quote></Quote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
