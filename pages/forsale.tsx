import React from "react";
import Footer from "../components/Footer";
import Plan from "../components/ForSale/Plan";
import PlanIntro from "../components/ForSale/PlanIntro";

interface forsaleProps {}

const forsale: React.FC<forsaleProps> = ({}) => {
  return (
    <>
      <Plan />
      <PlanIntro />
      <Footer />
    </>
  );
};

export default forsale;
