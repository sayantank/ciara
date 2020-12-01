import React from "react";
import styled from "styled-components";
import { Divider } from "../Divider";
import FancyTitle from "../FancyTitle";
import StyledSection from "../StyledSection";
import GridItem from "./GridItem";

interface PortalGridProps {}

const PortalGrid: React.FC<PortalGridProps> = ({}) => {
  return (
    <StyledSection>
      <Container>
        <FancyTitle>THE BUILDERS PORTAL</FancyTitle>
        <Divider width="240px" margin="36px" height="4px" />
        <Grid>
          <GridItem
            src="/images/price-list.png"
            alt="price-list"
            title="Functional Layout Plans"
          />
          <GridItem
            src="/images/price-list.png"
            alt="price-list"
            title="Functional Layout Plans"
          />
          <GridItem
            src="/images/price-list.png"
            alt="price-list"
            title="Functional Layout Plans"
          />
          <GridItem
            src="/images/price-list.png"
            alt="price-list"
            title="Functional Layout Plans"
          />
          <GridItem
            src="/images/price-list.png"
            alt="price-list"
            title="Functional Layout Plans"
          />
          <GridItem
            src="/images/price-list.png"
            alt="price-list"
            title="Functional Layout Plans"
          />
        </Grid>
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

const Grid = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(480px, 1fr));
  grid-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
`;

export default PortalGrid;
