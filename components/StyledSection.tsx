import React from "react";
import styled from "styled-components";

interface MainContainerProps {
  bg?: string;
}

const StyledSection: React.FC<MainContainerProps> = ({ children, bg }) => {
  return <Container bg={bg}>{children}</Container>;
};

const Container = styled.section<{ bg: string }>`
  width: 100%;
  padding: 36px 96px;
  margin: 54px 0px;
  background-color: ${({ bg, theme }) => (bg ? theme.colors[bg] : "none")};
  @media screen and (max-width: 768px) {
    padding: 24px 0px;
    margin: 14px 0px;
  }
`;

export default StyledSection;
