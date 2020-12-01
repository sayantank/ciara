import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import VideoButton from "./VideoButton";

interface PlayerProps {
  height?: string;
}

const Player: React.FC<PlayerProps> = ({ height }) => {
  return (
    <Container height={height}>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        height="100%"
        width="100%"
      />
      <VideoButtonContainer>
        <VideoButtonWrapper>
          <VideoButton image="architect.png" text="LAND FOR SALE" />
          <VideoButton image="file.png" text="VIEW BROCHURE" />
          <VideoButton image="menu.png" text="MASTER PLAN" />
          <VideoButton image="play-button.png" text="PLAY VIDEO" />
        </VideoButtonWrapper>
      </VideoButtonContainer>
    </Container>
  );
};

const Container = styled.div<{ height: string }>`
  width: 100%;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const VideoButtonContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  bottom: 0;
  background: rgba(0, 41, 81, 0.75);
  border-radius: 10px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

const VideoButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 24px 0px;
  margin: 0 auto;
  width: 75%;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 24px 0px 12px;
  }
`;

export default Player;
