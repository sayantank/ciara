import React from "react";
import styled from "styled-components";

interface PlanProps {}

const Plan: React.FC<PlanProps> = ({}) => {
  return (
    <Section>
      <Container>
        <img
          src="/images/plan.png"
          alt="Ciara Height Plan"
          style={{ width: "100%", height: "auto", border: "5px solid #d3c48f" }}
        />
      </Container>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  padding: 144px 96px;
  padding-bottom: 0;
  @media screen and (max-width: 768px) {
    padding: 84px 12px;
    padding-bottom: 28px;
  }
`;

const Container = styled.div`
  width: 100%;
`;

export default Plan;
