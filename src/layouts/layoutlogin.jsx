// The code was written by programmer Truong Tuan Anh
// Thanks for watching and sharing

import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import MyRoute from "../routes/router";
import { NavLink } from "react-router-dom";
import { LogoOnly } from "../components/logo_only";
import { Footer } from "./footer";
import { Search } from "../components/search";
import Logo from "../components/logo";
const { Header, Sider, Content } = Layout;
const LayOutLogin = () => {
  const [collapsed, setCollapsed] = useState(true);

  const menuItems = [
    {
      key: "1",
      icon: (
        <NavLink to="/codelab/home">
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/home.svg`}
            alt="svg"
            className="nav__icon icon"
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
            className="nav__icon icon"
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
            className="nav__icon icon"
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
            className="nav__icon icon"
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
        <NavLink to="/codelab/practice">
          <img
            src={`${process.env.PUBLIC_URL}/images/icon/codelab.svg`}
            alt="svg"
            className="nav__icon icon"
          />
        </NavLink>
      ),
      label:
        collapsed === false ? (
          <NavLink
            to="/codelab/practice"
            className={`nav__link ${({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""}`}
          >
            CodeLab
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
                <div className="header__button">
                  <button className="header__btn--login btn ">
                    <NavLink to="/codelab/login">Đăng nhập</NavLink>
                  </button>
                  <button className="header__btn--singup btn">
                    <NavLink to="/codelab/signup">Đăng ký</NavLink>
                  </button>
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

export default LayOutLogin;
