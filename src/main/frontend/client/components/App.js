import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "regenerator-runtime/runtime";

import NavBar from "./NavBar/NavBar.js";
import HomePage from "./HomePage.js";
import CoursesList from "./CoursesList.js";
import Contact from "./Contact.js";
import Login from "./Login.js"
import AllCoursesList from "./AllCoursesList";

const App = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={HomePage}/>
        <Route exact path="/:categoryName/courses" component={CoursesList} />
        <Route exact path="/courses" component={AllCoursesList}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/404" />
      </Switch>
    </BrowserRouter>
  );
};
export default hot(App);
