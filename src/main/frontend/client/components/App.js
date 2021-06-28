import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "regenerator-runtime/runtime";

import NavBar from "./NavBar/NavBar";
import HomePage from "./HomePage";
import CoursesList from "./CoursesList";
import Contact from "./Contact";
import Login from "./Login";
import AllCoursesList from "./AllCoursesList";
import Footer from "./Footer/Footer";
import CourseShow from "./CourseShow";
import PageNotFound from "./PageNotFound";

const App = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/:categoryName/courses" component={CoursesList} />
        <Route exact path="/courses" component={AllCoursesList} />
        <Route exact path="/courses/:courseName" component={CourseShow} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/404" component={PageNotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};
export default hot(App);
