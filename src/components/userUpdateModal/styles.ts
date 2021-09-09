import styled from "styled-components";

export const Figure = styled.figure`
  padding: 10px;
`;

export const TitleContainer = styled.div`
  background-color: var(--orangeCore);
  h2 {
    color: var(--white);
    text-align: right;
    padding: 10px;
  }
`;

export const FormContainer = styled.form`
  button {
    opacity: 100%;
    background-color: var(--greenFormBkgd);
    color: var(--white);
    font-size: 20px;
  }
`;

export const InputContainer = styled.div`
  background-color: var(--greenFormBkgd);
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  input {
    color: var(--fontDarkGray);
  }
`;
