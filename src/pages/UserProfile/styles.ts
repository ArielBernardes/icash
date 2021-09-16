import styled from "styled-components";

export const ContainerUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 1024px; */
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

export const ContainerAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    flex-direction: row;
    min-height: 300px;
  }
`;

export const AvatarUser = styled.div`
  margin-top: 20px;
  img {
    border-radius: 100%;
  }

  @media (min-width: 769px) {
    margin-top: 0;
    transform: translateX(-150px);
    img {
      width: 220px;
      transform: translateY(-20px);
    }
  }
`;

export const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 769px) {
    margin-top: 20px;
    transform: translateX(-140px);
    h3 {
      font-size: 25px;
    }
    span {
      font-size: 25px;
    }
    h4 {
      font-size: 20px;
    }
  }
`;

export const ContainerBtn = styled.div`
  width: 100%;
  min-height: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 769px) {
    width: 70%;
  }
`;

export const BtnProfileUser = styled.div`
  background-color: var(--lightGray);
  color: var(--fontDarkGray);
  width: 100vw;
  border: none;
  padding: 30px 10px;
  margin: 0.2rem;

  @media (min-width: 425px) {
    width: 49%;
  }
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

export const ModalButtons = styled.div`
  display: flex;
  gap: 15px;
  button:last-child {
    /* background-color: var(--greenFormBkgd); */
    opacity: 1;
  }
`;

export const ModalContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  p {
    text-align: center;
    color: var(--white);
  }
`;
