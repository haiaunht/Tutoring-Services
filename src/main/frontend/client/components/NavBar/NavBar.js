import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import { setAppStyleToNone } from "../../utils/HelperFunctions";
import LoggedIn from "../Authentication/LoggedIn";
import LoggedOut from "../Authentication/LoggedOut";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState()
  const [username, setUsername] = useState("")

  setAppStyleToNone();
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
              {loggedIn ? <LoggedIn setLoggedIn={setLoggedIn} username={username} /> : <LoggedOut setLoggedIn={setLoggedIn} getUsername={setUsername}/> }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
