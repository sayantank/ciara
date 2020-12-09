import React from "react";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface HomeCarouselProps {}

const HomeCarousel: React.FC<HomeCarouselProps> = ({}) => {
  return (
    <MainContainer>
      <Carousel showArrows={true} showThumbs={false}>
        <Wrapper>
          <img
            src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425352/ciara/images/Home_Slider_1.jpg"
            style={{ width: "100%", height: "auto" }}
          />
          <Overlay />
          <p>Gellibrand Hill Summit</p>
        </Wrapper>
        <Wrapper>
          <img
            src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607425355/ciara/images/Home_Slider_2.jpg"
            style={{ width: "100%", height: "auto" }}
          />
          <Overlay />
          <p>Greenvale Reservoir Park</p>
        </Wrapper>
        <Wrapper>
          <img
            src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607446356/ciara/images/Home_Slider_3.jpg"
            style={{ width: "100%", height: "auto" }}
          />
          <Overlay />
          <p>Woodlands Historic Park</p>
        </Wrapper>
        <Wrapper>
          <img
            src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607446323/ciara/images/Home_Slider_4.jpg"
            style={{ width: "100%", height: "auto" }}
          />
          <Overlay />
          <p>Aitken College</p>
        </Wrapper>
        <Wrapper>
          <img
            src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607446360/ciara/images/Home_Slider_5.jpg"
            style={{ width: "100%", height: "auto" }}
          />
          <Overlay />
          <p>Closest Bus Stop To Brendan Road</p>
        </Wrapper>
      </Carousel>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  margin-top: 36px;
  width: 100%;
  max-height: 720px;
  overflow: hidden;
  /* display: flex;
  justify-content: center; */
  .carousel-root {
    max-height: 720px;
  }
  .carousel {
    max-height: 720px;
  }
  .slider-wrapper {
    max-height: 720px;
  }
  .slider {
    max-height: 720px;
  }

  .legend {
    font-size: 3rem;
  }

  .slide {
    max-height: 720px;
  }

  /* .carousel .control-arrow,
    .carousel.carousel-slider .control-arrow {
      opacity: 0.7;
    } */

  .carousel.carousel-slider .control-arrow {
    color: ${({ theme }) => theme.colors.gold};
    background: rgba(0, 41, 81, 0.8);
    padding: 10px;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid #d3c48f;
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid #d3c48f;
  }
`;

const Wrapper = styled.div`
  overflow: hidden;
  height: 100%;

  p {
    width: 100%;
    text-align: center;
    color: white;
    position: absolute;
    bottom: 0;
    margin-bottom: 36px;
    font-size: 2rem;
    font-family: "Ellen-Luff";
    @media screen and (max-width: 1024px) {
      font-size: 1.2rem;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 41, 81, 1));
`;

export default HomeCarousel;
