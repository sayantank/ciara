import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import { Divider } from "../Divider";
import FancyText from "../FancyText";
import FancyTitle, { SubHeader } from "../FancyTitle";
import StyledSection from "../StyledSection";

interface InterestProps {}

const Interest: React.FC<InterestProps> = ({}) => {
  return (
    <StyledSection margin="0px">
      <Container>
        <ContentWrapper2>
          <FancyTitle>
            EXPRESS YOUR
            <br />
            INTEREST
          </FancyTitle>
          <Divider width="48px" height="6px" />
          <SubHeader style={{ marginTop: "8px" }}>
            PLUNGE FOR THE IDEAL LIFE
          </SubHeader>
        </ContentWrapper2>
        <ContentWrapper>
          <Wrapper>
            <FancyText>
              A step to satisfy your quest for the lifestyle
              <br />
              you deserve begins now.
            </FancyText>
            <ButtonWrapper>
              <Link href="/contact">
                <GoldenButton>REGISTER NOW {">"}</GoldenButton>
              </Link>
            </ButtonWrapper>
          </Wrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 60px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: center;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }
`;

const ContentWrapper = styled.div`
  width: 50%;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  //align-items: center;

  @media screen and (max-width: 1024px) {
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

  @media screen and (max-width: 1024px) {
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
  margin-top: 24px;
  @media screen and (max-width: 1024px) {
    width: 200px;
  }
`;

export default Interest;
