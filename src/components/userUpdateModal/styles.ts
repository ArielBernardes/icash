import styled from "styled-components";

export const OpenModal = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
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
  h2 {
    color: var(--white);
    text-align: right;
    padding: 10px;
  }
`;

export const FormContainer = styled.form`
  height: 80%;

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
  gap: 20px;
  height: 80%;
  input {
    color: var(--fontDarkGray);
    font-size: 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
  height: 20%;
`;
