import React from "react";
import styled from "styled-components";

interface FancyTitleProps {
  color?: string;
  font?: string;
  size?: string;
  align?: string;
}

const FancyTitle: React.FC<FancyTitleProps> = ({
  children,
  color,
  font,
  size,
  align,
}) => {
  return (
    <H1 color={color} font={font} size={size} align={align}>
      {children}
    </H1>
  );
};

const H1 = styled.h1<{
  color: string;
  font: string;
  size: string;
  align: string;
}>`
  font-size: ${({ size }) => (size ? size : "2.4rem")};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.blue};
  font-family: "Ellen-Luff";
  font-weight: 400;
  letter-spacing: 2px;
  text-align: ${({ align }) => (align ? align : "left")};
  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const SubHeader = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.colors.blue};

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export default FancyTitle;
