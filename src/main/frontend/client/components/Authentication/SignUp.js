import React, { useState, useEffect } from "react";
import _ from "lodash";
import Error from "../Error";

const SignUp = (props) => {
  const [userRegister, setUserRegister] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    roleId: 3,
  });

  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState(null);

  const addNewRegistration = async (userRegister) => {
    let formPayload = userRegister;
    formPayload.role = { id: 3, name: "User", description: "User" };
    try {
      const response = await fetch("/api/v1/users/new-user", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        console.log("New user added successfully!");
        setSuccess("Thank you for register with us!");
      } else {
        setErrors("Username or email are already existed");
      }
    } catch (err) {
      console.error("Error in post new user!");
    }
  };

  const handleChange = (event) => {
    setUserRegister({
      ...userRegister,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRegister = { ...userRegister, role: { name: "User" } };
    addNewRegistration(newRegister);
    console.log(errors);
  };

  return (
    <div className="sign-up-page">
      <form onSubmit={handleSubmit} autoComplete="off">
        <input
          type="text"
          placeholder="Full Name"
          onChange={handleChange}
          value={userRegister.fullName}
          name="fullName"
        />
        <input
          type="text"
          placeholder="Username"
          onChange={handleChange}
          value={userRegister.username}
          name="username"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={userRegister.email}
          name="email"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={userRegister.password}
          name="password"
        />
        {/* <input type="password" placeholder="Repeat Password" /> */}
        <button type="submit">Sign Up</button>
        <p className="term-text">
          By creating an account you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </form>
    </div>
  );
};

export default SignUp;
