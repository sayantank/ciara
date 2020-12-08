import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import FancyText from "../FancyText";
import FancyTitle, { SubHeader } from "../FancyTitle";
import StyledSection from "../StyledSection";
import Slide from "react-reveal/Slide";
import Link from "next/link";
import HomeCarousel from "./HomeCarousel";
import { Divider } from "../Divider";

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
              <Divider width="48px" height="6px" />
              <TextWrapper>
                <SubHeader>ONE LOCATION TO FULFIL INFINITE DESIRES</SubHeader>
                <HiddenText>
                  A hub with quality and convenient marketplaces, educational
                  institutions, medical centres, transportation facilities and
                  reservoirs, Ciara Heights is positioned for perfection.
                </HiddenText>
              </TextWrapper>
              <ButtonWrapper>
                <Link href="/forsale">
                  <GoldenButton>MASTER PLAN {">"}</GoldenButton>
                </Link>
              </ButtonWrapper>
            </Wrapper>
          </Slide>
        </ContentWrapper>
        <ContentWrapper>
          <Slide right>
            <TextWrapper2>
              <FancyText>
                A hub with quality and convenient marketplaces, educational
                institutions, medical centres, transportation facilities and
                reservoirs, Ciara Heights is positioned for perfection.
              </FancyText>
            </TextWrapper2>
          </Slide>
        </ContentWrapper>
      </Container>
      <div
        style={{
          margin: "24px 0px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <HomeCarousel />
      </div>
    </StyledSection>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
    width: 90%;
    padding-left: 36px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  max-width: 90%;
  margin: 24px 0px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const HiddenText = styled(FancyText)`
  display: none;
  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const ButtonWrapper = styled.div`
  width: 300px;
  @media screen and (max-width: 1024px) {
    width: 200px;
  }
`;

export default IdealPlan;
