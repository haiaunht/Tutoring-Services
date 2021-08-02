import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LoggedOut from "../Authentication/LoggedOut";
import SignUp from "../Authentication/SignUp";

export const LoginForm = ({ loggedIn, setLoggedIn }) => {
  const [showSignInForm, setShowSignInForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);

  const handleSelectSignIn = () => {
    setShowSignInForm(true);
  };
  const handleSelectSignUp = () => {
    setShowSignUpForm(true);
  };

  const handleCancelButton = () => {
    setShowSignInForm(false);
    setShowSignUpForm(false);
  };

  useEffect(() => {
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none";

    return () => {
      document.getElementById("footer").style.display = "block";
      document.getElementById("header").style.display = "block";
    };
  }, []);

  return (
    <>
      <section className="sign-in__container section container">
        <div
          className={`sign-in ${
            showSignInForm
              ? "active-sign-in"
              : showSignUpForm
              ? "active-sign-up"
              : ""
          }`}
        >
          <div className="main-page">
            <div className="name">
              <img
                className="sign-in-image"
                src="./images/add_tasks.svg"
                alt="back-end"
              />
              {showSignInForm ? (
                <h1>Welcome Back!</h1>
              ) : showSignUpForm ? (
                <h1 style={{ marginBottom: "1rem" }}>Sign up</h1>
              ) : (
                <h1>Astudy</h1>
              )}
              {showSignInForm ? (
                <p>Glad to have you here</p>
              ) : showSignUpForm ? (
                <p>Your new way to learn</p>
              ) : (
                <p>Spend time wisely and get productive.</p>
              )}
            </div>

            <div className="form-btns">
              <button
                className="sign-up-btn"
                onClick={handleSelectSignUp}
                type="button"
              >
                Sign up
              </button>
              <button
                className="sign-in-btn"
                onClick={handleSelectSignIn}
                type="button"
              >
                Sign In
              </button>
              <Link to={"/home"} className="info-text">
                Skip
              </Link>
            </div>

            <div className="cancel" onClick={handleCancelButton}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          {showSignInForm && (
            <LoggedOut setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
          )}
          {showSignUpForm && <SignUp />}
        </div>
      </section>
    </>
  );
};

LoginForm.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  setLoggedIn: PropTypes.func.isRequired,
};
