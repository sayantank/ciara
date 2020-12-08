import styled from "styled-components";

// interface FancyTextProps {
//   color?: string;
//   align?: string;
// }

// const FancyText: React.FC<FancyTextProps> = ({ children, color, align }) => {
//   return (
//     <P color={color} align={align}>
//       {children}
//     </P>
//   );
// };

const FancyText = styled.p<{ color?: string; align?: string }>`
  font-size: 1.2rem;
  font-weight: 400;
  color: ${({ color, theme }) =>
    color ? theme.colors[color] : theme.colors.blue};
  text-align: ${({ align }) => (align ? align : "left")};
  font-family: "Poppins", sans-serif;
  line-height: 2rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.9rem;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${({ color, theme }) =>
      color ? theme.colors[color] : theme.colors.blue};
    font-weight: 600;
  }
`;

export default FancyText;
