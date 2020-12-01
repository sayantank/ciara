import React from "react";
import StyledSection from "../StyledSection";
import styled from "styled-components";

interface ImageComponentProps {
  src: string;
  alt?: string;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
  return (
    <StyledSection>
      <ImageWrapper>
        <img src={src} alt={alt} style={{ width: "100%", height: "auto" }} />
      </ImageWrapper>
    </StyledSection>
  );
};

const ImageWrapper = styled.div`
  max-height: 540px;
  overflow-y: hidden;
`;

export default ImageComponent;
