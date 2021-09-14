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

  .boxTransation {
    display: flex;
    background-color: var(--grayHome);
    margin: 5px 0;
    border: 1px solid #fff;
    padding: 2px 0;
  }

  .day {
    margin: 0 3px;
    background-color: red;
    text-align: center;
    border: 1px solid #fff;
  }
  .description {
    margin: 0 5px;
    font-size: 12px;
    border: 1px solid #fff;
  }
  .value {
    margin-right: 5px;
  }
`;

export const Calendar = styled.div`
  width: 15%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;
  /* background-color: green; */

  span {
    text-align: center;
  }
`;
