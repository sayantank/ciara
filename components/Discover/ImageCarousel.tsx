import React from "react";
import styled from "styled-components";
import StyledSection from "../StyledSection";
import makeCarousel from "react-reveal/makeCarousel";
import Slide from "react-reveal/Slide";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { SubHeader } from "../FancyTitle";
import { Divider } from "../Divider";
import ListItem from "./ListItem";

interface ImageCarouselProps {}

const ImageCarousel: React.FC<ImageCarouselProps> = ({}) => {
  return (
    <StyledSection>
      <MainContainer>
        <div style={{ width: "100%", marginTop: "12px" }}>
          <Carousel>
            <Slide right>
              <Wrapper>
                <ImageWrapper>
                  <img
                    src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425337/ciara/images/Discover_Slider_2.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                </ImageWrapper>

                <TextWrapper>
                  <SubHeader>LIFESTYLE</SubHeader>
                  <Divider width="48px" margin="12px" height="2px" />
                  <ul>
                    <ListItem>Greenvale Reservoir Park</ListItem>
                    <ListItem>Broadies Creek and Lake</ListItem>
                    <ListItem>Woodland Historic Park</ListItem>
                    <ListItem>Greenvale Recreation Reserve</ListItem>
                    <ListItem>Napoli Park</ListItem>
                  </ul>
                </TextWrapper>
              </Wrapper>
            </Slide>
            <Slide right>
              <Wrapper>
                <ImageWrapper>
                  <img
                    src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425335/ciara/images/Discover_Slider_1.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <SubHeader>EDUCATION</SubHeader>
                  <Divider width="48px" margin="12px" height="2px" />
                  <ul>
                    <ListItem>Greenvale Primary School</ListItem>
                    <ListItem>Aitken College</ListItem>
                    <ListItem>St. Carlo Borromeo Primary School</ListItem>
                    <ListItem>Greenvale Secondary </ListItem>
                    <ListItem>Roxburg Primary School & College</ListItem>
                  </ul>
                </TextWrapper>
              </Wrapper>
            </Slide>
            <Slide right>
              <Wrapper>
                <ImageWrapper>
                  <img
                    src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425339/ciara/images/Discover_Slider_3.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <SubHeader>MEDICAL</SubHeader>
                  <Divider width="48px" margin="12px" height="2px" />
                  <ul>
                    <ListItem>Greenvale Medical Centre</ListItem>
                    <ListItem>Barrymore Medical Centre</ListItem>
                    <ListItem>Roxburgh Park Superclinic</ListItem>
                  </ul>
                </TextWrapper>
              </Wrapper>
            </Slide>
            <Slide right>
              <Wrapper>
                <ImageWrapper>
                  <img
                    src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425342/ciara/images/Discover_Slider_4.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <SubHeader>SHOPPING</SubHeader>
                  <Divider width="48px" margin="12px" height="2px" />
                  <ul>
                    <ListItem>Greenvale Shopping Centre</ListItem>
                    <ListItem>Roxburg Village</ListItem>
                    <ListItem>Meadow Heights Shopping Centre</ListItem>
                    <ListItem>Gladstone Shopping Centre</ListItem>
                    <ListItem>DFO</ListItem>
                  </ul>
                </TextWrapper>
              </Wrapper>
            </Slide>
            <Slide right>
              <Wrapper>
                <ImageWrapper>
                  <img
                    src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425345/ciara/images/Discover_Slider_5.jpg"
                    style={{ width: "100%", height: "auto" }}
                  />
                </ImageWrapper>
                <TextWrapper>
                  <SubHeader>TRANSPORT</SubHeader>
                  <Divider width="48px" margin="12px" height="2px" />
                  <ul>
                    <ListItem>Bus Stop at Thornley Ct</ListItem>
                    <ListItem>Roxburg Train Station</ListItem>
                    <ListItem>Broadmeadows Train Station</ListItem>
                    <ListItem>Tullamarine Airport</ListItem>
                  </ul>
                </TextWrapper>
              </Wrapper>
            </Slide>
          </Carousel>
        </div>
      </MainContainer>
    </StyledSection>
  );
};

const CarouselUI = ({ position, handleClick, children }) => (
  <>
    <Container>{children}</Container>
    <ButtonWrapper>
      <Arrow onClick={handleClick} data-position={position - 1}>
        <Left />
      </Arrow>
      <Arrow onClick={handleClick} data-position={position + 1}>
        <Right />
      </Arrow>
    </ButtonWrapper>
  </>
);

const Carousel = makeCarousel(CarouselUI);

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  width: 60%;
  height: auto;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  width: 100%;
  height: 450px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 540px;
  }
`;

// const Container = styled.div`
//   width: 100%;
//   border: 1px solid red;
//   display: flex;
//   flex-direction: column;
// `;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const TextWrapper = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 28px;
  display: flex;
  flex-direction: column;
  height: 450px;
  ul {
    list-style-type: none;
    li {
      margin-bottom: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: auto;
    padding: 18px;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.blue};
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  z-index: 20;
  padding-right: 12px;
  margin-top: -32px;
  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 0;
  }
`;

const Arrow = styled.div`
  margin: 0px 8px;
  font-size: 1.4rem;
`;

const Left = styled(FaArrowCircleLeft)`
  color: ${({ theme }) => theme.colors.gold};
  height: 100%;
`;

const Right = styled(FaArrowCircleRight)`
  color: ${({ theme }) => theme.colors.gold};
`;

export default ImageCarousel;
