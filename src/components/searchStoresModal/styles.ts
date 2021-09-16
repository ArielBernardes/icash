import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: auto;

  .modalHeader {
    background-color: var(--orangeCore);
    color: var(--white);
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 48px 10px 10px;
    border-radius: 12px 12px 0 0;
    @media (min-width: 1024px) {
      flex-direction: column;
    }

    h3 {
      text-align: left;
      width: 80%;
      line-height: 30px;

      @media only screen and (min-width: 361px) {
        width: 60%;
      }
    }

    .closeModal {
      position: absolute;
      top: 0;
      right: 0;

      padding: 10px;
      font-weight: 600;
      cursor: pointer;
      font-size: 25px;
    }
    button {
      background-color: var(--lightOrange);
      opacity: 22%;
      color: var(--black);
    }
    @media only screen and (min-width: 320px) and (max-width: 768px) {
      flex-direction: column;
    }
  }

  input {
    border-radius: 40px;
    border: 2px solid var(--white);
    color: var(--grayStandOut);
    width: 80%;
    margin: 10px auto;
    padding: 12px;

    &:focus {
      background-color: var(--greenFormBkgd);
      color: var(--white);

      &::placeholder {
        color: var(--white);
      }
    }
  }

  button {
    width: 50%;
    background-color: var(--orangeCore);
    opacity: 1;
    color: var(--white);
    align-self: center;
    margin: 15px;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    width: 100vw;
  }
`;

export const Stores = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  width: 100%;
  text-align: center;
  color: var(--grayStandOut);
  padding: 10px 10px 24px;

  ul {
    background-color: var(--grayHome);
    padding: 10px;
    border-radius: 40px;

    li {
      cursor: pointer;
      .cashback {
        color: var(--orangeCore);
        font-weight: 600;
        font-size: 1.2rem;
      }
    }
  }
`;
