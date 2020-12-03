import React from "react";
import styled from "styled-components";
import { Divider } from "./Divider";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <Container>
        <Column>
          <ImageWrapper>
            <img
              src="/images/ciara-vertical.png"
              alt="Ciara Heights"
              style={{ width: "50%", height: "auto", marginTop: "-20px" }}
            />
            <img
              src="/images/landlaunch.png"
              alt="Ciara Heights"
              style={{ width: "40%", height: "auto", marginTop: "20px" }}
            />
          </ImageWrapper>
        </Column>
        <Column>
          <ContentWrapper>
            <Title>CIARA OFFICE</Title>
            <TextBlock>
              <Text>107, Elm Park Drive, Hoppers Crossing VIC 3029</Text>
            </TextBlock>
          </ContentWrapper>
          <Divider width="64px" />
          <ContentWrapper>
            <Title>LOCATION</Title>
            <TextBlock>
              <Text>65, Brendan Rd, Greenvale VIC 3059</Text>
            </TextBlock>
          </ContentWrapper>
        </Column>
        <Column>
          <ContentWrapper>
            <Title>CONTACT</Title>
            <TextBlock>
              <Text>Jag</Text>
              <Text>Sales Consultant</Text>
              <Text>
                <a href="tel:+61412931984">P. +61 412 931 984</a>
              </Text>
              <Text>
                <a href="mailto:jag@maaxgroup.com.au">jag@maaxgroup.com.au</a>
              </Text>
            </TextBlock>
          </ContentWrapper>
          <Divider width="64px" />
          <ContentWrapper>
            <TextBlock>
              <Text>Prashansa Prashar</Text>
              <Text>Sales Consultant</Text>
              <Text>
                <a href="tel:+610400078591">P. 0400 078 591</a>
              </Text>
              <Text>
                <a href="mailto:prashansa@ciaraheights.com.au">
                  prashansa@ciaraheights.com.au
                </a>
              </Text>
            </TextBlock>
          </ContentWrapper>
        </Column>
      </Container>
      <FooterContainer>
        <p>
          Copright 2020. All Rights Reserved <br /> Designed by Click Flick
          Digital
        </p>
      </FooterContainer>
    </>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 12px;
  p {
    color: white;
    font-size: 1rem;
    text-align: center;
    line-height: 1.3rem;

    @media screen and (max-width: 768px) {
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }
`;

const Container = styled.div`
  padding: 54px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 36px;
  }
`;

const Column = styled.div`
  width: 30%;
  margin: 0 9px;
  display: flex;
  flex-direction: column;
  //align-items: center;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
    height: auto;
    margin-bottom: 36px;
    align-items: center;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const TextBlock = styled.div`
  margin: 12px 0px 24px;
`;

const Text = styled.p`
  color: white;
  font-size: 1rem;

  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export default Footer;
