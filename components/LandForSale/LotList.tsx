import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledSection from "../StyledSection";
import FancyTitle from "../FancyTitle";
import { Divider } from "../Divider";
import LotRow from "./LotRow";

import { LotObject } from "./LotRow";
import Axios from "axios";

interface LotListProps {}

const LotList: React.FC<LotListProps> = () => {
  const [lots, setLots] = useState([]);
  const [option, setOption] = useState(0);

  useEffect(() => {
    Axios.get("https://api.ciaraheights.com.au/lots").then((res) => {
      const data = res.data;
      setLots(data);
    });
  }, []);

  const compare = (a: LotObject, b: LotObject) => {
    if (option === 0) {
      return a.lot - b.lot;
    } else if (option === 1) {
      return a.frontage - b.frontage;
    } else if (option === 2) {
      return b.frontage - a.frontage;
    } else if (option === 3) {
      return a.size - b.size;
    } else if (option === 4) {
      return b.size - a.size;
    }
    return 0;
  };

  useEffect(() => {
    const sortArray = () => {
      const sorted = [...lots].sort(compare);
      setLots(sorted);
    };

    sortArray();
  }, [option]);

  return (
    <>
      <StyledSection>
        <Container>
          <Wrapper>
            <FancyTitle align="center">LAND FOR SALE</FancyTitle>
            <Divider width="120px" margin="36px" height="6px" />
            <select
              value={option}
              onChange={(e) => setOption(Number(e.target.value))}
            >
              <option value={0}>Sort By</option>
              <option value={1}>Frontage (Low-High)</option>
              <option value={2}>Frontage (High-Low)</option>
              <option value={3}>Area (Low-High)</option>
              <option value={4}>Area (High-Low)</option>
            </select>
            {lots.map((lot, i) => (
              <LotRow data={lot} key={i} />
            ))}
          </Wrapper>
          <DownloadWrapper>
            <FancyTitle>ESSENTIAL DOWNLOADS</FancyTitle>
            <ButtonWrapper>
              <button>Brand Guidelines</button>
              <button>Brand Guidelines</button>
              <button>Brand Guidelines</button>
            </ButtonWrapper>
          </DownloadWrapper>
        </Container>
      </StyledSection>
    </>
  );
};

export default LotList;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 54px;

  select {
    width: 100%;
    padding: 10px 16px;
    font-size: 1.2rem;
    border: 3px solid #c8ba87;
    border-radius: 50px;
    outline-width: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    background: transparent;
  }

  option {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    margin-top: 12px;
  }
`;

const DownloadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  width: 100%;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }

  button {
    border: solid 3px #c8ba87;
    background: ${({ theme }) => theme.colors.darkgold};
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1rem;
    font-weight: 600;
    width: 30%;
    padding: 10px 16px;
    border-radius: 50px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 8px 0px;
    }
  }
`;
