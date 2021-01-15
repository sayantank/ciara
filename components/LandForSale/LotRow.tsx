import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "styled-components";
import RegisterForm from "../RegisterForm";

export interface LotObject {
  lot: number;
  status: string;
  size: number;
  frontage: number;
  depth: number;
  facing: string;
  image: string;
}

interface LotRowProps {
  data: LotObject;
}

const LotRow: React.FC<LotRowProps> = ({
  data: { lot, status, size, frontage, depth, facing, image },
}) => {
  const [position, setPosition] = useState(false);
  const [showForm, setShowForm] = useState<boolean>(false);

  const toggle = () => {
    console.log("hello");
    setShowForm(!showForm);
    setTimeout(() => {
      setPosition(!position);
    }, 10);
  };

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [showForm]);

  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = "unset");
  }, [show]);

  return showForm ? (
    <RegisterForm show={showForm} toggle={toggle} position={position} />
  ) : (
    <>
      <ModalWrapper show={show}>
        <div className="btn-wrapper">
          <Close onClick={() => setShow(false)} />
        </div>
        <img src={image} alt="Lot Image" />
      </ModalWrapper>
      <Container>
        <Upper>
          <div className="left">
            <h1>LOT {lot}</h1>
            <h2>{status}</h2>
          </div>
          <div className="right">
            <EnquireBtn onClick={toggle}>ENQUIRE</EnquireBtn>
            <a href={image} target="_blank" rel="noopener noreferrer">
              <ViewLotBtn>VIEW LOT</ViewLotBtn>
            </a>
          </div>
        </Upper>
        <Lower>
          <div className="field">
            <h1>AREA</h1>
            <h2>
              {size}m<sup>2</sup>
            </h2>
          </div>
          <div className="field">
            <h1>FRONTAGE</h1>
            <h2>
              {frontage}m<sup>2</sup>
            </h2>
          </div>
          <div className="field">
            <h1>DEPTH</h1>
            <h2>{depth}m</h2>
          </div>
          <div className="field">
            <h1>FACING</h1>
            <h2>{facing}</h2>
          </div>
        </Lower>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
  width: 100%;
  border-bottom: 3px solid #d3c48f;
`;

const Upper = styled.div`
  display: flex;
  padding: 6px 0px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .left {
    flex: 1;
    display: flex;
    align-items: center;

    h1 {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.blue};
      margin-right: 10px;
    }
    h2 {
      font-size: 1.1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gold};
    }
  }
  .right {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
      margin-top: 10px;
      justify-content: flex-start;
    }
  }
`;

const EnquireBtn = styled.button`
  border: 3px solid #d3c48f;
  background: transparent;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  padding: 6px 16px;
  font-size: 1rem;
  border-radius: 20px;
  margin-right: 24px;
  cursor: pointer;
  outline-width: 0;
`;

const ViewLotBtn = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.gold};
  color: ${({ theme }) => theme.colors.blue};
  font-weight: 700;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 20px;
  cursor: pointer;
  outline-width: 0;
`;

const Lower = styled.div`
  display: flex;
  padding: 6px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  .field {
    display: flex;
    flex-direction: column;
    min-width: 15%;

    @media screen and (max-width: 768px) {
      flex-direction: row;
      margin-top: 6px;
    }

    h1 {
      font-size: 1.1rem;
      color: ${({ theme }) => theme.colors.blue};
      margin-right: 10px;
    }

    h2 {
      font-size: 1rem;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.gold};
    }
  }
`;

const ModalWrapper = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  z-index: 1000;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.9);
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px;

  img {
    height: 100%;
    width: auto;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }

  .btn-wrapper {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    @media screen and (max-width: 768px) {
      margin-bottom: 16px;
    }
  }
`;

const Close = styled(FaTimes)`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 2rem;
  cursor: pointer;
`;

export default LotRow;
