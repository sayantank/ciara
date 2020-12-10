import React from "react";
import styled from "styled-components";
import { FaInstagram, FaFacebook } from "react-icons/fa";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <>
      <Container>
        <Column>
          <ImageWrapper>
            <Img src="/images/ciara-land-new.png" alt="Ciara Heights" />
            <Img src="/images/landlaunch-land.png" alt="Ciara Heights" />
          </ImageWrapper>
        </Column>
        <Column>
          <ContentWrapper>
            <Title>CIARA OFFICE</Title>
            <TextBlock>
                <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/107+Elm+Park+Dr,+Hoppers+Crossing+VIC+3029,+Australia/@-37.8720718,144.7188024,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad688e84c155197:0x65f075a705e6ab12!8m2!3d-37.8720761!4d144.7209964"
              >
                <Text>107, Elm Park Drive, Hoppers Crossing VIC 3029</Text>
              </a>
            </TextBlock>
          </ContentWrapper>
          <ContentWrapper>
            <Title>LOCATION</Title>
            <TextBlock>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/maps/place/65+Brendan+Rd,+Greenvale+VIC+3059,+Australia/@-37.6316007,144.887964,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad650c470983a3b:0x2da6393016f723e1!8m2!3d-37.631605!4d144.890158"
              >
                <Text>65, Brendan Rd, Greenvale VIC 3059</Text>
              </a>
              
            </TextBlock>
          </ContentWrapper>
        </Column>
        <Column style={{ alignItems: "center" }}>
          <ContentWrapper style={{ alignItems: "center" }}>
            <Title>CONTACT</Title>
            <TextBlock>
              <Text>
                <b>Jag</b>
              </Text>
              <Text>Estate Manager</Text>
              <Text>
                <a href="tel:+61412931984">P. +61 412 931 984</a>
              </Text>
              <Text>
                <a href="mailto:jag@maaxgroup.com.au">jag@maaxgroup.com.au</a>
              </Text>
            </TextBlock>
            {/* <TextBlock>
              <Text>Prashansa Prashar</Text>
              <Text>Sales Consultant</Text>
              <Text>
                <a href="tel:+61400078591">P. +61 400 078 591</a>
              </Text>
              <Text>
                <a href="mailto:prashansa@ciaraheights.com.au">
                  prashansa@ciaraheights.com.au
                </a>
              </Text>
            </TextBlock> */}
          </ContentWrapper>
          {/* <Divider width="64px" />
          <ContentWrapper>
            
          </ContentWrapper> */}
        </Column>
        <Column style={{ alignItems: "center" }}>
          <ContentWrapper>
            <Title>CONTACT</Title>

            <TextBlock>
              <Text>
                <b>Prashansa Prashar</b>
              </Text>
              <Text>Sales Consultant</Text>
              <Text>
                <a href="tel:+61400078591">P. +61 400 078 591</a>
              </Text>
              <Text>
                <a href="mailto:prashansa@ciaraheights.com.au">
                  prashansa@ciaraheights.com.au
                </a>
              </Text>
            </TextBlock>
          </ContentWrapper>
          {/* <Divider width="64px" />
          <ContentWrapper>
            
          </ContentWrapper> */}
        </Column>
      </Container>
      <SocialContainer>
        <div className="wrapper">
          <a
            href="https://www.instagram.com/ciaraheightsgreenvale/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IG />
          </a>
          <a
            href="https://www.facebook.com/ciaraheightsgreenvale/?ref=py_c"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FB />
          </a>
        </div>
      </SocialContainer>
      <FooterContainer>
        <p>
          &#169; Copright 2020. Ciara Heights Pty. Ltd.
          <br />
          Site by{" "}
          <a
            href="https://landlaunch.com.au"
            target="_blank"
            rel="noopener noreferrer"
          >
            LandLaunch
          </a>
        </p>
      </FooterContainer>
    </>
  );
};

const Img = styled.img`
  width: 60%;
  height: auto;
  margin-bottom: 32px;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 40%;
  }
`;

const IG = styled(FaInstagram)`
  height: 100%;
  width: auto;
  margin: 0px 16px;
  color: ${({ theme }) => theme.colors.gold};
`;

const FB = styled(FaFacebook)`
  height: 100%;
  width: auto;
  margin: 0px 16px;
  color: ${({ theme }) => theme.colors.gold};
`;

const SocialContainer = styled.div`
  width: 100%;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.blue};

  .wrapper {
    width: 30%;
    display: flex;
    justify-content: center;
    height: 100%;
  }
`;

const FooterContainer = styled.div`
  width: 100%;
  height: auto;
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

    a {
      text-decoration: none;
      color: white;
    }

    @media screen and (max-width: 1024px) {
      font-size: 0.8rem;
      line-height: 1rem;
    }
  }
`;

const Container = styled.div`
  padding: 36px;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.colors.blue};
  display: flex;

  @media screen and (max-width: 1024px) {
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

  @media screen and (max-width: 1024px) {
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

  @media screen and (max-width: 1024px) {
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
  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;

export default Footer;
