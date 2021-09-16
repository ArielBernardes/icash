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
    top: 3%;
    left: 30%;
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
    flex-direction: column;
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
      text-align: center;
      font-size: 12px;
    }
  }

  h1 {
    font-size: 24px;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 3rem;
    }

    div {
      width: 220px;
      height: 180px;

      p {
        font-size: 24px;
      }
    }

    div + div {
      margin-left: 200px;
    }
  }
`;

export const Value = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

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
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 32px;
      margin-top: 4px;
    }

    div {
      width: 280px;
      height: 50px;

      p {
        font-size: 28px;
      }
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
  :hover {
    background-color: var(--lightOrange);
  }

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    width: 300px;
    font-size: 24px;
    padding: 20px;
  }
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
