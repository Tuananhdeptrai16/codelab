import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/404Page/pagenotfound";
import { HomePage } from "../pages/home/home";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/codelab" element={<HomePage />}></Route>
      <Route path="/codelab/home" element={<HomePage />}></Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MyRoute;
