import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import StyledSection from "../StyledSection";

interface ImageComponentProps {
  src: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = () => {
  return (
    <StyledSection>
      <ImageWrapper>
        <img
          src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607445882/ciara/images/Discover_Map.jpg"
          alt="Discover Map"
        />
      </ImageWrapper>
      {/* <div className="map-responsive">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.7484289671584!2d144.88796931531346!3d-37.63160497978583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad650c470983a3b%3A0x2da6393016f723e1!2s65%20Brendan%20Rd%2C%20Greenvale%20VIC%203059%2C%20Australia!5e0!3m2!1sen!2sin!4v1607326748982!5m2!1sen!2sin"
          width="800"
          height="600"
          frameBorder="0"
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
        />
      </div> */}
      <ButtonWrapper>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/place/65+Brendan+Rd,+Greenvale+VIC+3059,+Australia/@-37.631605,144.8879693,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad650c470983a3b:0x2da6393016f723e1!8m2!3d-37.631605!4d144.890158"
        >
          <GoldenButton>GOOGLE MAPS</GoldenButton>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://maps.apple.com/?address=65%20Brendan%20Road,%20Greenvale%20VIC%203059,%20Australia&ll=-37.631603,144.890152&q=65%20Brendan%20Road&_ext=EiYpA/G6jWvRQsAx4XECqk0cYkA5hRuVMUXQQsBBI6wVlqocYkBQBA%3D%3D"
        >
          <GoldenButton>APPLE MAPS</GoldenButton>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ul.waze.com/ul?place=ChIJOzqYcMRQ1moR4SP3FjA5pi0&ll=-37.63160500%2C144.89015800&navigate=yes"
        >
          <GoldenButton>WAZE MAPS</GoldenButton>
        </a>
      </ButtonWrapper>
    </StyledSection>
  );
};

const ImageWrapper = styled.div`
  height: 720px;
  width: auto;
  text-align: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
  }

  img {
    height: 100%;
    width: auto;
    @media screen and (max-width: 1024px) {
      width: 100%;
      height: auto;
    }
  }
`;

const ButtonWrapper = styled.div`
  min-width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 36px 0px;
  margin-top: 72px;
  a {
    width: 30%;
    @media screen and (max-width: 1024px) {
      width: 70%;
    }
  }
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    min-height: 160px;
    margin: 24px 0px;
    margin-top: 48px;
    button {
      width: 100%;
    }
  }
`;
export default ImageComponent;
