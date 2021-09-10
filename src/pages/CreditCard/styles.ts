import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.h2`
  color: var(--orangeCore);
  font-size: 30px;
  width: 150px;
  text-align: center;
`;

export const CardsList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
