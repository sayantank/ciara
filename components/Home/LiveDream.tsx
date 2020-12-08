import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import { Divider } from "../Divider";
import FancyText from "../FancyText";
import FancyTitle from "../FancyTitle";
import ResponsiveContainer from "../ResponsiveContainer";
import StyledSection from "../StyledSection";
import Fade from "react-reveal/Fade";

interface LiveDreamProps {}

const LiveDream: React.FC<LiveDreamProps> = ({}) => {
  return (
    <StyledSection>
      <Fade bottom>
        <ResponsiveContainer reverse={true}>
          <ContentWrapper>
            <FancyTitle color="blue">LIVE YOUR DREAM</FancyTitle>
            <Divider width="48px" height="6px" />
            <TextWrapper>
              <FancyText color="blue">
                A chance to discover the finest land ranging from 350m2 to
                448m2, where families rejoice in the lifestyle they always
                sought.
              </FancyText>
            </TextWrapper>
            <ButtonWrapper>
              <Link href="/forsale">
                <GoldenButton size="1.2rem">LAND FOR SALE {">"}</GoldenButton>
              </Link>
            </ButtonWrapper>
          </ContentWrapper>
          <ImageWrapper>
            <img
              src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607424375/ciara/images/Home_2.jpg"
              alt="house1"
              style={{ width: "100%", height: "auto" }}
            />
          </ImageWrapper>
        </ResponsiveContainer>
      </Fade>
    </StyledSection>
  );
};

const ImageWrapper = styled.div`
  margin-top: -20rem;
  width: 55%;
  border: solid 6px white;
  align-self: flex-end;
  z-index: 5;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 0;
    border: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  min-height: 360px;
  padding-right: 54px;
  padding-bottom: 48px;
  @media screen and (max-width: 1024px) {
    width: 80%;
    padding-top: 48px;
    padding-left: 36px;
  }

  /* @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 50%;
    padding-top: 0px;
    padding-right: 36px;
    margin-bottom: -48px;
  } */
`;

const TextWrapper = styled.div`
  max-width: 360px;
  margin-bottom: 36px;
`;

const ButtonWrapper = styled.div`
  width: 300px;
  @media screen and (max-width: 1024px) {
    width: 200px;
  }
`;

export default LiveDream;
