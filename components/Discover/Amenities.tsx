import React from "react";
import styled from "styled-components";
import { Divider } from "../Divider";
import FancyText from "../FancyText";
import { SubHeader } from "../FancyTitle";
import StyledSection from "../StyledSection";

interface AmenitiesProps {}

const Amenities: React.FC<AmenitiesProps> = ({}) => {
  return (
    <StyledSection>
      <Container>
        <SubHeader>AMENITIES</SubHeader>
        <Divider height="2px" width="54px" />
        <TextWrapper>
          <FancyText align="center">
            Ciara Heights curates for you a community living experience like
            never before. Tucked away in the arms of nature, we wish to bring to
            you rejuvenation just a stone’s throw away from your home. An
            amalgamation of historic parks, lakes, reserves, learning avenues,
            community centres to the convenience of connectivity, make this a
            scenic sight that facilitates your lifestyle with absolute ease.
            Carved in the gorgeous Greenvale, here you will experience the plush
            comfort of modern living as it merges with the rich history that has
            shaped this land. Live here to live easier and live better.
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
  padding: 36px;
  padding-top: 0;
`;

export default Amenities;
