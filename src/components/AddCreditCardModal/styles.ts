import styled from "styled-components";

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
    @media (min-width: 1024px) {
      font-size: 24px;
    }
  }
  @media (min-width: 1024px) {
    text-align: end;
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
