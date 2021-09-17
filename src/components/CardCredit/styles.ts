import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--blueCard);
  border-radius: 15px;
  color: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  width: 100%;
  height: 180px;
  cursor: pointer;
  box-shadow: 0 0 10px var(--black);
  &:hover {
    filter: brightness(70%);
  }
  h2 {
    margin-bottom: 15px;
  }
`;

export const OpenModal = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: var(--fontDarkGray);
  &:hover {
    text-decoration: underline;
  }
  svg {
    margin-right: 5px;
    font-size: 20px;
  }
`;

export const BtnCloseModal = styled.button`
  position: absolute;
  right: 10px;
  top: 5px;
  border: none;
  background: transparent;
  color: var(--white);
  font-size: 25px;
  cursor: pointer;
  :hover {
    font-weight: bold;
    font-size: 30px;
  }
`;

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

export const Figure = styled.figure`
  padding: 10px;
`;

export const TitleContainer = styled.div`
  background-color: var(--orangeCore);
  height: 20%;
  border-radius: 12px 12px 0 0;
  h2 {
    color: var(--white);
    text-align: right;
    padding: 10px;
  }
`;

export const FormContainer = styled.form`
  height: 80%;
  border-radius: 12px;

  button {
    opacity: 100%;
    background-color: var(--greenFormBkgd);
    color: var(--white);
    font-size: 20px;
    font-weight: bold;
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  background-color: var(--greenFormBkgd);
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  height: 80%;
  input {
    color: var(--fontDarkGray);
    font-size: 16px;
  }
`;

export const DataContainer = styled.div`
  position: relative;
  color: var(--white);
  p {
    margin-left: 15px;
  }

  p:first-child {
    margin-bottom: 30px;
    font-size: 18px;
  }

  span {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 12px;
    padding: 3px 0;
    svg {
      margin-right: 5px;
    }
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 20%;
`;
