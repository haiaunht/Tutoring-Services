import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LoggedIn from "../Authentication/LoggedIn";

const NavBar = ({ loggedIn, setLoggedIn }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [colorTheme, setColorTheme] = useState(
    localStorage.getItem("theme-color") || "light"
  );
  const [cartCount, setCartCount] = useState(localStorage.getItem("cartCount"))

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
    <header
      className={scrollDown ? "header scroll-header" : "header"}
      id="header"
    >
      <nav className="nav container">
        <Link to="/" className="nav__logo">
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
              {loggedIn ? (
                <LoggedIn setLoggedIn={setLoggedIn} />
              ) : (
                <Link to="/" className="nav__link" onClick={closeMenu}>
                  Sign in
                </Link>
              )}
            </li>
            <li className="nav__item">
              <NavLink
                  to="/cart"
                  className="nav__link"
                  activeClassName="active-link"
                  onClick={closeMenu}
              >
                <i className="fas fa-shopping-cart"><span id="cartCount">{cartCount}</span></i>
              </NavLink>
            </li>
          </ul>

          {colorTheme === "dark" ? (
            <div
              className="nav__change-theme"
              onClick={() => handleChangeTheme("light")}
              id="nav__change-theme"
            >
              <span className="nav__change-theme-name">Dark mode</span>
              <i className="far fa-sun nav__change-theme-icon"></i>
            </div>
          ) : (
            <div
              className="nav__change-theme"
              onClick={() => handleChangeTheme("dark")}
              id="nav__change-theme"
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
