import React from "react";
import styled from "styled-components";

interface VideoButtonProps {
  image: string;
  text: string;
}

const VideoButton: React.FC<VideoButtonProps> = ({ image, text }) => {
  return (
    <Container>
      <ImageWrapper>
        <img
          src={`/images/${image}`}
          style={{ height: "100%", width: "auto" }}
          alt={image}
        />
      </ImageWrapper>
      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    margin-bottom: 18px;
    width: 50%;
  }
`;

const ImageWrapper = styled.div`
  height: 64px;
  width: auto;
  margin-bottom: 24px;
  @media screen and (max-width: 768px) {
    height: 36px;
    margin-bottom: 12px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
  font-size: 1.2rem;
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export default VideoButton;
