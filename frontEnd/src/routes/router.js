import React from "react";
import { Route, Routes } from "react-router-dom";
import { PageNotFound } from "../pages/pagenotfound";
import { HomePage } from "../pages/home";
import { ComingSoon } from "../pages/commingsoon";
import { StudyPlant } from "../pages/studyplant";
import { FrontEnd } from "../pages/studyfrontend";
import { BackEnd } from "../pages/studyBackEnd";
import { Blog } from "../pages/blog";
import { Courses } from "../pages/courses";
import { FlashCard } from "../pages/flashcard";
import { QuestionFlashCard } from "../pages/formflashcard";
import { Login } from "../pages/auth/login";
import { SignUp } from "../pages/auth/singup";
import { ResetPassword } from "../pages/auth/resetpassword";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/codelab/" element={<HomePage />}></Route>
      <Route path="/codelab/home" element={<HomePage />}></Route>
      <Route path="/codelab/studyplant" element={<StudyPlant />}></Route>
      <Route path="/codelab/studyplant/frontEnd" element={<FrontEnd />}></Route>
      <Route path="/codelab/studyplant/backEnd" element={<BackEnd />}></Route>
      <Route path="/codelab/blog" element={<Blog />}></Route>
      <Route path="/codelab/courses" element={<Courses />}></Route>
      <Route path="/codelab/flashcard" element={<FlashCard />}></Route>
      <Route path="/codelab/labcode" element={<ComingSoon />}></Route>
      <Route path="/codelab/user" element={<ComingSoon />}></Route>
      <Route path="/codelab/mycourses" element={<ComingSoon />}></Route>
      <Route path="/codelab/login" element={<Login />}></Route>
      <Route path="/codelab/signup" element={<SignUp />}></Route>
      <Route path="/codelab/resetpassword" element={<ResetPassword />}></Route>
      {/* Phan flash card  */}
      <Route
        path="/codelab/studyplant/frontEnd/flashcard_htmlcss"
        element={<QuestionFlashCard />}
      ></Route>
      <Route
        path="/codelab/studyplant/frontEnd/flashcard_reactjs"
        element={<QuestionFlashCard />}
      ></Route>
      <Route
        path="/codelab/studyplant/frontEnd/flashcard_javascript"
        element={<QuestionFlashCard />}
      ></Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default MyRoute;
