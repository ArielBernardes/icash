import styled from "styled-components";

export const PageContainer = styled.div`
  background-color: var(--lightOrange);
  margin: auto;
  width: 80vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100vw;
    flex-direction: column;
  }
`;

export const PageHeader = styled.div`
  background-color: var(--orangeCore);
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  gap: 30px;

  .inputWrapper {
    width: 50%;

    form {
      span {
        color: var(--white);
        font-weight: 600;
      }

      input {
        &::placeholder {
          color: var(--white);
        }
      }

      button {
        opacity: unset;
        color: var(--white);
        margin-bottom: 20px;
        width: 40%;
      }
    }

    .openAccount {
      color: var(--white);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: 45vh;
    .inputWrapper {
      width: 85%;
    }
  }
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;

  img {
    outline: 15px solid var(--white);
  }
`;
