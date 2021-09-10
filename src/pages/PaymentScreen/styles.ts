import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Payment = styled.div`
  background-color: var(--orangeCore);
  height: 50%;
`;

export const Text = styled.div`
  position: absolute;
  text-align: center;
  right: 0;
  left: 0;
  top: 228px;

  h3 {
    font-size: 20px;
    color: var(--white);
  }
`;

export const Wallet = styled.img`
  position: absolute;
  left: 21px;
  top: 34px;
  width: 50px;
  height: 112px;
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
`;

export const ICashCard = styled.img`
  margin-top: 10px;
`;

export const ICashback = styled.img``;

export const Arrow = styled.img``;

export const Next = styled.button`
  position: absolute;
  top: 520px;
  left: 270px;
  width: 30px;
  height: 30px;
  border: none;
`;
