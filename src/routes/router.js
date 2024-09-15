import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/404Page/pagenotfound";
import { HomePage } from "../pages/home/home";
import { ComingSoon } from "../pages/commingsoon/commingsoon";
import { HomePageLogin } from "../pages/home/homelogin";
import { Login } from "../pages/login/login";
import { SignUp } from "../pages/signUp/singup";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/codelab/" element={<HomePage />}></Route>
      <Route path="/codelab/home" element={<HomePage />}></Route>
      <Route path="/codelab/homelogin" element={<HomePageLogin />}></Route>
      <Route path="/codelab/studyplant" element={<ComingSoon />}></Route>
      <Route path="/codelab/courses" element={<ComingSoon />}></Route>
      <Route path="/codelab/flashcard" element={<ComingSoon />}></Route>
      <Route path="/codelab/blog" element={<ComingSoon />}></Route>
      <Route path="/codelab/labcode" element={<ComingSoon />}></Route>
      <Route path="/codelab/user" element={<ComingSoon />}></Route>
      <Route path="/codelab/mycourses" element={<ComingSoon />}></Route>
      <Route path="/codelab/login" element={<Login />}></Route>
      <Route path="/codelab/signup" element={<SignUp />}></Route>
      <Route path="/codelab/resetpassword" element={<ComingSoon />}></Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MyRoute;
