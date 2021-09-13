import styled from "styled-components";

export const Container = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: block;
    background-color: var(--orangeCore);
    width: 100%;
    height: 94px;
  }
`;

export const Back = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  top: 24px;
  left: 40px;
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 64%;

  h3 {
    color: var(--white);
    margin-left: 10px;
  }

  @media only screen and (min-width: 1024px) {
    margin-left: 76%;
  }
`;

export const Avatar = styled.img`
  border-radius: 40px;
  margin-left: 18px;
`;
