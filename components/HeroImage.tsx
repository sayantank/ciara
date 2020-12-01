import React from "react";
import styled from "styled-components";

interface HeroImageProps {
  src: string;
  alt: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src, alt }) => {
  return (
    <HeroWrapper>
      <HeroImg src={src} alt={alt} />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  width: 100%;
  max-height: 840px;
  overflow-y: hidden;

  @media screen and (max-width: 768px) {
    height: 50vh;
    overflow-x: hidden;
  }
`;

const HeroImg = styled.img`
  height: auto;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: auto;
    height: 100%;
  }
`;

export default HeroImage;
