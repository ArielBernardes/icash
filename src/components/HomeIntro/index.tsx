import { LoggingInPaths } from "./styles";
import ArrowLeft from "../../assets/arrowLeft.svg";
import ArrowRight from "../../assets/arrowRight.svg";
import { useHistory } from "react-router-dom";
import { History } from "history";
import React from "react";

interface Home {
  history?: History;
  handleNavigation?: (path: string) => void;
}

const HomeIntro: React.FC<Home> = () => {
  const history = useHistory();

  const handleNavigation = (path: string) => {
    history.push(path);
  };
  return (
    <LoggingInPaths>
      <div onClick={() => handleNavigation("/login")} className="loginWrapper">
        <span>Já tenho conta</span>
        <img src={ArrowRight} alt="logo-to-login" />
      </div>
      <div
        onClick={() => handleNavigation("/signup")}
        className="accountWrapper"
      >
        <img src={ArrowLeft} alt="arrow-to-signUp" />
        <span>Quero abrir minha conta</span>
      </div>
      <div
        onClick={() => handleNavigation("/loyalty")}
        className="loginWrapper"
      >
        <span>Ganhe uma surpresa</span>
        <img src={ArrowRight} alt="logo-to-login" />
      </div>
    </LoggingInPaths>
  );
};

export default HomeIntro;
