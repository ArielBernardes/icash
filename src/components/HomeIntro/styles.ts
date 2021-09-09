import styled from "styled-components";

export const LoggingInPaths = styled.div`
  background-color: var(--darkGray);
  width: 50vw;
  height: 100vh;
  display: flex;
  gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .loginWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--white);
    width: 70%;
    height: 20%;
    border: 1px solid transparent;
    border-top-right-radius: 90px;
    border-bottom-right-radius: 90px;
    cursor: pointer;

    img {
      width: 15%;

      &:hover {
        width: 17%;
      }
    }

    span {
      font-size: 30px;
      width: 30%;
      color: var(--darkGray);
      text-align: right;

      &:hover {
        font-weight: 600;
        color: var(--orangeCore);
      }
    }
  }

  .accountWrapper {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 20%;
    border: 1px solid transparent;
    border-top-right-radius: 80px;
    border-bottom-right-radius: 80px;
    cursor: pointer;

    img {
      width: 15%;

      &:hover {
        width: 17%;
      }
    }

    span {
      font-size: 30px;
      width: 35%;
      color: var(--white);

      &:hover {
        font-weight: 600;
        color: var(--orangeCore);
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    gap: 40px;

    .loginWrapper,
    .accountWrapper {
      width: 95%;
      height: 25%;
     
      span {
        width: 60%;
        text-align: center;
      }
    }
`;
