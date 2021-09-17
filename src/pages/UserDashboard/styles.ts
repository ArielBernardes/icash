import styled from "styled-components";

export const DashboardPageWrapper = styled.div`
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.div`
  background-color: var(--orangeCore);
  width: 100vw;
  height: 12vh;
  display: flex;
  color: var(--lightOrange);
  font-size: 1.5rem;

  .headerWrapper {
    margin: auto;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .walletWrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    display: none;

    .infoWallet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .profilePic {
        width: 15%;

        img {
          width: 100%;
          border-radius: 50%;
          cursor: pointer;
        }

        @media only screen and (min-width: 1440px) {
          width: 20%;
        }
      }
    }

    @media only screen and (min-width: 1000px) {
      display: inline-flex;
    }

    @media only screen and (min-width: 1200px) {
      width: 40%;
    }

    @media only screen and (min-width: 1440px) {
      width: 35%;
    }

    @media only screen and (min-width: 2000px) {
      width: 30%;
    }
  }

  span {
    color: var(--white);
  }

  @media only screen and (min-width: 1000px) {
    .headerWrapper {
      width: 65%;
      justify-content: space-between;
    }
  }
`;

export const SubHeader = styled.div`
  margin: 10px auto;
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .imgLogo {
    width: 30%;

    img {
      width: 100%;
    }

    @media only screen and (min-width: 900px) {
      width: 20%;
    }
  }

  .searchIcon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: var(--grayHome);
    cursor: pointer;
  }
`;

export const Stores = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;

  p {
    color: var(--grayStandOut);
    margin-bottom: 15px;
    font-weight: 600;
    text-align: center;

    span {
      color: var(--orangeCore);
      font-weight: 600;
    }
  }

  .image {
    display: flex;
    height: 20pc;
    width: 200px;
    border-radius: 30px;
    cursor: pointer;
    border: 5px solid var(--lightOrange);
    margin-bottom: 10px;

    @media only screen and (min-width: 1440px) {
      height: 30pc;
    }
  }

  @media only screen and (min-width: 576px) {
    width: 90%;
  }
`;

export const Footer = styled.div`
  background-color: var(--grayHome);
  width: 100vw;
  height: 12vh;
  display: flex;
  color: var(--orangeCore);
  display: flex;
  font-weight: 600;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;

  .footerWrapper {
    margin: auto;
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .profilePic {
      width: 15%;

      img {
        width: 100%;
        border-radius: 50%;
        cursor: pointer;
      }

      @media only screen and (min-width: 600px) {
        width: 8%;
      }

      @media only screen and (min-width: 1000px) {
        width: 6%;
      }
    }
  }

  .infoWallet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    width: 40%;

    @media only screen and (min-width: 768px) {
      width: 40%;
    }
  }

  @media only screen and (min-width: 1000px) {
    visibility: hidden;
  }
`;
