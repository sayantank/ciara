import React from "react";
import styled from "styled-components";
import { Divider } from "../Divider";
import FancyText from "../FancyText";
import FancyTitle from "../FancyTitle";
import ResponsiveContainer from "../ResponsiveContainer";
import StyledSection from "../StyledSection";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import { GoldenButton } from "../Buttons";

interface DreamHomeProps {}

const DreamHome: React.FC<DreamHomeProps> = ({}) => {
  return (
    <StyledSection>
      <Fade bottom fraction={0.3}>
        <ResponsiveContainer>
          <ImageWrapper>
            <img
              src="/images/house1.jpg"
              alt="house1"
              style={{ width: "100%", height: "auto" }}
            />
          </ImageWrapper>
          <ContentWrapper>
            <FancyTitle color="blue">DISCOVER YOUR DREAM HOME</FancyTitle>
            <Divider width="30%" />
            <TextWrapper>
              <FancyText color="blue">
                Embrace a touch of nature with an indulgence of the modern
                lifestyle.
              </FancyText>
            </TextWrapper>
            <ButtonWrapper>
              <Link href="/discover">
                <GoldenButton size="1.2rem">DISCOVER MORE</GoldenButton>
              </Link>
            </ButtonWrapper>
          </ContentWrapper>
        </ResponsiveContainer>
      </Fade>
    </StyledSection>
  );
};

const ImageWrapper = styled.div`
  width: 75%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  min-height: 360px;
  padding-left: 48px;
  padding-top: 96px;
  @media screen and (max-width: 768px) {
    width: 70%;
    padding-top: 36px;
    padding-left: 36px;
    margin-bottom: -48px;
  }
`;

const TextWrapper = styled.div`
  max-width: 320px;
  margin-bottom: 36px;
`;

const ButtonWrapper = styled.div`
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export default DreamHome;
