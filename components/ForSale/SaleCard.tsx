import React from "react";
import styled from "styled-components";

interface SaleCardProps {}

let s: string =
  "fhkshdasdasdasdffhkshdasdasdasdffhkshdasdasdasdffhkshdasdasdasdffhkshdasdasdasdffhkshdasdasdasdffhkshdasdasdasdffhkshdasdasdasdf";

function truncateText(s, maxLength) {
  if (s.length > maxLength) {
    s = s.substr(0, maxLength) + "...";
  }
  return s;
}

const SaleCard: React.FC<SaleCardProps> = ({}) => {
  return (
    <Container>
      <ImageWrapper>
        <img
          src="https://res.cloudinary.com/nxmxnjxxn/image/upload/v1607423820/ciara/images/Banner_Builder.jpg"
          alt="card"
        />
      </ImageWrapper>
      <h1>LOREM IPSUM</h1>
      <h2>$000,00</h2>
      <p>{truncateText(s, 50)}</p>
      <IconContainer>
        <IconWrapper>
          <p>0</p>
          <img src="/images/bed.png" alt="bedrooms" />
        </IconWrapper>
        <IconWrapper>
          <p>0</p>
          <img src="/images/bed.png" alt="bedrooms" />
        </IconWrapper>
        <IconWrapper>
          <p>0</p>
          <img src="/images/bed.png" alt="bedrooms" />
        </IconWrapper>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 300px;
  height: 360px;
  padding: 4px;
  display: flex;
  flex-direction: column;

  h1 {
    color: black;
    font-weight: 600;
    margin-bottom: 4px;
    font-size: 1.2rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.gold};
    font-weight: 600;
    font-size: 1.2rem;
    margin-bottom: 4px;
  }

  p {
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 8px;
    min-height: 2.2rem;
    word-wrap: break-word;
    overflow-y: hidden;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;
  overflow: hidden;
  margin-bottom: 8px;
  img {
    width: auto;
    height: 100%;
  }
`;

const IconContainer = styled.div`
  width: 100%;
  display: flex;
`;

const IconWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  p {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue};
    font-size: 1.3rem;
    text-align: center;
    margin-right: 6px;
  }

  img {
    height: 100%;
    width: auto;
  }
`;

export default SaleCard;
