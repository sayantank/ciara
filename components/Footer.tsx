import React from "react";
import styled from "styled-components";
import { Divider } from "./Divider";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <Container>
      <Column>
        <ImageWrapper>
          <img
            src="/images/ciara-vertical.png"
            alt="Ciara Heights"
            style={{ width: "60%", height: "auto", marginTop: "-20px" }}
          />
          <img
            src="/images/designer.png"
            alt="Ciara Heights"
            style={{ width: "50%", height: "auto" }}
          />
        </ImageWrapper>
      </Column>
      <Column>
        <ContentWrapper>
          <Title>CIARA OFFICE</Title>
          <TextBlock>
            <Text>16 Madden Blvd, Tarneit</Text>
          </TextBlock>
        </ContentWrapper>
        <Divider width="64px" />
        <ContentWrapper>
          <Title>LOCATION</Title>
          <TextBlock>
            <Text>Dohertys & Tarneit Roads, Tarneit</Text>
          </TextBlock>
        </ContentWrapper>
      </Column>
      <Column>
        <ContentWrapper>
          <Title>CONTACT</Title>
          <TextBlock>
            <Text>Prashansa Prashar</Text>
            <Text>Sales Consultant</Text>
            <Text>P. 0400 078 591</Text>
            <Text>prashansa@ciaraheights.com.au</Text>
          </TextBlock>
        </ContentWrapper>
        <Divider width="64px" />
        <ContentWrapper>
          <TextBlock>
            <Text>Prashansa Prashar</Text>
            <Text>Sales Consultant</Text>
            <Text>P. 0400 078 591</Text>
            <Text>prashansa@ciaraheights.com.au</Text>
          </TextBlock>
        </ContentWrapper>
      </Column>
    </Container>
  );
};

const Container = styled.div`
  padding: 54px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
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
  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export default Footer;
