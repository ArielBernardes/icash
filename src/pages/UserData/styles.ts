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

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  img {
    width: 30px;
    height: 30px;
  }
`;

export const BtnAvatar = styled.button`
  border: none;
  background-color: transparent;
  color: var(--white);
  font-size: 18px;
  font-style: unset;

  @media (min-width: 769px) {
    margin-right: -165px;
  }
`;

export const BtnProfile = styled.button`
  margin-top: 10px;
  padding: 2px;
  border: none;
  background-color: transparent;
  color: var(--fontDarkGray);
  font-size: 18px;
  text-decoration: underline;
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

export const AvatarUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
    border-radius: 100%;
    margin-bottom: 5px;
  }

  @media (min-width: 769px) {
    transform: translateX(-160px);
    img {
      width: 220px;
    }
  }
`;

export const BtnProfileUser = styled.div`
  background-color: var(--lightGray);
  color: var(--fontDarkGray);
  text-decoration: underline var(--lightGray);
  width: 100vw;
  border: none;
  padding: 30px 10px;
  margin: 0.2rem;
`;

export const DataUser = styled.div`
  width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.15);
  margin-top: 50px;

  p {
    font-size: 25px;
    padding: 10px 0;
  }
`;
