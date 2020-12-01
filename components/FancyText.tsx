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
  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default FancyText;
