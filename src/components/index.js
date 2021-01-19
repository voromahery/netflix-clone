import react from "react";

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
