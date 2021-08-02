import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const LoggedOut = ({ setLoggedIn }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const fetchUser = async () => {
    try {
      const response = await fetch(`/api/v1/users/${username}/${password}`);

      if (response.ok) {
        setLoggedIn(true);
      } else {
        console.log("Invalid username / password");
      }

      const body = await response.json();
      console.log(body.id);
      localStorage.setItem("userId", body.id);
      localStorage.setItem("info", body.fullName);
      localStorage.setItem("username", body.username);
    } catch (err) {
      console.log("There was a problem");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUser();
  };

  return (
    <div className="sign-in-page">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign In</button>
        <p className="info-text">Forgot Password?</p>
      </form>
    </div>
  );
};

export default LoggedOut;
