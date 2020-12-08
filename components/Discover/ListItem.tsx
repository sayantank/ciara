import React from "react";
import { BsCircleFill } from "react-icons/bs";
import styled from "styled-components";

interface ListItemProps {}

const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <Container>
      <Bullet />
      <p>{children}</p>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px;
  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.blue};
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: 0.9rem;
    }
  }
`;

const Bullet = styled(BsCircleFill)`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 0.5rem;
  margin-right: 8px;
`;

export default ListItem;
