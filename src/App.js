// The code was written by programmer Truong Tuan Anh
// Thanks for watching and sharing

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import MyLayOut from "./layouts/layout";
import StoreContext from "./db/context";
import { ComingSoon } from "./pages/commingsoon";
import { ResetPassword } from "./pages/auth/resetpassword";
import { SignUp } from "./pages/auth/singup";
import { Login } from "./pages/auth/login";
import { AuthProvider } from "./context/authContext";
const AppContent = () => {
  const [page, setPage] = useState(false);
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
      "/codelab/",
      "/codelab/home",
      "/codelab/studyplant",
      "/codelab/studyplant/frontEnd",
      "/codelab/studyplant/backEnd",
      "/codelab/blog",
      "/codelab/courses",
      "/codelab/courses/details-course",
      "/codelab/flashcard",
      "/codelab/studyplant/frontEnd/flashcard_htmlcss",
      "/codelab/studyplant/frontEnd/flashcard_javascript",
      "/codelab/studyplant/frontEnd/flashcard_reactjs",
    ];
    const validPathsLogin = ["/codelab/login"];
    const validPathsSignUp = ["/codelab/signup"];
    const validPathsResetPassword = ["/codelab/resetpassword"];

    validPathsSignUp.includes(location.pathname)
      ? setSignUp(true)
      : setSignUp(false);
    validPathsResetPassword.includes(location.pathname)
      ? setResetPassWordPage(true)
      : setResetPassWordPage(false);
    validPaths.includes(location.pathname) ? setPage(true) : setPage(false);
    validPathsLogin.includes(location.pathname)
      ? setLogin(true)
      : setLogin(false);
  }, [location]);
  return (
    <AuthProvider>
      <StoreContext.Provider value={{ location, theme, handleChangeTheme }}>
        {ResetPassWordPage ? (
          <ResetPassword></ResetPassword>
        ) : signUp ? (
          <SignUp></SignUp>
        ) : login ? (
          <Login></Login>
        ) : page ? (
          <MyLayOut />
        ) : (
          <ComingSoon />
          // <PageNotFound />
        )}
      </StoreContext.Provider>
    </AuthProvider>
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
