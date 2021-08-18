import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoggedIn = ({ setLoggedIn }) => {
  const handleSignOut = (e) => {
    e.preventDefault();
    setLoggedIn(false);
    localStorage.removeItem("userId");
    localStorage.removeItem("info");
    localStorage.removeItem("username");
  };

  const [test, setTest] = useState(Boolean(localStorage.getItem("info")));
  if (test) {
    console.log("HERE " + localStorage.getItem("info"));
  }

  return (
    <Link to="/" className="nav__link" onClick={handleSignOut}>
      Sign out
    </Link>
  );
};

export default LoggedIn;
