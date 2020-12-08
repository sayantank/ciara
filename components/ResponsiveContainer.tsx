import React from "react";
import styled from "styled-components";

interface ResponsiveContainerProps {
  reverse?: boolean;
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  reverse,
}) => {
  return <Container reverse={reverse}>{children}</Container>;
};

const Container = styled.div<{ reverse: boolean }>`
  display: flex;
  height: auto;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  }
`;

export default ResponsiveContainer;
