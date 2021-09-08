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

    h2 {
      color: var(--white);
      margin-top: 20px;
      font-weight: 600;

      span {
        color: var(--orangeCore);
      }
    }

    input {
      color: var(--white);
      &::placeholder {
        color: var(--white);
      }
    }

    button {
      opacity: 1;
      color: var(--white);
      background-color: var(--orangeCore);
    }

    .account {
      color: var(--white);
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;

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

      .account {
        width: 60%;
      }
    }
  }
}
`;
