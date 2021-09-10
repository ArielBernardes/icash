import styled, { keyframes } from "styled-components";

interface ImgWrapperStyledProps {
  displayLogos: boolean;
}
interface MenuWrapperStyledProps {
  displayMenu: boolean;
}

export const HomePageContainer = styled.div`
  background-color: var(--orangeCore);
  margin: auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const appearFromLeft = keyframes`
    from {
      opacity: 0;
      transform: translateX(-50px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
`;

export const ImgWrapper = styled.div<ImgWrapperStyledProps>`
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromLeft} 1.5s;

  .logo1 {
    width: 40%;
  }

  .logo2 {
    width: 50%;
  }

  button {
    display: none;
  }

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: ${(props) => (props.displayLogos ? "inline-flex" : "none")};
    width: 90%;

    .logo1 {
      width: 70%;
    }

    .logo2 {
      width: 80%;
    }

    button {
      width: 90%;
      display: block;
    }
  }
`;

const appearFromRight = keyframes`
    from {
      opacity: 0;
      transform: translateX(50px);
    }

    to {
      opacity: 1;
      transform: translateX(0px);
    }
`;

export const MenuWrapper = styled.div<MenuWrapperStyledProps>`
  animation: ${appearFromRight} 1.3s;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    display: ${(props) => (props.displayMenu ? "block" : "none")};
  }
`;
