import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/HomePage";
import CoursesList from "../components/CoursesList";
import Contact from "../components/Contact";
import Login from "../components/Authentication/Login";
import AllCoursesList from "../components/AllCoursesList";
import Footer from "../components/Footer/Footer";
import CourseShow from "../components/CourseShow";
import InstructorsList from "../components/InstructorsList";
import InstructorShow from "../components/InstructorShow";
import SignUp from "../components/Authentication/SignUp";
import CustomerPage from "../components/CustomerPage";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("info"))
  );
  const [userWithId, setUserWithId] = useState(localStorage.getItem("userId"));

  return (
    <BrowserRouter>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route exact path="/">
          {/*<Redirect to="/home" />*/}
          {loggedIn ? <CustomerPage userWithId={userWithId} /> : <HomePage />}
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
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/404" />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default Main;
