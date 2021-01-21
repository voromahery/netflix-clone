import React from "react";
import {
  Container,
  Input,
  Link,
  Text,
  Title,
  SubmitButton,
  ErrorMessage,
} from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.SubmitButton = function FormSubmitButton({ children, ...restProps }) {
  return <SubmitButton {...restProps}>{children}</SubmitButton>;
};

Form.ErrorMessage = function FormErrorMessage({ children, ...restProps }) {
  return <ErrorMessage {...restProps}>{children}</ErrorMessage>;
};
