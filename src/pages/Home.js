import React from "react";
import JumbontronContainer from "../containers/jumbotron";
import FooterContainer from "../containers/footer";
import FaqsContainer from "../containers/faqs";
import HeaderContainer from "../containers/header";
import { OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm>
            <OptForm.Input placeholder="Email Address" />
            <OptForm.Button>Try it now!</OptForm.Button>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart.
            </OptForm.Text>
          </OptForm>
        </OptForm>
      </HeaderContainer>
      <JumbontronContainer></JumbontronContainer>
      <FaqsContainer></FaqsContainer>
      <FooterContainer></FooterContainer>
    </>
  );
}
