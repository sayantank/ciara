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
            <Button>GAAGE DEVELOPMENTS</Button>
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
              src="/images/gaage.png"
              alt="Gaage Developments"
              style={{ width: "100%", height: "auto" }}
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
            <FancyTitle>MARKETING PARTNER</FancyTitle>
            <Divider height="4px" margin="36px" width="180px" />
            <Button>LAND LAUNCH</Button>
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
  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0;
  }
`;

const Button = styled.div`
  font-size: 1.2rem;
  background-color: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.blue};
  width: 50%;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  padding: 12px 18px;
  border-radius: 50px;
  text-align: center;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: white;
    transform: scale(1.03);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 8px 12px;
    width: 70%;
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
