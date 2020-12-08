import React from "react";
import styled from "styled-components";
import StyledSection from "../StyledSection";
import Slide from "react-reveal/Slide";
import FancyText from "../FancyText";
import { Divider } from "../Divider";

interface IntroProps {}

const Intro: React.FC<IntroProps> = ({}) => {
  return (
    <StyledSection>
      <Slide bottom>
        <Container>
          <H1>ENRICHED LIVING, CIARA LIVING</H1>
          <Divider width="10%" />
          <TextWrapper>
            <FancyText color="blue" align="center">
              Ciara Heights is a truly mesmerizing boutique estate situated
              close to the cascading Greenvale Reservoir Park. The canvas of
              this premium land in Greenvale has been both, painted by Mother
              Nature and crafted by our experts. Presenting to you the
              opportunity of enhancing your life, Ciara Heights is all set to
              cater to your every need. Experiences for enriched living await
              you here.
            </FancyText>
          </TextWrapper>
        </Container>
      </Slide>
    </StyledSection>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  @media screen and (max-width: 1024px) {
    width: 70%;
  }
`;

const H1 = styled.h1`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.blue};
  font-family: "Poppins", sans-serif;
  font-weight: 800;
  letter-spacing: 4px;
  text-align: center;
  @media screen and (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;

const TextWrapper = styled.div`
  width: 60%;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  @media screen and (max-width: 1024px) and (min-width: 768px) {
    width: 80%;
  }
`;

export default Intro;
