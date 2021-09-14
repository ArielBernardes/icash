import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
`;

export const Proof = styled.img`
  position: absolute;
  top: 50px;
  left: 28px;
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--orangeCore);
  height: 50%;

  h3 {
    color: var(--white);
    margin-left: 140px;
    margin-bottom: 16px;
  }

  p {
    color: var(--white);
    font-size: 12px;
    text-align: center;
    margin-bottom: 25px;
    font-weight: 800;
    width: 280px;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;

  h2 {
    color: var(--lightOrange);
  }
`;

export const ValueToPay = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  div {
    text-align: center;
    color: var(--white);
    background-color: var(--lightOrange);
    opacity: 0.85;
    width: 200px;
    height: 30px;
    border-radius: 20px;
    margin-left: 10px;

    p {
      font-size: 20px;
      margin-top: 5px;
    }
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  div {
    text-align: center;
    color: var(--white);
    background-color: var(--lightOrange);
    width: 200px;
    height: 30px;
    border-radius: 20px;
    margin-left: 10px;

    p {
      font-size: 20px;
      margin-top: 5px;
    }
  }
`;

export const Pay = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--orangeCore);
  height: 42px;
  width: 240px;
  border-radius: 20px;
  border: none;
  margin-top: 18px;
  color: var(--white);
`;

export const AvailableValue = styled.div`
  color: var(--lightOrange);
  font-weight: 800;
  margin-top: 30px;
`;

export const RemaingBalance = styled.div`
  color: var(--lightOrange);
  margin-top: 8px;
`;

export const BackArrow = styled.button`
  position: absolute;
  top: 92%;
  left: 5%;
  border: none;
  background-color: transparent;
`;
