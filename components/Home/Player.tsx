import Link from "next/link";
import React from "react";
import styled from "styled-components";
import VideoButton from "./VideoButton";

interface PlayerProps {
  height?: string;
}

const Player: React.FC<PlayerProps> = ({ height }) => {
  return (
    <Container height={height}>
      {/* <ReactPlayer
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        height="100%"
        width="100%"
      /> */}
      <video loop autoPlay muted>
        <source
          src="https://res.cloudinary.com/nxmxnjxxn/video/upload/v1607454998/ciara/Ciara-Heights-Video.mp4"
          type="video/mp4"
        />
      </video>
      <VideoButtonContainer>
        <VideoButtonWrapper>
          <Link href="forsale" passHref>
            <a>
              <ImageWrapper>
                <img
                  src={`/images/architect.png`}
                  style={{ height: "100%", width: "auto" }}
                  alt="Land for Sale"
                />
              </ImageWrapper>
              <Text>LAND FOR SALE</Text>
            </a>
          </Link>
          <VideoButton image="file.png" text="VIEW BROCHURE" />
          <a
            href="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607423136/ciara/Ciara-Heights-Master-Plan.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageWrapper>
              <img
                src={`/images/menu.png`}
                style={{ height: "100%", width: "auto" }}
                alt="Brochure"
              />
            </ImageWrapper>
            <Text>MASTER PLAN</Text>
          </a>
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
  overflow-y: hidden;

  video {
    width: 100%;
    height: auto;
    @media screen and (max-width: 1024px) {
      height: 100%;
      width: auto;
    }
  }
`;

const VideoButtonContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  position: absolute;
  bottom: 48px;
  background: rgba(0, 41, 81, 0.75);
  border-radius: 10px;
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
    bottom: 24px;
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
  text-align: center;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    text-decoration: none;
    cursor: pointer;
    @media screen and (max-width: 1024px) {
      margin-bottom: 18px;
      width: 50%;
      justify-content: center;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 24px 0px 12px;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  height: 64px;
  width: auto;
  margin-bottom: 24px;
  @media screen and (max-width: 1024px) {
    height: 36px;
    margin-bottom: 12px;
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.gold};
  font-weight: 600;
  font-size: 1.2rem;
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
  }
`;

export default Player;
