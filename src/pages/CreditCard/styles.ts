import styled from "styled-components";

export const Header = styled.div`
  position: absolute;
  z-index: -2;
  width: 100vw;
  height: 320px;
  left: 0;
  top: -97px;
  background-color: var(--orangeCore);
  clip-path: polygon(0% 0%, 0% 100%, 100% 65%, 100% 0%);
`;

export const SubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Img = styled.img`
  padding: 15px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const Title = styled.h2`
  color: var(--white);
  font-size: 30px;
  width: 200px;
  text-align: center;

  @media (min-width: 1024px) {
    color: var(--fontDarkGray);
    width: 100%;
    text-align: start;
  }
`;

export const CardsList = styled.ul`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Subtitle = styled.h3`
  color: var(--orangeCore);
  text-align: center;
  margin: 40px 0;
  font-size: 22px;
`;
