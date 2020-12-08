import React, { useEffect } from "react";
import styled from "styled-components";
import NavLink from "./NavLink";
import { BiMenuAltRight, BiPhone } from "react-icons/bi";
import { FiMapPin } from "react-icons/fi";
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [isOpen]);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Overlay isOpen={isOpen} onClick={toggle} />
      <Container>
        <IconWrapper>
          <a href="tel:1300-009-0000">
            <BiPhone />
          </a>
          <a
            className="map"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.google.com/maps/place/65+Brendan+Rd,+Greenvale+VIC+3059,+Australia/@-37.631605,144.8879693,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad650c470983a3b:0x2da6393016f723e1!8m2!3d-37.631605!4d144.890158"
          >
            <FiMapPin />
          </a>
        </IconWrapper>
        <Wrapper>
          <Link href="tel:1300-009-0000">
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
            <Link href="/" passHref>
              <a>
                <img
                  src="/images/ciara-land-new.png"
                  style={{
                    height: "110%",
                    width: "auto",
                    alignSelf: "center",
                    marginTop: "-3px",
                    padding: "4px 0px",
                  }}
                  alt="Clara Heights"
                />
              </a>
            </Link>
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

const IconWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 12px;
  color: ${({ theme }) => theme.colors.gold};
  font-size: 2rem;
  margin-left: 24px;

  max-width: 200px;

  a {
    color: ${({ theme }) => theme.colors.gold};
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .map {
    font-size: 1.8rem;
    margin-left: 18px;
  }
  @media screen and (max-width: 1024px) and (min-width: 768px) {
    font-size: 1.6rem;
    .map {
      font-size: 1.4rem;
      margin-left: 18px;
    }
  }
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Container = styled.div`
  width: 100%;
  position: fixed;
  background: ${({ theme }) => theme.colors.blue};
  height: 84px;
  z-index: 100;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 1024px) {
    height: 64px;
  }
`;

const Wrapper = styled.ul`
  max-width: 60%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    max-width: 90%;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    max-width: 80%;
  }
`;

const ImageWrapper = styled.div`
  height: 64px;
  width: auto;
  img {
  }
  @media screen and (max-width: 1024px) {
    height: 44px;
  }
  @media screen and (max-width: 1024px) and (min-width: 1024px) {
    max-width: 10px;
  }
`;

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1024px) {
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
