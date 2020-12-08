import React from "react";
import Link from "next/link";
import styled from "styled-components";

interface NavLinkProps {
  href: string;
  to: string;
  active?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, href, active }) => {
  return (
    <Container>
      <Link href={href} passHref>
        <StyledLink href={href}>{to}</StyledLink>
      </Link>
      <Underline active={active} />
    </Container>
  );
};

const Container = styled.li`
  padding: 8px;
  display: flex;
  flex-direction: column;
  margin-top: 6px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const StyledLink = styled.a`
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

const Underline = styled.div<{ active: boolean }>`
  width: 50%;
  margin: 0 auto;
  background: ${({ theme, active }) => (active ? theme.colors.gold : "none")};
  height: 3px;
  margin-top: 4px;
  /* border: ${({ active }) => (active ? "solid 2px" : "none")};
  border-color: ${({ theme }) => theme.colors.gold}; */
`;

export default NavLink;
