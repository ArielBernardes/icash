import styled from "styled-components";

export const ModalWrapper = styled.div`
  background-color: var(--greenInputBkgd);
  height: 15pc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .modalHeader {
    background-color: var(--orangeCore);
    color: var(--white);
    height: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;

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
    }
  }

  input {
    border-radius: 40px;
    border: 2px solid var(--white);
    color: var(--grayStandOut);
    width: 80%;
    margin: auto;
    padding: 12px;
  }
`;
