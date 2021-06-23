import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "regenerator-runtime/runtime";

import NavBar from "./NavBar/NavBar.js";

const App = (props) => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch></Switch>
    </BrowserRouter>
  );
};
export default hot(App);
