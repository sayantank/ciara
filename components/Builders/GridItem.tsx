import React from "react";
import styled from "styled-components";
import { GoldenButton } from "../Buttons";
import FancyTitle from "../FancyTitle";
import Fade from "react-reveal/Fade";

interface GridItemProps {
  title: string;
  src: string;
  alt: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, src, alt }) => {
  return (
    <Fade>
      <Container>
        <IconWrapper>
          <Icon src={src} alt={alt} />
        </IconWrapper>
        <FancyTitle size="1.8rem">{title}</FancyTitle>
        <ButtonWrapper>
          <GoldenButton width="80%">DOWNLOAD</GoldenButton>
        </ButtonWrapper>
      </Container>
    </Fade>
  );
};

const Container = styled.div`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;

  @media screen and (max-width: 768px) {
    min-height: 280px;
  }
`;

const IconWrapper = styled.div`
  width: 25%;
  margin-bottom: 18px;
`;

const Icon = styled.img`
  height: auto;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 60%;
  margin-top: 18px;
  text-align: center;
`;

export default GridItem;
