import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: var(--lightOrange);
  margin: auto;
  width: 80vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
  }
`;

export const PageHeader = styled.div`
  background-color: var(--orangeCore);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  gap: 30px;

  .inputWrapper {
    width: 50%;

    h3 {
      color: var(--white);
      text-align: center;
    }

    button {
      opacity: unset;
      color: var(--white);
      margin-bottom: 20px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 45vh;
    .inputWrapper {
      width: 85%;
    }
  }
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;

  img {
    outline: 15px solid var(--white);
  }
`;
