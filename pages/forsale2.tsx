import React from "react";
import SaleCard from "../components/ForSale/SaleCard";

interface forsale2Props {}

const forsale2: React.FC<forsale2Props> = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <SaleCard />
    </div>
  );
};

export default forsale2;
