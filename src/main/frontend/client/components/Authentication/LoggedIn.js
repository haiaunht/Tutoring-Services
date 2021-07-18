import React, {useState, useEffect} from "react";
import {Redirect} from "react-router-dom";

const LoggedIn = (props) => {
  const handleLogout = (e) => {
    e.preventDefault()
    props.setLoggedIn(false)
    localStorage.removeItem("info")
    localStorage.removeItem("username")
  }

  const [test, setTest] = useState(Boolean(localStorage.getItem("info")))
  if (test) {
    console.log("HERE " + localStorage.getItem("info"))
  }

  return (
      <div className="flex-row my-3 my-md-0 nav-link">
        <a className="btn btn-sm btn-success mr-2">
          {test ? "Hi! " + localStorage.getItem("info") : "Hi! " + `${props.userInfo}`}
        </a>
        <button onClick={handleLogout} className="btn btn-sm btn-secondary">
          Sign Out
        </button>
      </div>
  )
}

export default LoggedIn