/*
    The code was written by programmer Truong Tuan Anh
    Thanks for watching and sharing
*/
import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import MyRoute from "../../routes/router";
import Logo from "../../components/logo/logo";
import { LogoOnly } from "../../components/logo/logo_only";
import { NavLink } from "react-router-dom";
import { Search } from "../../components/search/search";
import { Footer } from "../footer";
const { Header, Sider, Content } = Layout;
const MyLayOut = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [notification, setNotification] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const bellRef = useRef(null);
  const userRef = useRef(null);
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setNotification(false);
      }
      if (userRef.current && !userRef.current.contains(e.target)) {
        setShowUser(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);
    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, []);

  const menuItems = [
    {
      key: "1",
      icon: (
        <NavLink to="/codelab/home">
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/home.svg`}
            alt="svg"
            className="nav__icon"
          />
        </NavLink>
      ),
      label:
        collapsed === false ? (
          <NavLink
            className={`nav__link ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
            to="/codelab/home"
          >
            Trang chủ
          </NavLink>
        ) : null,
    },
    {
      key: "2",
      icon: (
        <NavLink to="/codelab/studyplant">
          {" "}
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/study.svg`}
            alt="svg"
            className="nav__icon"
          />
        </NavLink>
      ),
      label:
        collapsed === false ? (
          <NavLink
            className={`nav__link ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
            to="/codelab/study"
          >
            Kế hoạch
          </NavLink>
        ) : null,
    },
    {
      key: "3",
      icon: (
        <NavLink to="/codelab/courses">
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/course.svg`}
            alt="svg"
            className="nav__icon"
          />
        </NavLink>
      ),
      label:
        collapsed === false ? (
          <NavLink
            className={`nav__link ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
            to="/codelab/courses"
          >
            Khóa học
          </NavLink>
        ) : null,
    },
    {
      key: "4",
      icon: (
        <NavLink to="/codelab/flashcard">
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/flashcard.svg`}
            alt="svg"
            className="nav__icon nav__icon--active"
          />
        </NavLink>
      ),
      label:
        collapsed === false ? (
          <NavLink
            className={`nav__link ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
            to="/codelab/flashcard"
          >
            FlashCard
          </NavLink>
        ) : null,
    },
    {
      key: "5",
      icon: (
        <NavLink to="/codelab/blog">
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/blog.svg`}
            alt="svg"
            className="nav__icon"
          />
        </NavLink>
      ),
      label:
        collapsed === false ? (
          <NavLink
            className={`nav__link ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
            to="/codelab/blog"
          >
            Bài viết
          </NavLink>
        ) : null,
    },
    {
      key: "6",
      icon: (
        <img
          src={`${process.env.PUBLIC_URL}/images/icon/codelab.svg`}
          alt="svg"
          className="nav__icon"
        />
      ),
      label:
        collapsed === false ? (
          <NavLink
            className={`nav__link ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
            to="/codelab/practice"
          >
            LabCode
          </NavLink>
        ) : null,
    },
  ];
  return (
    <>
      <Layout className="layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          className={`layout__background  ${
            collapsed === true ? "d-md-none" : <LogoOnly />
          }`}
        >
          {collapsed === false ? <Logo /> : <LogoOnly />}
          <Menu theme={"#eeeee"} mode="inline" items={menuItems} />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              position: "relative",
            }}
          >
            <div className="header__wrap">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "20px",
                  width: 64,
                  height: 64,
                }}
              />
              <div className="header__action">
                <Search></Search>
                <div className="header__notification">
                  <button onClick={() => setNotification(!notification)}>
                    <img
                      src={`${process.env.PUBLIC_URL}/images/icon/notification.svg`}
                      alt=""
                      className="header__notification--icon"
                    />
                  </button>
                  <span className="header__number--notification">1</span>
                  {notification && (
                    <div className="header__bell" ref={bellRef}>
                      <div className="header__bell--wrap">
                        <div className="header__bell--top">
                          <h3 className="header__bell--title">Thông báo</h3>
                          <span className="header__flag">
                            Đánh dấu đọc tất cả
                          </span>
                        </div>
                        <div className="header__bell--list">
                          <div className="header__bell--item">
                            <div className="header__bell--avatar">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                                alt=""
                                className="header__bell--img"
                              />
                            </div>
                            <div className="header__bell--content">
                              <p className="header__bell--notification">
                                Bài học
                                <strong>
                                  {" "}
                                  Mở event đua TOP trả lời câu hỏi{" "}
                                </strong>
                                mới được thêm vào.
                              </p>
                              <p className="header__bell--date">9 ngày trước</p>
                            </div>
                          </div>
                          <div className="header__bell--item">
                            <div className="header__bell--avatar">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                                alt=""
                                className="header__bell--img"
                              />
                            </div>
                            <div className="header__bell--content">
                              <p className="header__bell--notification">
                                Bài học
                                <strong>
                                  {" "}
                                  Mở event đua TOP trả lời câu hỏi{" "}
                                </strong>
                                mới được thêm vào.
                              </p>
                              <p className="header__bell--date">9 ngày trước</p>
                            </div>
                          </div>
                          <div className="header__bell--item">
                            <div className="header__bell--avatar">
                              <img
                                src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                                alt=""
                                className="header__bell--img"
                              />
                            </div>
                            <div className="header__bell--content">
                              <p className="header__bell--notification line-clamp">
                                Bài học
                                <strong>
                                  {" "}
                                  Mở event đua TOP trả lời câu hỏi{" "}
                                </strong>
                                mới được thêm vào.
                              </p>
                              <p className="header__bell--date">9 ngày trước</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  onClick={() => setShowUser(!showUser)}
                  className="header__avatar"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                    alt=""
                    className="header__avatar--image"
                  />
                  {showUser && notification === false ? (
                    <div className="header__user" ref={userRef}>
                      <div className="header__user--wrap">
                        <div className="header__user--info">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                            alt=""
                            className="header__user--avatar"
                          />
                          <div className="header__user--info-wrap">
                            <p className="header__user--name">
                              Truong Tuan Anh
                            </p>
                            <p className="header__user--id">@bobouser</p>
                          </div>
                        </div>
                        <div className="header__user--separate"></div>
                        <ul className="header__user--list">
                          <li>
                            <Link
                              to="/codelab/user"
                              className="header__user--link"
                            >
                              {" "}
                              Trang cá nhân
                            </Link>
                          </li>
                          <div className="header__user--separate"></div>
                          <li>
                            <Link
                              to={"/codelab/mycourses"}
                              className="header__user--link"
                            >
                              Khóa học của tôi
                            </Link>
                          </li>
                          <li>
                            <button className="header__user--theme">
                              Chủ đề : <span>Sáng</span>
                            </button>
                          </li>
                          <div className="header__user--separate"></div>

                          <li>
                            <Link
                              to={"/codelab/login"}
                              className="header__user--link"
                            >
                              Đăng xuất
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              minHeight: 280,
              background: "#ffff",
              borderRadius: 10,
            }}
          >
            <MyRoute />
          </Content>
          <Footer></Footer>
        </Layout>
        {collapsed === false ? (
          <div
            onClick={() => setCollapsed(!collapsed)}
            className="overlay"
          ></div>
        ) : (
          ""
        )}
      </Layout>
    </>
  );
};

export default MyLayOut;
