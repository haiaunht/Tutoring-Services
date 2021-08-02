import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import HomePage from "./HomePage";
import CoursesList from "./CoursesList";
import Contact from "./Contact";
import Login from "./Authentication/Login";
import AllCoursesList from "./AllCoursesList";
import Footer from "./Footer/Footer";
import CourseShow from "./CourseShow";
import InstructorsList from "./InstructorsList";
import InstructorShow from "./InstructorShow";
import CustomerPage from "./CustomerPage";
import { ScrollTop } from "./ScrollTop/ScrollTop";
import { ScrollRestoration } from "./ScrollTop/ScrollRestoration";
import { LoginForm } from "./LoginForm/LoginForm.js";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("info"))
  );
  const [userWithId, setUserWithId] = useState(localStorage.getItem("userId"));

  return (
    <BrowserRouter>
      <ScrollRestoration />
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route exact path="/">
          {loggedIn ? (
            <CustomerPage userWithId={userWithId} />
          ) : (
            <LoginForm loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
          )}
        </Route>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/:categoryName/courses" component={CoursesList} />
        <Route exact path="/courses/" component={AllCoursesList} />
        <Route exact path="/courses/:courseName" component={CourseShow} />
        <Route exact path="/instructors/all" component={InstructorsList} />
        <Route
          exact
          path="/instructors/:instructorId"
          component={InstructorShow}
        />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
      <ScrollTop />
    </BrowserRouter>
  );
};
export default Main;
