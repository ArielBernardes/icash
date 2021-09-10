import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  box-sizing: border-box;
  color: var(--fontLightGray);

  h3 {
    margin: 0.5rem;
  }
  span {
    color: var(--orangeCore);
  }
  h4 {
    margin-bottom: 5vh;
  }
`;

export const HeaderUser = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 320px;
  left: 0;
  top: -97px;
  background-color: var(--orangeCore);
  clip-path: polygon(0% 0%, 0% 100%, 100% 65%, 100% 0%);
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  img {
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

export const BtnAvatar = styled.button`
  margin-top: 10px;
  border: none;
  background-color: transparent;
  color: var(--white);
  font-size: 15px;
  font-style: unset;
`;

export const AvatarUser = styled.div`
  margin-top: 20px;
  img {
    border-radius: 100%;
  }
`;

export const BtnProfileUser = styled.div`
  background-color: var(--lightGray);
  color: var(--fontDarkGray);
  width: 100vw;
  border: none;
  padding: 30px 10px;
  margin: 0.2rem;
`;

export const FooterUser = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  p {
    font-size: 12px;
  }
`;
