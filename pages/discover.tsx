import React from "react";
import Experience from "../components/Discover/Experience";
import ImageCarousel from "../components/Discover/ImageCarousel";
import ImageComponent from "../components/Discover/ImageComponent";
import HeroImage from "../components/HeroImage";
import Register from "../components/Register";

interface discoverProps {}

const discover: React.FC<discoverProps> = ({}) => {
  return (
    <>
      <Register />
      <HeroImage src="/images/land.jpg" alt="land" />
      <Experience />
      <ImageComponent src="/images/land.jpg" alt="land" />
      <ImageCarousel />
    </>
  );
};

export default discover;
