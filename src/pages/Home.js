import React from "react";
import JumbontronContainer from "../containers/jumbotron";
import FooterContainer from '../containers/footer'
import FaqsContainer from '../containers/faqs'

export default function Home() {
  return (
    <>
    <JumbontronContainer ></JumbontronContainer>
    <FaqsContainer></FaqsContainer>
    <FooterContainer></FooterContainer>
    </>
  );
}
