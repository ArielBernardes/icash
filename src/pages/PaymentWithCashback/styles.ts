import styled from "styled-components";

export const Container = styled.div`
  height: 95vh;
`;

export const Proof = styled.img`
  position: absolute;
  top: 50px;
  left: 28px;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: var(--orangeCore);
  height: 40%;

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
    height: 0;
    background-color: var(--white);

    h3 {
      display: none;
    }

    p {
      width: 220px;
    }
  }

  @media only screen and (min-width: 1024px) {
    p {
      width: 300px;
    }
  }
`;

export const LogoImage = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    position: absolute;
    top: 120px;
    right: 0;
    left: 0;
    text-align: center;
  }
`;

export const DesktopText = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: flex;
    position: absolute;
    top: 220px;

    h1 + h1 {
      margin-left: 10px;
      color: var(--orangeCore);
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35%;

  h2 {
    color: var(--lightOrange);
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ValueToPay = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

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

  @media only screen and (min-width: 768px) {
    margin-right: 80px;
    margin-top: 160px;

    h2 {
      font-size: 32px;
    }
    div {
      width: 240px;
      height: 40px;

      p {
        font-size: 28px;
      }
    }
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
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

    input {
      width: 100px;
      background-color: transparent;
      border: none;
      font-size: 20px;
      font-weight: bold;
      color: #fff;
      &::placeholder {
        color: var(--white);
      }
    }
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 32px;
    }
    div {
      width: 240px;
      height: 40px;

      p {
        font-size: 28px;
      }
    }
  }
`;

export const Pay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
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
    :hover {
      background-color: var(--lightOrange);
    }
  }

  @media only screen and (min-width: 768px) {
    button {
      font-size: 24px;
      width: 300px;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin-top: 20px;
  }
`;

export const CashbackValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px) {
    margin-left: 80px;
    margin-top: 120px;
  }
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
  top: 88%;
  left: 5%;
  border: none;
  background-color: transparent;

  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
