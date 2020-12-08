import React from "react";
import styled from "styled-components";

interface FancyTitleProps {
  color?: string;
  font?: string;
  size?: string;
  align?: string;
  padding?: string;
}

const FancyTitle: React.FC<FancyTitleProps> = ({
  children,
  color,
  font,
  size,
  align,
  padding,
}) => {
  return (
    <H1 color={color} font={font} size={size} align={align} padding={padding}>
      {children}
    </H1>
  );
};

const H1 = styled.h1<{
  color: string;
  font: string;
  size: string;
  align: string;
  padding: string;
}>`
  font-size: ${({ size }) => (size ? size : "2.4rem")};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  font-family: "Ellen-Luff";
  font-weight: 400;
  letter-spacing: 2px;
  margin: ${({ padding }) => (padding ? `0px ${padding}` : "0px")};
  text-align: ${({ align }) => (align ? align : "left")};
  @media screen and (max-width: 1024px) {
    font-size: 1.4rem;
  }
`;

export const SubHeader = styled.h2<{ align?: string }>`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.blue};
  text-align: ${({ align }) => (align ? align : "left")};
  @media screen and (max-width: 1024px) {
    font-size: 1.1rem;
  }
`;

export default FancyTitle;
