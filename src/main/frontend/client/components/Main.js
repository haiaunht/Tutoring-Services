import React, {useState} from "react";
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
import SignUp from "./Authentication/SignUp";
import CustomerPage from "./CustomerPage";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("info")))

  return (
    <BrowserRouter>
      <NavBar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <Switch>
        <Route exact path="/">
          {/*<Redirect to="/home" />*/}
          {loggedIn ? <CustomerPage /> : <HomePage />}
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
