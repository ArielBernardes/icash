import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
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

  @media only screen and (min-width: 768px) {
    background-color: var(--white);
    height: 0;

    h3 {
      display: none;
    }

    p {
      position: absolute;
      top: 3%;
      color: var(--white);
      font-size: 14px;
      width: 220px;
    }
  }

  @media only screen and (min-width: 1024px) {
    p {
      font-size: 16px;
      width: 280px;
    }
  }
`;

export const Proof = styled.img`
  position: absolute;
  top: 50px;
  left: 28px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopProof = styled.img`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 2%;
    left: 28%;
  }

  @media only screen and (min-width: 1024px) {
    left: 30%;
  }

  @media only screen and (min-width: 1440px) {
    left: 36%;
  }
`;

export const Icash = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    top: 110px;
    text-align: center;
  }
`;

export const DesktopTitle = styled.h1`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    text-align: center;
    margin-top: 120px;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--lightOrange);
  }
`;

export const Options = styled.div`
  display: flex;
  margin-top: 20px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--lightOrange);
    width: 110px;
    height: 90px;
    margin: 10px;
    border-radius: 16px;
    border: none;
    color: var(--white);

    p {
      font-size: 12px;
    }
  }

  .wallet {
    display: flex;
    flex-direction: column;
  }

  .cashback {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 30px;
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

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
  color: var(--white);
  margin-top: 10px;
`;

export const BackArrow = styled.button`
  position: absolute;
  top: 93%;
  left: 5%;
  border: none;
  background-color: transparent;

  @media (min-width: 768px) {
    display: none;
  }
`;
