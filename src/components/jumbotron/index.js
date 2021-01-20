import React from "react";
import styled from "styled-components";
import {
  Item,
  Inner,
  Container,
  Title,
  SubTitle,
  Image,
  Pane,
} from "./styles/jumbotron";
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbontronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Title = function JumbontronTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbontronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbontronImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Jumbotron.Pane = function JumbontronPane({ children, ...restProps }) {
  return <Pane {...restProps}> {children}</Pane>;
};
