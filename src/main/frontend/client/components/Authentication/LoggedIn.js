import React, {useState, useEffect} from "react";

const LoggedIn = (props) => {
  return (
      <div className="flex-row my-3 my-md-0 nav-link"
           activeClassName="active">
        <a className="btn btn-sm btn-success mr-2">
          Welcome! {props.username}
        </a>
        <button onClick={() => props.setLoggedIn(false)} className="btn btn-sm btn-secondary">
          Sign Out
        </button>
      </div>
  )
}

export default LoggedIn