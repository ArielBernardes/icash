import styled from "styled-components";

export const ContainerHeader = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HeaderOrange = styled.div`
  /* margin-top: 50px; */
  width: 100%;
  height: 25vh;
  border-style: solid;
  border-color: var(--orangeCore) #fff #fff var(--orangeCore);
  border-width: 90px 0px 60px 320px;

  @media (min-width: 425px) {
    border-width: 100px 0px 80px 450px;
  }

  @media (min-width: 768px) {
    border-width: 200px 0px 80px 800px;
  }

  @media (min-width: 1024px) {
    border-width: 200px 0px 80px 1000px;
  }

  @media (min-width: 1440px) {
    border-width: 200px 0px 150px 1500px;
  }
`;

export const User = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  transform: translateY(-110px);
  z-index: 999;
`;
