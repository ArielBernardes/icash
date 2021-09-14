import styled from "styled-components";

interface ContainerProps {
  image: string;
}

export const BackgroundMobile = styled.div<ContainerProps>`
  background: url(${(props) => props.image});
  background-size: cover;
  height: 100vh;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 0;
  opacity: 0.12;
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
`;

export const Title = styled.div`
  padding: 0 25%;
  h2 {
    padding: 12px 0;
  }
`;

export const StoreInfo = styled.div`
  padding: 0 15%;
  display: flex;
  justify-content: end;
`;

export const Cashback = styled.div`
  width: 100px;

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