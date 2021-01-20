import React from "react";
import { Accordion, OptForm } from "../components";
import faqsData from "../fixtures/faqs.json";

export default function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Question</Accordion.Title>
      <Accordion.Frame>
        {faqsData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.Header>{item.header}</Accordion.Header>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Frame>
      <OptForm>
        <OptForm.Input placeholder="Email Address" />
        <OptForm.Button>Try it now!</OptForm.Button>
        <OptForm.Text>Ready to watch? Enter your email to create or restart.</OptForm.Text>
      </OptForm>
    </Accordion>
  );
}
