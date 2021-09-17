import styled from "styled-components";

export const HeaderTransations = styled.div`
  background-color: var(--orangeCore);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* align-items: center; */
  height: 25vh;
`;

export const BoxTitle = styled.div`
  width: 100%;
  display: flex;

  justify-content: space-between;

  padding: 1rem;

  img {
    width: 25px;
    height: 25px;
  }

  span {
    color: #fff;
    font-size: 12px;
    margin-top: 5px;
  }
`;

export const BtnAvatar = styled.button`
  /* margin-top: 10px; */
  height: 25px;
  border: none;
  background-color: transparent;
  color: var(--white);
  font-size: 15px;
  font-style: unset;
  font-weight: bold;
`;

export const MyIcash = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #fff;

  span {
    margin-right: 15px;
  }
`;

export const Status = styled.div`
  display: flex;
  justify-content: space-around;

  .status {
    width: 50%;
    height: 20px;
    background-color: var(--greenInputBkgd);
    text-align: center;
  }
  .status:nth-child(2) {
    width: 50%;
    height: 20px;
    background-color: var(--red);
    text-align: center;
  }
`;

export const InfoTransations = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #fff;

  .info {
    width: 30%;
    text-align: center;
  }

  .info:nth-child(1) {
    width: 20%;
    text-align: center;
  }
`;

export const ContainerTransations = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  ul {
    width: 85%;

    .boxTransation {
      min-width: 100%;
      min-height: 70px;
      display: flex;
      align-items: center;
      background-color: var(--grayHome);
      margin: 7px 0;
      padding: 1px 0px;

      @media (min-width: 769px) {
        width: 40%;
        max-height: 80px;
      }
    }

    .day {
      min-height: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      min-width: 23px;
      /* margin: 0 0 0 3px; */
      background-color: red;
      border: 3px solid #fff;
      color: #fff;
      font-weight: bold;

      @media (min-width: 769px) {
        height: 100%;
        min-width: 30px;
        margin: 0;
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      min-height: 70px;
      font-size: 12px;
      border: 3px solid #fff;

      @media (min-width: 769px) {
      }
    }
    .value {
      min-height: 70px;
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      min-width: 47px;
      /* margin-right: 3px; */
      border: 3px solid #fff;

      @media (min-width: 769px) {
        height: 100%;
        margin: 0;
      }
    }
  }

  @media (min-width: 769px) {
    ul {
      width: calc(100% - 80px);
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  }
`;

export const Calendar = styled.div`
  width: 15%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;

  span {
    text-align: center;
  }

  @media (min-width: 769px) {
    max-width: 80px;
  }
`;
