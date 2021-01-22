import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTE from "./constants/routes";
import {Home, Signin} from "./pages";
export function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTE.SIGN_IN}>
          <Signin />
        </Route>
        <Route path={ROUTE.SIGN_UP}>
          <p>I will be the sign up page</p>
        </Route>
        <Route path={ROUTE.BROWSE}>
          <p>I will be the browse page</p>
        </Route>
        <Route path={ROUTE.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
