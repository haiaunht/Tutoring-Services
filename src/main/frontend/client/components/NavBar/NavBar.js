import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link href="#" className="navbar-brand">
            <span className="text-success">AS</span>tudy
          </Link>

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
                <Link href="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/course" className="nav-link">
                  Courses
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <i className="fas fa-moon nav-link"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
