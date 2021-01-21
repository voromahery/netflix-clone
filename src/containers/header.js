import React from "react";
import { Header } from "../components";
import * as ROUTE from "../constants/routes";

export default function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={ROUTE.HOME}
          src="/images/misc/logo.svg"
          alt="netflix"
        />
        <Header.ButtonLink to={ROUTE.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
