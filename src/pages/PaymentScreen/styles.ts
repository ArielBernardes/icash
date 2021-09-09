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
  height: 50%;
`;
