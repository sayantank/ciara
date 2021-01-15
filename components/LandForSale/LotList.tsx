import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StyledSection from "../StyledSection";
import FancyTitle from "../FancyTitle";
import { Divider } from "../Divider";
import LotRow from "./LotRow";

import { LotObject } from "./LotRow";
import Axios from "axios";
import Skeleton from "react-loading-skeleton";

interface LotListProps {}

const LotList: React.FC<LotListProps> = () => {
  const [initialLots, setInitialLots] = useState([]);
  const [showAvailable, setShowAvailable] = useState(false);
  const [lots, setLots] = useState([]);
  const [option, setOption] = useState(0);

  useEffect(() => {
    Axios.get("https://api.ciaraheights.com.au/lots").then((res) => {
      const data = res.data;
      setInitialLots(data);
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

  const sortArray = () => {
    const sorted = [...initialLots].sort(compare);
    setLots(sorted);
  };

  const filterAvailable = () => {
    const filtered = [...lots].filter((lot) => lot.status === "Available");
    setLots(filtered);
  };

  useEffect(() => {
    sortArray();
  }, [option]);

  useEffect(() => {
    console.log(showAvailable);
    if (showAvailable) {
      filterAvailable();
    } else {
      sortArray();
    }
  }, [showAvailable]);

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
            {lots.length > 0 ? (
              lots.map((lot, i) => <LotRow data={lot} key={i} />)
            ) : (
              <div style={{ width: "100%" }}>
                <Skeleton height={96} style={{ marginTop: "16px" }} />
                <Skeleton height={96} style={{ marginTop: "16px" }} />
                <Skeleton height={96} style={{ marginTop: "16px" }} />
                <Skeleton height={96} style={{ marginTop: "16px" }} />
                <Skeleton height={96} style={{ marginTop: "16px" }} />
                <Skeleton height={96} style={{ marginTop: "16px" }} />
              </div>
            )}
            <FilterBtn onClick={() => setShowAvailable(!showAvailable)}>
              {showAvailable ? "VIEW ALL LOTS" : "VIEW AVAILABLE LOTS"}
            </FilterBtn>
          </Wrapper>
          <DownloadWrapper>
            <FancyTitle>ESSENTIAL DOWNLOADS</FancyTitle>
            <ButtonWrapper>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Brand Guidelines</button>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Brand Guidelines</button>
              </a>
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Brand Guidelines</button>
              </a>
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
    width: 80%;
  }

  a {
    width: 30%;
    @media screen and (max-width: 768px) {
      width: 100%;
      margin: 8px 0px;
    }
  }
  button {
    border: none;
    background: ${({ theme }) => theme.colors.darkgold};
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1rem;
    font-weight: 600;
    width: 100%;
    padding: 10px 16px;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:focus {
      outline-width: 0;
    }

    &:hover {
      background: ${({ theme }) => theme.colors.blue};
      color: white;
    }
  }
`;

const FilterBtn = styled.button`
  border: none;
  width: 100%;
  border-radius: 50px;
  padding: 16px 4px;
  margin: 18px 0px;
  font-size: 1.4rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.blue};

  &:focus {
    outline-width: 0;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
