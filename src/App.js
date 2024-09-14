/*
    The code was written by programmer Truong Tuan Anh
    Thanks for watching and sharing
*/
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import MyLayOut from "./layouts/MyLayouts/layout";
import StoreContext from "./db/context";
import { PageNotFound } from "./pages/404Page/pagenotfound";

const AppContent = () => {
  const [page, setPage] = useState(true);
  const location = useLocation();
  useEffect(() => {
    const validPaths = ["/codelab", "/codelab/home"];
    if (validPaths.includes(location.pathname)) {
      setPage(true);
    } else {
      setPage(false);
    }
  }, [location]);

  return (
    <StoreContext.Provider value={{ location }}>
      {page === true ? <MyLayOut /> : <PageNotFound></PageNotFound>}
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
