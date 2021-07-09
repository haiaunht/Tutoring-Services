import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import "regenerator-runtime/runtime";

import Main from "./Main";
import PageNotFound from "./PageNotFound/PageNotFound";

const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/404" component={PageNotFound} />
        <Route path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  );
};

export default hot(App);
