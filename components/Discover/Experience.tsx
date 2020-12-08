import React from "react";
import styled from "styled-components";
import { Divider } from "../Divider";
import FancyText from "../FancyText";
import FancyTitle, { SubHeader } from "../FancyTitle";
import StyledSection from "../StyledSection";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = ({}) => {
  return (
    <StyledSection>
      <Container>
        <FancyTitle size="2.4rem" align="center" padding="12px">
          EXPERIENCE THE GOOD LIFE AT GREENVALE
        </FancyTitle>
        <Divider width="120px" margin="36px" height="6px" />
        <SubHeader>LOCATION</SubHeader>
        <TextWrapper>
          <FancyText align="center">
            This estate has been carved in the gorgeous Greenvale where luxury
            and leisure embrace one another. Experience the plush comfort of
            modern living as it merges with the rich history that has shaped
            this land. From recreational recourses to learning avenues,
            community centres to the convenience of connectivity, here we
            facilitate the many moods of a contemporary lifestyle with absolute
            ease.{" "}
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
  padding: 24px;
  text-align: center;
`;

// const ButtonWrapper = styled.div`
//   min-width: 80%;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 36px 0px;
//   a {
//     width: 30%;
//     @media screen and (max-width: 1024px) {
//       width: 70%;
//     }
//   }
//   @media screen and (max-width: 1024px) {
//     flex-direction: column;
//     min-height: 160px;
//     margin: 24px 0px;
//     button {
//       width: 100%;
//     }
//   }
// `;

export default Experience;
