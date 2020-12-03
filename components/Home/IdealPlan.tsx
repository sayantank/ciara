import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import FancyText from "../FancyText";
import FancyTitle, { SubHeader } from "../FancyTitle";
import ResponsiveContainer from "../ResponsiveContainer";
import StyledSection from "../StyledSection";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

interface IdealPlanProps {}

const IdealPlan: React.FC<IdealPlanProps> = ({}) => {
  return (
    <StyledSection bg="gray">
      <Container>
        <ContentWrapper>
          <Slide left>
            <Wrapper>
              <FancyTitle>
                SCENICALLY SITUATED,
                <br />
                IDEALLY PLANNED
              </FancyTitle>
              <TextWrapper>
                <SubHeader>ONE LOCATION TO FULFIL INFINITE DESIRES</SubHeader>
                <HiddenText>
                  A hub with quality and convenient marketplaces, educational
                  institutions, medical centres, transportation facilities and
                  reservoirs, Ciara Heights is positioned for perfection.
                </HiddenText>
              </TextWrapper>
              <ButtonWrapper>
                <GoldenButton>MASTER PLAN</GoldenButton>
              </ButtonWrapper>
            </Wrapper>
          </Slide>
        </ContentWrapper>
        <ContentWrapper>
          <Slide right>
            <TextWrapper2>
              <FancyText align="center">
                A hub with quality and convenient marketplaces, educational
                institutions, medical centres, transportation facilities and
                reservoirs, Ciara Heights is positioned for perfection.
              </FancyText>
            </TextWrapper2>
          </Slide>
        </ContentWrapper>
      </Container>
      <ResponsiveContainer>
        <Fade>
          <ImageWrapper>
            <img
              src="/images/land.jpg"
              alt="land"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </ImageWrapper>
        </Fade>
      </ResponsiveContainer>
    </StyledSection>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;

  .react-reveal {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
    padding-left: 36px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  max-width: 90%;
  margin: 24px 0px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const HiddenText = styled(FancyText)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    margin-top: 12px;
  }
`;

const TextWrapper2 = styled.div`
  height: 100%;
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 300px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 54px;
`;

export default IdealPlan;
