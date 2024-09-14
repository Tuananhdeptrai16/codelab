/*
    The code was written by programmer Truong Tuan Anh
    Thanks for watching and sharing
*/
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import MyLayOut from "./layouts/MyLayouts/layout";
import StoreContext from "./db/context";
import { ComingSoon } from "./pages/commingsoon/commingsoon";
import LayOutLogin from "./layouts/MyLayouts/layoutlogin";

const AppContent = () => {
  const [page, setPage] = useState(false);
  const [pageLogin, setPageLogin] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const validPaths = ["/codelab/home"];
    const validPathsPageLogin = ["/codelab/", "/codelab/homelogin"];
    validPathsPageLogin.includes(location.pathname)
      ? setPageLogin(true)
      : setPageLogin(false);
    validPaths.includes(location.pathname) ? setPage(true) : setPage(false);
  }, [location]);
  console.log(pageLogin);
  return (
    <StoreContext.Provider value={{ location }}>
      <StoreContext.Provider value={{ location }}>
        {pageLogin ? <LayOutLogin /> : page ? <MyLayOut /> : <ComingSoon />}
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
