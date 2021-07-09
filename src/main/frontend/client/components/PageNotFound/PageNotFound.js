import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const appContainer = document.getElementById("app");
  appContainer.style.cssText += `width: 100%;
  perspective: 1000px;
  height:100%;
  display: flex;
  justify-content:center;
  align-items: center;
  background: #cdaeac url(../images/p404.png)`;

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
          <Link to="/">
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
