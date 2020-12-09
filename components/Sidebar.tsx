import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { BiPhone } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";

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
          <Link href="/" passHref>
            <StyledLink onClick={toggle}>HOME</StyledLink>
          </Link>
        </li>
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
          <Link href="/forsale" passHref>
            <StyledLink onClick={toggle}>BUILDERS</StyledLink>
          </Link>
        </li>
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
      </MenuList>
      <DetailWrapper>
        <IconWrapper className="top">
          <a href="https://www.google.com/maps/place/65+Brendan+Rd,+Greenvale+VIC+3059,+Australia/@-37.631605,144.8879693,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad650c470983a3b:0x2da6393016f723e1!8m2!3d-37.631605!4d144.890158">
            <FiMapPin />
            <p>Sales</p>
          </a>
        </IconWrapper>
        <IconWrapper>
          <a href="tel:1300-009-0000">
            <BiPhone />
            <p>1300-009-0000</p>
          </a>
        </IconWrapper>
      </DetailWrapper>
    </Wrapper>
  );
};

const DetailWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 24px;
  margin-top: 36px;
  .top {
    border-top: 3px solid #002951;
    padding-top: 24px;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  font-size: 2rem;
  padding-top: 10px;
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue};
    p {
      font-size: 1rem;
      margin-left: 8px;
      font-weight: 600;
    }
  }
`;

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
