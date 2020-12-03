import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import FancyText from "../FancyText";
import FancyTitle, { SubHeader } from "../FancyTitle";
import StyledSection from "../StyledSection";

interface InterestProps {}

const Interest: React.FC<InterestProps> = ({}) => {
  return (
    <StyledSection>
      <Container>
        <ContentWrapper2>
          <FancyTitle>EXPRESS YOUR INTEREST</FancyTitle>
          <SubHeader style={{ marginTop: "8px" }}>
            PLUNGE FOR THE IDEAL LIFE
          </SubHeader>
        </ContentWrapper2>
        <ContentWrapper>
          <FancyText>
            A step to satisfy your quest for the lifestyle you deserve begins
            now.
          </FancyText>
          <ButtonWrapper>
            <GoldenButton>REGISTER NOW</GoldenButton>
          </ButtonWrapper>
        </ContentWrapper>
      </Container>
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
  width: 50%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 320px;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: auto;
    padding-left: 36px;
    margin-bottom: 16px;
  }
`;

const ContentWrapper2 = styled.div`
  width: 50%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    margin-top: 12px;
  }

  @media screen and (max-width: 768px) {
    width: 320px;
    align-items: flex-start;
    justify-content: flex-start;
    min-height: auto;
    padding-left: 36px;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

const ButtonWrapper = styled.div`
  width: 300px;
  margin-top: 24px;
  @media screen and (max-width: 768px) {
    width: 200px;
  }
`;

export default Interest;
