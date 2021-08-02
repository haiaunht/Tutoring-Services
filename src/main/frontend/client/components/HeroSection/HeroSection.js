import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextAnimation } from "./TextAnimation";

export const HeroSection = () => {
  return (
    <section className="hero__section section container" id="hero">
      <div className="hero__section-cols--left">
        <h5>Your new way of learning</h5>
        <h1>Learn</h1>
        <TextAnimation />
        <h1>Astudy</h1>
        <h5>Spend time wisely and get productive.</h5>
        <Link to="/">
          <button className="button hero__section-button">
            7 Days Free Trial
          </button>
        </Link>
      </div>
      <div className="hero__section-cols--right">
        <img src="./images/development.svg" alt="hero-section-image" />
      </div>
    </section>
  );
};
