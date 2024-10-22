import React from "react";
import { NavLink } from "react-router-dom";
import { Quote } from "../components/quote";
export const FormBlog = () => {
  return (
    <div className="container">
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
          <NavLink to="/courses" className="breadcrumb__item">
            <p className="breadcrumb__name">Blog</p>
            <img
              src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
              alt=""
              className="breadcrumb__icon-arrow"
            />
          </NavLink>
          <NavLink to="/courses" className="breadcrumb__item">
            <p className="breadcrumb__name breadcrumb__active">Blog gì đó</p>
          </NavLink>
        </div>
      </div>
      <div className="study">
        <div className="row">
          <div className="col-9 col-lg-12">
            <div className="container">
              <h1 className="blog__heading">Giới thiệu Javascript</h1>
              <p className="blog__time">9 phút đọc</p>
              <p className="blog__content">
                Javascript là ngôn ngữ lập trình bậc cao, cực kỳ linh hoạt được
                sử dụng chủ yếu để tao ra ứng dụng chạy trên trình duyệt web.
                Được tạo ra bởi Brendan Eich vào năm 1995. Nó thể viết code ở
                text editor và chạy nó trực tiếp trên trình duyệt mà không cần
                phải trải qua quá trình biên dịch như C++ hoặc Java.
              </p>
              <p className="blog__content">
                Javascript tập trung nâng cao sự tương tác của người dùng với
                trang web. Bạn có thể làm cho trang web trở nên sống động và
                tăng tính tương tác hơn. Trong các ứng dụng web, người ta hay
                dùng JS để làm các hiệu ứng đặc biệt như sliders, pop-ups, hoặc
                xác thực dữ liệu các form (form validations) trước khi gửi dữ
                liệu lên server .v.v...
              </p>
              <p className="blog__content">
                Vì nó cực kỳ linh hoạt, nên gần như rất nhiều lĩnh vực mà Js có
                thể tạo nên:
              </p>
              <p className="blog__content blog__list">
                Web App: ReactJS,{" "}
                <span className="blog__hightLight">VueJS</span>,{" "}
                <span className="blog__hightLight">Svelte</span>,{" "}
                <span className="blog__hightLight"> Solid</span>...
              </p>
              <p className="blog__content blog__list">
                Mobile App: Có thể tạo ra được các ứng dụng di động chạy được đa
                nền tảng, như IOS và Android, điển hình có thể kể đến là React
                Native, Ionic, và NativeScript
              </p>
              <p className="blog__content blog__list">
                Desktop App: Js cho phép lập trình viên tạo ra được các ứng dụng
                trên Desktop dựa trên website một cách dễ dàng, điển hình là
                Tauri, Electron và NeutralinoJS
              </p>
              <h2 className="blog__title">Javascript Engine</h2>
              <p className="blog__content">
                Khi nghe từ Engine, đó hẳn là 1 cái gì đó cao siêu và phức tạp.
                Nhưng nếu để phải giải thích cho một người mới học JS, thì đó
                nên là:
              </p>
              <ol className="blog__list-number">
                <li className="blog__content">
                  Engine được tạo ra với mục đích đọc - Phân tích câu lệnh, cú
                  pháp code
                </li>
                <li className=" blog__content">
                  Nó chuyển đổi, biên dịch những dòng code đó sang mã mà máy
                  tính có thể hiểu được(dãy số 0 và 1, VD:
                  000110101001100010101010110)
                </li>
                <li className=" blog__content">
                  Máy chạy phần code và truyền tải thông điệp tới người dùng
                </li>
              </ol>
              <p className="blog__content">
                Còn nếu muốn hiểu sâu sâu hơn nữa, thì bạn có thể đọc chi tiết
                về V8 Engine mà Chrome/Opera sử dung, hay SpiderMonkey trong
                FireFox, hoặc Nitro cho Safari.
              </p>
              <div className="blog__image">
                <img
                  src={`https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png`}
                  alt=""
                  className="blog__img"
                />
              </div>
              <h2 className="blog__title">Javascript Engine</h2>
              <p className="blog__content">
                Còn nếu muốn hiểu sâu sâu hơn nữa, thì bạn có thể đọc chi tiết
                về V8 Engine mà Chrome/Opera sử dung, hay SpiderMonkey trong
                FireFox, hoặc Nitro cho Safari.
              </p>
              <div className="blog__action">
                <button className="btn blog__action-btn">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/icon/practice.svg`}
                    alt=""
                    className="blog__icon blog__icon--animation"
                  />
                  Nhận thưởng
                </button>
              </div>
              <h2 className="blog__title">Bình luận</h2>

              <div className="blog__comment">
                <div className="blog__user--comment">
                  <div className="blog__user--info">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                      alt=""
                      className="blog__user--avatar"
                    />
                    <p className="blog__user--name">Truong Tuan Anh</p>

                    <p className="blog__time--comment">5 tháng trước</p>
                  </div>
                  <div className="blog__response">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/reply.svg`}
                      alt=""
                      className="blog__icon "
                    />
                    <button className="blog__response--btn">Phản hồi</button>
                  </div>
                </div>
                <p className="blog__reply">Thanks</p>
              </div>
              <form className="blog__form">
                <div className="blog__user--comment">
                  <div className="blog__user--info">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                      alt=""
                      className="blog__user--avatar"
                    />
                    <p className="blog__user--name d-none d-md-block">
                      Truong Tuan Anh
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Nhập bình luận ..."
                    className="blog__input"
                  />
                  <button className="blog__submit">Gửi</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-3 col-lg-12">
            <Quote></Quote>
          </div>
        </div>
      </div>
    </div>
  );
};
