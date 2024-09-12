/*
    The code was written by programmer Truong Tuan Anh
    Thanks for watching and sharing
*/
import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import MyRoute from "../../routes/router";
import Logo from "../../components/logo/logo";
import { LogoOnly } from "../../components/logo/logo_only";
import { NavLink } from "react-router-dom";
import { Search } from "../../components/search/search";
const { Header, Sider, Content } = Layout;

const MyLayOut = () => {
  const [collapsed, setCollapsed] = useState(false);
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
        <NavLink to="/codelab/study">
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
    <Layout className="layout">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="layout__background d-md-none"
      >
        {collapsed === false ? <Logo /> : <LogoOnly />}
        <Menu theme={"#eeeee"} mode="inline" items={menuItems} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
          }}
        >
          <div className="header__wrap">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <div className="header__action">
              <Search></Search>
              <div className="header__notification">
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/notification.svg`}
                  alt=""
                  className="header__notification--icon"
                />
                <span className="header__number--notification">1</span>
              </div>
              <div className="header__avatar">
                <img
                  src={`${process.env.PUBLIC_URL}/images/layout/avatar.png`}
                  alt=""
                  className="header__avatar--image"
                />
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
      </Layout>
    </Layout>
  );
};

export default MyLayOut;
