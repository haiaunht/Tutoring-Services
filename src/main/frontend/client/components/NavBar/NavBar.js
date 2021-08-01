import { set } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { setAppStyleToNone } from "../../utils/FetchData/HelperFunctions";
import LoggedIn from "../Authentication/LoggedIn";
import LoggedOut from "../Authentication/LoggedOut";

const NavBar = (props) => {
  // const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("info")))
  //
  // if (loggedIn) {
  // return (
  //
  // <Redirect to="/home" />; //????? need the navbar on top
  // );
  // }

  setAppStyleToNone();
  const [userInfo, setUserinfo] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [colorTheme, setColorTheme] = useState(
    localStorage.getItem("theme-color") || "light"
  );

  const changeTheme = (theme) => {
    theme === "dark"
      ? document.body.classList.add("dark-theme")
      : document.body.classList.remove("dark-theme");
  };

  const handleChangeTheme = (theme) => {
    setColorTheme(theme);
    localStorage.setItem("theme-color", theme);
    changeTheme(theme);
  };

  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const currentColorTheme = localStorage.getItem("theme-color");
    if (currentColorTheme) {
      setColorTheme(currentColorTheme);
      changeTheme(colorTheme);
    } else {
      setColorTheme("light");
    }
    return setColorTheme(localStorage.getItem("theme-color"));
  }, []);

  useEffect(() => {
    const changeBackgroundHeader = () => {
      window.scrollY >= 80 ? setScrollDown(true) : setScrollDown(false);
    };
    window.addEventListener("scroll", changeBackgroundHeader);
    return () => window.removeEventListener("scroll", changeBackgroundHeader);
  }, []);

  return (
    <header className={scrollDown ? "header scroll-header" : "header"}>
      <nav className="nav container">
        <Link to="/home" className="nav__logo">
          Astudy
        </Link>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <NavLink
                to="/home"
                className="nav__link"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/courses"
                className="nav__link"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/login"
                className="nav__link"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Sign in
              </NavLink>
            </li>
            {/* <li className="nav__item">
              <NavLink
                to="/signup"
                className="nav__link"
                activeClassName="active-link"
                onClick={closeMenu}
              >
                Try now
              </NavLink>
            </li> */}
          </ul>

          {colorTheme === "dark" ? (
            <div
              className="nav__change-theme"
              onClick={() => handleChangeTheme("light")}
            >
              <span className="nav__change-theme-name">Dark mode</span>
              <i className="far fa-sun nav__change-theme-icon"></i>
            </div>
          ) : (
            <div
              className="nav__change-theme"
              onClick={() => handleChangeTheme("dark")}
            >
              <span className="nav__change-theme-name">Dark mode</span>
              <i className="far fa-moon nav__change-theme-icon"></i>
            </div>
          )}

          <i
            className="fas fa-times nav__close"
            id="nav-close"
            onClick={handleToggleMenu}
          ></i>
        </div>

        <div className="nav__toggle" onClick={handleToggleMenu}>
          <i className="fas fa-th-large"></i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
