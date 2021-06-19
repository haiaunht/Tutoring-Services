import React from "react"
import { hot } from "react-hot-loader/root"
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom"
import "regenerator-runtime/runtime"

const App = props => {
  return (
      <BrowserRouter>
        <div>
          <div>
            <Switch>

            </Switch>
          </div>
        </div>
      </BrowserRouter>
  )
}
export default hot(App)
