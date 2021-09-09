import styled from "styled-components";

export const FormContainer = styled.div`
  width: 50vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    width: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    input {
      color: var(--grayStandOut);
    }

    button {
      opacity: 1;
      color: var(--white);
      background-color: var(--orangeCore);
    }

    .goHome,
    .openAccount {
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 60%;

      &:hover {
        font-weight: 600;
        color: var(--orangeCore);
      }

      img {
        margin: 5px;
      }
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100vw;

    form {
      width: 85%;

      .goHome,
      .openAccount {
        width: 70%;
      }
    }
  }
`;
