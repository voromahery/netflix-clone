import React, { useState } from "react";
import HeaderContainer from "../containers/header";
import Form from './../components/form/index';

export default function Signin() {
  const [error, setError] = useState("");
  
  return (
    <div>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign in</Form.Title>
          {error && <Form.Error></Form.Error>}
        </Form>
      </HeaderContainer>
    </div>
  );
}
