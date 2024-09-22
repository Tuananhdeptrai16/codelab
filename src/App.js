// The code was written by programmer Truong Tuan Anh
// Thanks for watching and sharing

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import MyLayOut from "./layouts/layout";
import StoreContext from "./db/context";
import { ComingSoon } from "./pages/commingsoon";
import LayOutLogin from "./layouts/layoutlogin";
import { Login } from "./pages/login";
import { SignUp } from "./pages/singup";
import { ResetPassword } from "./pages/resetpassword";

const AppContent = () => {
  const [page, setPage] = useState(false);
  const [homePageLogin, setHomePageLogin] = useState(true);
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(true);
  const [ResetPassWordPage, setResetPassWordPage] = useState(true);
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const location = useLocation();
  useEffect(() => {
    const validPaths = [
      "/codelab/home",
      "/codelab/studyplant",
      "/codelab/studyplant/frontEnd",
      "/codelab/studyplant/backEnd",
      "/codelab/blog",
      "/codelab/courses",
      "/codelab/flashcard",
      "/codelab/studyplant/frontEnd/flashcard_htmlcss",
      "/codelab/studyplant/frontEnd/flashcard_javascript",
      "/codelab/studyplant/frontEnd/flashcard_reactjs",
    ];
    const validPathsPageLogin = ["/codelab/", "/codelab/homelogin"];
    const validPathsLogin = ["/codelab/login"];
    const validPathsSignUp = ["/codelab/signup"];
    const validPathsResetPassword = ["/codelab/resetpassword"];

    validPathsSignUp.includes(location.pathname)
      ? setSignUp(true)
      : setSignUp(false);
    validPathsResetPassword.includes(location.pathname)
      ? setResetPassWordPage(true)
      : setResetPassWordPage(false);
    validPathsPageLogin.includes(location.pathname)
      ? setHomePageLogin(true)
      : setHomePageLogin(false);
    validPaths.includes(location.pathname) ? setPage(true) : setPage(false);
    validPathsLogin.includes(location.pathname)
      ? setLogin(true)
      : setLogin(false);
  }, [location]);
  return (
    <StoreContext.Provider value={{ location, theme, handleChangeTheme }}>
      {ResetPassWordPage ? (
        <ResetPassword></ResetPassword>
      ) : signUp ? (
        <SignUp></SignUp>
      ) : login ? (
        <Login></Login>
      ) : homePageLogin ? (
        <LayOutLogin />
      ) : page ? (
        <MyLayOut />
      ) : (
        <ComingSoon />
        // <PageNotFound />
      )}
    </StoreContext.Provider>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
