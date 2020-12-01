import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import FancyText from "../FancyText";
import FancyTitle from "../FancyTitle";
import ResponsiveContainer from "../ResponsiveContainer";
import StyledSection from "../StyledSection";

interface InterestProps {}

const Interest: React.FC<InterestProps> = ({}) => {
  return (
    <StyledSection>
      <ResponsiveContainer>
        <ContentWrapper2>
          <FancyTitle>EXPRESS YOUR INTEREST</FancyTitle>
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
      </ResponsiveContainer>
    </StyledSection>
  );
};

const ContentWrapper = styled.div`
  width: 50%;
  min-height: 360px;
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
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

const ContentWrapper2 = styled(ContentWrapper)`
  padding-left: 96px;
  width: 50%;
  padding-right: 12px;
  @media screen and (max-width: 768px) {
    max-width: 320px;
    padding-left: 36px;
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
