import React, {useState} from "react";
import { NavLink } from "react-router-dom";

import { setAppStyleToNone } from "../../utils/HelperFunctions";
import LoggedIn from "../Authentication/LoggedIn";
import LoggedOut from "../Authentication/LoggedOut";

const NavBar = () => {
  const [loggedIn, setLoggedIn] = useState()

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
              {/*<li className="nav-item">*/}
              {/*  <NavLink*/}
              {/*    to="/login"*/}
              {/*    className="nav-link"*/}
              {/*    activeClassName="active"*/}
              {/*  >*/}
              {/*    Sign in*/}
              {/*  </NavLink>*/}
              {/*</li>*/}
              {/*<li className="nav-link">/</li>*/}
              {/*<li className="nav-item">*/}
              {/*  <NavLink*/}
              {/*    to="/signup"*/}
              {/*    className="nav-link"*/}
              {/*    activeClassName="active"*/}
              {/*  >*/}
              {/*    Sign Up*/}
              {/*  </NavLink>*/}
              {/*</li>*/}
              {/*<li className="nav-item">*/}
              {/*  <i className="fas fa-moon nav-link"></i>*/}
              {/*</li>*/}
              {loggedIn ? <LoggedIn setLoggedIn={setLoggedIn}/> : <LoggedOut setLoggedIn={setLoggedIn}/> }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
