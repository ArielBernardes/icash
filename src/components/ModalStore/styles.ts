import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  background-color: var(--darkGray);

  h1 {
    text-align: center;
    color: var(--fontDarkGray);
    margin: 0.75rem;
  }
`;

export const BtnClose = styled.button`
  background-color: transparent;
  border: none;

  img {
    margin: 1rem;
    width: 30px;
    height: 30px;
  }
`;

export const FormStore = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  input {
    width: 100%;
  }
`;

export const BtnSubmit = styled.button`
  color: var(--white);
  background-color: var(--greenFormBkgd);
  height: 45px;
  border-radius: 40px;
  border: none;
  margin-top: 16px;
  width: 250px;
  transition: 0.5s;
  font-size: 14px;

  :hover {
    filter: brightness(1.1);
    color: var(--white);
    opacity: unset;
  }
`;
