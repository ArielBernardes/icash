import styled from "styled-components";

export const Container = styled.button`
  color: var(--black);
  background-color: var(--lightOrange);
  opacity: 22%;
  height: 45px;
  border-radius: 40px;
  border: none;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  font-size: 14px;

  :hover {
    filter: brightness(1.1);
    color: var(--white);
    opacity: unset;
  }
`;
