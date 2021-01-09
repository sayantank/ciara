import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";

interface DropNavLinkProps {
  to: string;
  active?: boolean;
}

const DropNavLink: React.FC<DropNavLinkProps> = ({ to, active }) => {
  const [show, setShow] = useState(false);
  //   const toggleShow = () => {
  //     setShow(!show);
  //   };
  return (
    <DropDownContainer onMouseLeave={() => setShow(false)}>
      <Container onMouseEnter={() => setShow(true)}>
        <StyledLink>{to}</StyledLink>
        <Underline active={active} />
      </Container>
      <DropContent className="drop-content" show={show}>
        <Link href="/land-for-sale">Land for Sale</Link>
      </DropContent>
    </DropDownContainer>
  );
};

const DropDownContainer = styled.li`
  position: relative;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Container = styled.div`
  padding: 8px;
  margin-top: 6px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledLink = styled.p`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.gold};
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.8rem;
  }
`;

const DropContent = styled.div<{ show: boolean }>`
  display: flex;
  position: absolute;
  opacity: ${({ show }) => (show ? "1" : "0")};
  top: ${({ show }) => (show ? "84px" : "-84px")};
  flex-direction: column;
  min-width: 160px;
  padding: 12px;
  z-index: -10;
  transition: opacity 0.2s ease-in-out;
  background-color: ${({ theme }) => theme.colors.gold};

  a {
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    font-weight: 600;

    &:hover {
      font-weight: 900;
    }
  }

  @media screen and (max-width: 1024px) {
    top: ${({ show }) => (show ? "64px" : "-64px")};
  }
`;

const Underline = styled.div<{ active: boolean }>`
  width: 50%;
  margin: 0 auto;
  background: ${({ theme, active }) => (active ? theme.colors.gold : "none")};
  height: 3px;
  margin-top: 4px;
  /* border: ${({ active }) => (active ? "solid 2px" : "none")};
  border-color: ${({ theme }) => theme.colors.gold}; */
`;

export default DropNavLink;
