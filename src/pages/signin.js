import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTE from "../constants/routes";
import HeaderContainer from "../containers/header";
import Form from "./../components/form/index";
import FooterContainer from "./../containers/footer";
import { FirebaseContext } from "./../context/firebase";

export default function Signin() {
  const { firebase } = useContext(FirebaseContext);
  const history = useHistory();
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignin = (event) => {
    event.preventDefault();
    firebase
      .aut()
      .signInWithEmailAndPassword(emailAddress, password)
      .then(() => {
        setEmailAddress("");
        setPassword("");
        setError("");
        history.pushState(ROUTE.BROWSE);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error></Form.Error>}

          <Form.Base onSubmit={handleSignin} method="POST">
            <Form.Input
              placeholder="EmailAddress"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>
            <Form.Text>
              New to Netflix?{" "}
              <Form.Link to={ROUTE.SIGN_UP}>Sign up now</Form.Link>
            </Form.Text>
            <Form.TextSmall>
              This page is protected by Google reCAPTCHA
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </div>
  );
}
