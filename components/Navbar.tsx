import React from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { BiMenuAltRight, BiPhone } from "react-icons/bi";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { useState } from "react";

interface NavbarProps {
  curr: string;
}

const Navbar: React.FC<NavbarProps> = ({ curr }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Overlay isOpen={isOpen} onClick={toggle} />
      <Container>
        <Wrapper>
          <Link href="/contact">
            <MobileIcon>
              <BiPhone />
            </MobileIcon>
          </Link>
          <NavLink
            to="DISCOVER"
            href="/discover"
            active={curr === "/discover"}
          />
          <NavLink to="FOR SALE" href="/forsale" active={curr === "/forsale"} />
          <NavLink
            to="BUILDERS"
            href="/builders"
            active={curr === "/builders"}
          />
          <ImageWrapper>
            <img
              src="/images/clara-full.png"
              style={{ height: "100%", width: "auto", alignSelf: "center" }}
              alt="Clara Heights"
            />
          </ImageWrapper>
          <NavLink to="HOME" href="/" active={curr === "/"} />
          <NavLink to="ABOUT" href="/about" active={curr === "/about"} />
          <NavLink
            to="CONTACT US"
            href="/contact"
            active={curr === "/contact"}
          />
          <MobileIcon>
            <BiMenuAltRight onClick={toggle} />
          </MobileIcon>
        </Wrapper>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  position: fixed;
  background: ${({ theme }) => theme.colors.blue};
  height: 84px;
  z-index: 100;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    height: 64px;
  }
`;

const Wrapper = styled.ul`
  max-width: 80%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  height: 64px;
  width: auto;
  @media screen and (max-width: 768px) {
    height: 44px;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-self: flex-end;
    top: 0;
    left: 0;
    font-size: 1.8rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gold};
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  height: 100vh;
  width: 100vw;
  position: fixed;
  background: ${({ isOpen }) => (isOpen ? "rgba(0,0,0,0.5)" : "none")};
  transition: 0.3s ease-in;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 150;
`;

export default Navbar;
