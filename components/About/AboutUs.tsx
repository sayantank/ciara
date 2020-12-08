import React from "react";
import styled from "styled-components";
import { Divider } from "../Divider";
import FancyText from "../FancyText";
import FancyTitle from "../FancyTitle";
import StyledSection from "../StyledSection";

interface AboutUsProps {}

const AboutUs: React.FC<AboutUsProps> = ({}) => {
  return (
    <StyledSection>
      <Container>
        <FancyTitle>ABOUT US</FancyTitle>
        <Divider width="120px" margin="36px" height="6px" />
        <TextWrapper>
          <FancyText align="center">
            Ciara Heights is a truly mesmerizing boutique estate situated close
            to the cascading Greenvale Reservoir Park. The canvas of this
            premium land in Greenvale has been both, painted by Mother Nature
            and crafted by our experts. Presenting to you the opportunity of
            enhancing your life, Ciara Heights is all set to cater to your every
            need. Nestled amidst reservoirs and a lake, here you will find
            yourself taking idyllic walks to active runs. Instrumental
            facilities such as medical centres and shopping hubs are your
            neighbours in this estate land that seeks to deliver on your every
            demand. Additionally, the presence of leading primary schools to
            colleges make this an ideal pick for families looking to lay down
            their roots for a long time. And, should you need to go about the
            city of Melbourne, the well-connected transportation facilities will
            have you zipping away in no time.{" "}
          </FancyText>
          <FancyText align="center" style={{ marginTop: "36px" }}>
            Ciara Heights has been envisioned as an estate that’s comfortable
            and convenient to you in terms of all your requirements, that’s
            sleek and well-designed to satiate your aesthetic soul and that
            brings a touch of nature right at your doorstep. Come become a part
            of a community that helps you lead your life in the most enriched
            way there is. This project has been developed by Gaage Developments
            and marketed by Land Launch, read further to know more about them.
          </FancyText>
        </TextWrapper>
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

const TextWrapper = styled.div`
  width: 80%;
  margin-top: 8px;
  /* @media screen and (max-width: 1024px) {
    width: 95%;
  } */
`;

export default AboutUs;
