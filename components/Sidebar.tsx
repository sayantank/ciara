import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggle }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <CloseIcon>
        <GrClose onClick={toggle} />
      </CloseIcon>
      <MenuList>
        <li>
          <Link href="/discover" passHref>
            <StyledLink onClick={toggle}>DISCOVER</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/forsale" passHref>
            <StyledLink onClick={toggle}>FOR SALE</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/builders" passHref>
            <StyledLink onClick={toggle}>BUILDERS</StyledLink>
          </Link>
        </li>
        <div style={{ height: "48px" }} />
        <li>
          <Link href="/about" passHref>
            <StyledLink onClick={toggle}>ABOUT</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/contact" passHref>
            <StyledLink onClick={toggle}>CONTACT US</StyledLink>
          </Link>
        </li>
        <li>
          <Link href="/" passHref>
            <StyledLink onClick={toggle}>HOME</StyledLink>
          </Link>
        </li>
      </MenuList>
    </Wrapper>
  );
};

const Wrapper = styled.div<{ isOpen: boolean }>`
  height: 100%;
  min-width: 240px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  position: fixed;
  transition: 0.3s ease-in-out;
  z-index: 501;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  background: ${({ theme }) => theme.colors.gold};
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style-type: none;
  padding-right: 24px;

  li {
    margin-bottom: 12px;
  }
`;

const StyledLink = styled.a`
  color: ${({ theme }) => theme.colors.blue};
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
  font-weight: 700;
  transition: all 0.2s ease-in-out;
`;

const CloseIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  top: 0;
  right: 0;
  font-size: 1.4rem;
  cursor: pointer;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.blue};
`;

export default Sidebar;
