import React from "react";
import styled from "styled-components";

interface MainContainerProps {
  bg?: string;
  margin?: string;
}

const StyledSection: React.FC<MainContainerProps> = ({
  children,
  bg,
  margin,
}) => {
  return (
    <Container bg={bg} margin={margin}>
      {children}
    </Container>
  );
};

const Container = styled.section<{ bg: string; margin: string }>`
  width: 100%;
  padding: 36px 96px;
  margin-top: ${({ margin }) => (margin ? `${margin}` : "54px")};
  background-color: ${({ bg, theme }) => (bg ? theme.colors[bg] : "none")};

  .map-responsive {
    overflow: hidden;

    padding-bottom: 56.25%;

    position: relative;

    height: 0;
  }

  .map-responsive iframe {
    left: 0;

    top: 0;

    height: 100%;

    width: 100%;

    position: absolute;
  }

  @media screen and (max-width: 1024px) {
    padding: 24px 0px;
    margin: 14px 0px;
  }
`;

export default StyledSection;
