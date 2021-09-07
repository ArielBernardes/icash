import styled from "styled-components";

export const LoginPageContainer = styled.div`
  background-color: var(--grayStandOut);
  margin: auto;
  width: 80vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100vw;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
