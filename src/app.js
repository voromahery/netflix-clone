import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import * as ROUTE from "./constants/routes";
import { Home, Signin, Signup, Browse } from "./pages";
import { useAuthListener } from "./hooks";
import { IsUserRedirect, ProtectedRoot } from "./hooks/helpers/routes";
export function App() {
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTE.BROWSE}
          path={ROUTE.SIGN_IN}
        >
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTE.BROWSE}
          path={ROUTE.SIGN_UP}
        >
          <Signup />
        </IsUserRedirect>
        <ProtectedRoot user={user} path={ROUTE.BROWSE}>
          <Browse />
        </ProtectedRoot>
        <IsUserRedirect
          user={user}
          loggedInPath={ROUTE.BROWSE}
          path={ROUTE.HOME}
        >
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}
