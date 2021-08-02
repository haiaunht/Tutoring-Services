import React, { useEffect } from "react";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  const appContainer = document.getElementById("app");

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);
    appContainer.style.cssText += `width: 100%;
    height:100%;
    display: flex;
    justify-content:center;
    align-items: center;
    background: #cdaeac url(../images/p404.png)`;

    return () => {
      appContainer.style.cssText = "";
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  const handleMouseMove = (e) => {
      let xAxis = window.innerWidth / 2 - e.pageX,
        yAxis = window.innerHeight / 2 - e.pageY,
        notFoundWrapper = document.querySelector(".not-found-wrapper");

      appContainer.style.backgroundPositionX = xAxis + "px";
      appContainer.style.backgroundPositionY = yAxis + "px";
      notFoundWrapper.style.transform = `rotateY(${xAxis /
        25}deg) rotateX(${yAxis / 25}deg)`;
    },
    handleMouseEnter = () => {
      let notFoundWrapper = document.querySelector(".not-found-wrapper");
      notFoundWrapper.style.transition = "none";
    },
    handleMouseLeave = () => {
      let notFoundWrapper = document.querySelector(".not-found-wrapper");
      notFoundWrapper.style.transition = "0.5s ease";
      notFoundWrapper.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
  return (
    <>
      <div className="not-found-wrapper">
        <div className="cell">
          <span>O</span>
        </div>
        <div className="cell"></div>
        <div className="cell"></div>
        <div className="cell">
          <span>4</span>
        </div>
        <div className="cell">O</div>
        <div className="cell">
          <span>4</span>
        </div>
        <div className="cell"></div>
        <div className="cell">
          <Link to="/home">
            <i className="fas fa-home"></i>
          </Link>
        </div>
        <div className="cell">
          <span>O</span>
        </div>
        <div className="line"></div>
        <div id="info">Aha! You lost.</div>
      </div>
    </>
  );
};

export default PageNotFound;
