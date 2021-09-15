import styled from "styled-components";

interface ContainerProps {
  image: string | undefined;
}

export const BackgroundMobile = styled.div<ContainerProps>`
  background: url(${(props) => props.image});
  background-size: cover;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 0;
  opacity: 0.2;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const FigureDesktop = styled.figure`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    width: 120px;
    height: 120px;
    margin-right: 32px;
    margin-left: 30px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 15px;
    }
  }
`;

export const Content = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Img = styled.img`
  margin-left: 15px;
  margin-top: 15px;
  width: 30px;
  height: 30px;
`;

export const StoreContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const StoreContentContainer = styled.div`
  height: 100vh;
  @media (min-width: 768px) and (max-width: 1023px) {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 15px;
    font-size: 26px;
  }
  @media (min-width: 1024px) {
    display: flex;
    position: relative;
    text-align: start;
  }
`;

export const StoreInfo = styled.div`
  margin: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  h2 {
    margin-bottom: 0;
  }
  h3 {
    font-weight: normal;
  }

  @media (min-width: 1024px) {
    margin: 0;
    position: absolute;
    bottom: 0;
    left: 182px;
  }
`;

export const Cashback = styled.div`
  width: 80px;

  h2 {
    font-size: 25px;
    color: var(--orangeCore);
    text-align: center;
  }
  text-align: end;
  span {
    display: inline-block;
    font-size: 12px;
    width: 100%;
    text-align: center;
  }
`;

export const StoreData = styled.div`
  padding: 0 30px;
  margin: 30px 0;
  color: var(--grayStandOut);
  text-shadow: 0.8px 0.9px 1px var(--black);
  p:nth-child(3),
  p:last-child {
    margin-left: 30px;
  }
  h4 {
    margin-bottom: 12px;
  }
  p {
    padding: 3px 0;
  }
`;

export const StoreDescription = styled.div`
  padding: 0 30px;
  text-align: justify;
  line-height: 20px;
`;

export const ButtonContainer = styled.div`
  width: 300px;
  margin: 50px auto 0 auto;
  button {
    opacity: 100%;
    background-color: var(--orangeCore);
    color: var(--white);
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
  }
`;
