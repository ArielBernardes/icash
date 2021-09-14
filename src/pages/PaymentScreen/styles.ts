import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Payment = styled.div`
  background-color: var(--orangeCore);
  height: 50%;

  @media only screen and (min-width: 768px) {
    background-color: var(--white);
  }
`;

export const TextMobile = styled.div`
  position: absolute;
  text-align: center;
  right: 0;
  left: 0;
  top: 228px;

  h3 {
    font-size: 20px;
    color: var(--white);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TextDesktop = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;

    h2 {
      position: absolute;
      text-align: center;
      left: auto;
      right: auto;
      top: 220px;
      width: 100%;
    }
  }

  @media (min-width: 1024px) {
    h2 {
      top: 240px;
    }
  }
`;

export const Logo = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    top: 80px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    top: 100px;
  }
`;

export const Wallet = styled.img`
  position: absolute;
  left: 21px;
  top: 34px;
  width: 50px;
  height: 112px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
`;

export const Content = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--lightOrange);
  opacity: 0.8;
  width: 110px;
  height: 90px;
  margin: 10px;
  border-radius: 16px;
  border: none;
  :focus {
    background-color: var(--orangeCore);
  }

  @media (min-width: 480px) {
    width: 170px;
    height: 150px;
    margin: 20px;
  }

  @media only screen and (min-width: 768px) {
    width: 250px;
    height: 200px;
    margin: 40px;
  }

  @media only screen and (min-width: 768px) {
    :hover {
      background-color: var(--orangeCore);
    }
  }
`;

export const ICashCard = styled.img`
  margin-top: 10px;

  @media only screen and (min-width: 480px) {
    width: 140px;
  }

  @media only screen and (min-width: 768px) {
    width: 200px;
  }
`;

export const ICashback = styled.img`
  @media only screen and (min-width: 480px) {
    width: 140px;
  }

  @media only screen and (min-width: 768px) {
    width: 200px;
  }
`;

export const Arrow = styled.img``;

export const Next = styled.button`
  position: absolute;
  top: 520px;
  left: 270px;
  width: 30px;
  height: 30px;
  border: none;
`;
