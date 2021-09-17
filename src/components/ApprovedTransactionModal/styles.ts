import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  height: 80%;
  width: 90%;
  right: 0;
  left: 0;
  text-align: center;
  background-color: var(--lightOrange);

  img {
    width: 140px;
  }

  button {
    border: none;
    border-radius: 16px;
    padding: 10px;
    background-color: var(--orangeStandOut);
    width: 180px;
    color: var(--white);
  }
`;

export const Text = styled.div`
  h1 {
    color: var(--white);
  }

  h1 + h1 {
    color: var(--orangeCore);
  }
`;
