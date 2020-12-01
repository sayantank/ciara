import styled from "styled-components";

export const Divider = styled.div<{
  width?: string;
  height?: string;
  margin?: string;
}>`
  width: ${({ width }) => (width ? width : "100%")};
  background: ${({ theme }) => theme.colors.gold};
  height: ${({ height }) => (height ? height : "2px")};
  margin: ${({ margin }) => (margin ? `${margin} 0px` : "24px 0px")};
`;
