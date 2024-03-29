import styled from "styled-components";

export const GoldenButton = styled.button<{
  size?: string;
  bg?: string;
  color?: string;
  width?: string;
}>`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.blue};
  width: ${({ width }) => (width ? width : "100%")};
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 8px 24px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    transform: scale(1.03);
  }

  &:focus {
    outline-width: 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    transition: all 0.2s ease-in-out;
    border-radius: 50px;
    &:hover {
      color: white;
    }

    &:focus {
      outline-width: 0;
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
`;

export const SubmitBtn = styled.button<{
  size?: string;
  bg?: string;
  color?: string;
  width?: string;
}>`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.blue};
  width: ${({ width }) => (width ? width : "100%")};
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 12px 18px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border-radius: 50px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    transform: scale(1.03);
  }

  &:focus {
    outline-width: 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 10px 12px;
  }
`;

export const SubmitBtn2 = styled.button<{
  size?: string;
  bg?: string;
  color?: string;
  width?: string;
}>`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.blue};
  width: 100%;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 12px 18px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-top: 48px;
  border-radius: 50px;

  &:hover {
    transform: scale(1.03);
  }

  &:focus {
    outline-width: 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
    padding: 10px 12px;
    margin-top: 24px;
  }
`;
