import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { setAppStyleToNone } from "../../utils/FetchData/HelperFunctions";

import LoggedIn from "../Authentication/LoggedIn";
import LoggedOut from "../Authentication/LoggedOut";

const NavBar = (props) => {
  // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("info")))
  const [userInfo, setUserinfo] = useState("");

  setAppStyleToNone;
  //
  // if (loggedIn) {
  //   return (
  //       <Redirect to="/home" /> //????? need the navbar on top
  //   );
  // }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <NavLink to="/home" className="navbar-brand">
            <span className="text-success">AS</span>tudy
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link"
                  activeClassName="active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/courses"
                  className="nav-link"
                  activeClassName="active"
                >
                  Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className="nav-link"
                  activeClassName="active"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                {props.loggedIn ? (
                  <LoggedIn
                    setLoggedIn={props.setLoggedIn}
                    userInfo={userInfo}
                  />
                ) : (
                  <LoggedOut
                    setLoggedIn={props.setLoggedIn}
                    setUserinfo={setUserinfo}
                  />
                )}
              </li>
              <li>
                {!props.loggedIn ? (
                  <NavLink to="/signup" className="nav-link">
                    Sign Up
                  </NavLink>
                ) : null}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
