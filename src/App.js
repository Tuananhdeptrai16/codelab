// The code was written by programmer Truong Tuan Anh
// Thanks for watching and sharing

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import MyLayOut from "./layouts/MyLayouts/layout";
import StoreContext from "./db/context";
import { ComingSoon } from "./pages/commingsoon/commingsoon";
import LayOutLogin from "./layouts/MyLayouts/layoutlogin";
import { Login } from "./pages/login/login";
import { SignUp } from "./pages/signUp/singup";

const AppContent = () => {
  const [page, setPage] = useState(false);
  const [homePageLogin, setHomePageLogin] = useState(true);
  const [login, setLogin] = useState(true);
  const [signUp, setSignUp] = useState(true);

  const location = useLocation();
  useEffect(() => {
    const validPaths = ["/codelab/home"];
    const validPathsPageLogin = ["/codelab/", "/codelab/homelogin"];
    const validPathsLogin = ["/codelab/login"];
    const validPathsSignUp = ["/codelab/signup"];
    validPathsSignUp.includes(location.pathname)
      ? setSignUp(true)
      : setSignUp(false);
    validPathsPageLogin.includes(location.pathname)
      ? setHomePageLogin(true)
      : setHomePageLogin(false);
    validPaths.includes(location.pathname) ? setPage(true) : setPage(false);
    validPathsLogin.includes(location.pathname)
      ? setLogin(true)
      : setLogin(false);
  }, [location]);
  return (
    <StoreContext.Provider value={{ location }}>
      <StoreContext.Provider value={{ location }}>
        {signUp ? (
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
