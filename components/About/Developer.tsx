import React from "react";
import styled from "styled-components";
import { Divider } from "../Divider";
import FancyText from "../FancyText";
import FancyTitle from "../FancyTitle";
import StyledSection from "../StyledSection";

interface DeveloperProps {}

const Developer: React.FC<DeveloperProps> = ({}) => {
  return (
    <StyledSection>
      <Container>
        <ContentWrapper left={true}>
          <Wrapper left={true}>
            <FancyTitle>DEVELOPER</FancyTitle>
            <Divider height="4px" margin="36px" width="180px" />
            <ButtonWrapper>
              <a
                href="https://www.gaage.info/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>GAAGE DEVELOPMENTS {">"}</Button>
              </a>
            </ButtonWrapper>
            <TextWrapper>
              <FancyText>
                A subsidiary of the Maax Group of Companies, Gaage Developments
                is a full-scale development management firm that comprises of
                seasoned real estate experts. As a Project Management
                Consultancy belonging to a cutting edge group of companies, they
                deliver finesse even in the face of a dynamic market.
                Additionally, the Boutique Land Development Consultancy not only
                caters to creating quality estate lands but also evolves with
                the ever-changing needs and requirements. With their motto of
                “failing to plan is planning to fail”, the firm exhibits a
                meticulous level of planning and prompt resolution of issues.
                Their involvement through the stages of planning permit, VCAT,
                project planning, finance accruing and construction management
                makes Gaage a partner from conception to completion with their
                agile development technique.
              </FancyText>
            </TextWrapper>
          </Wrapper>
          <ImageWrapper left={false}>
            <img
              src="/images/gaage2.png"
              alt="Gaage Developments"
              style={{ width: "65%", height: "auto" }}
            />
          </ImageWrapper>
        </ContentWrapper>
        <ContentWrapper left={false} style={{ marginTop: "48px" }}>
          <ImageWrapper left={true}>
            <img
              src="/images/landlaunch2.png"
              alt="Land Launch"
              style={{ width: "80%", height: "auto" }}
            />
          </ImageWrapper>
          <Wrapper left={false}>
            <FancyTitle>MARKETING AND SELLING AGENT</FancyTitle>
            <Divider height="4px" margin="36px" width="180px" />
            <ButtonWrapper>
              <a
                href="https://landlaunch.com.au"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>LAND LAUNCH {">"}</Button>
              </a>
            </ButtonWrapper>
            <TextWrapper>
              <FancyText>
                LandLaunch is a world class project marketing company managing
                multitude of projects accoss melbourne . Under the aegis of
                industry leaders, Land Launch believes in meeting its goals
                while keeping its core values at heart. This includes their
                customer centric and innovative approaches, their endeavours for
                being inclusive to serve a broader market and most of all, the
                reliability the company strives to offer. These values go hand
                in hand with their passionate and earnest working methods
                wherein they seek to understand clients’ requirements as well as
                expectations. They're focused on following a steadfast system of
                delivering solutions to clients for garnering timely investment
                returns. This thereby sees them tranform into a dependable
                partner for the diverse needs of the esteem property developers,
                buyers and investors.
                <br />
                Visit{" "}
                <a
                  href="www.landlaunch.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.landlaunch.com.au
                </a>{" "}
                for further information.
              </FancyText>
            </TextWrapper>
          </Wrapper>
        </ContentWrapper>
      </Container>
    </StyledSection>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div<{ left?: boolean }>`
  width: 90%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    width: 80%;
    align-items: flex-start;
    flex-direction: ${({ left }) => (left ? "column" : "column-reverse")};
  }
`;

const Wrapper = styled.div<{ left: boolean }>`
  width: 60%;
  display: flex;
  flex-direction: column;
  padding-left: ${({ left }) => (left ? "0px" : "36px")};
  padding-right: ${({ left }) => (left ? "36px" : "0px")};
  /* a {
    text-decoration: none;
  } */
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const ButtonWrapper = styled.div`
  width: 60%;
  a {
    text-decoration: none;
  }
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;

const Button = styled.div`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.blue};
  //width: 100%;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 8px 18px;
  border-radius: 50px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
    transition: all 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    transform: scale(1.03);
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    padding: 8px 12px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`;

const ImageWrapper = styled.div<{ left: boolean }>`
  width: 40%;
  margin-top: 24px;
  padding-right: ${({ left }) => (left ? "36px" : "0px")};
  padding-left: ${({ left }) => (left ? "0px" : "36px")};
  text-align: center;
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

export default Developer;
