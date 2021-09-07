import { HomePageContainer, MenuWrapper, ImgWrapper } from "./styles";
import logoIcash from "../../assets/logoIntro.png";
import logoIcash2 from "../../assets/logo.png";
import HomeIntro from "../../components/HomeIntro";
import Image from "../../components/Image";
import Button from "../../components/Button";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface HomeData {
  displayMenu: boolean;
  displayLogos: boolean;
}

const Home: React.FC<HomeData> = () => {
  const [displayMenu, setDisplayMenu] = useState<boolean>(false);
  const [displayLogos, setDisplayLogos] = useState<boolean>(true);

  const handleDisplays = () => {
    setDisplayMenu(!displayMenu);
    setDisplayLogos(!displayLogos);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <HomePageContainer>
        <ImgWrapper displayLogos={displayLogos}>
          <Image className="logo1" src={logoIcash2} alt="logo-icash" />
          <Image className="logo2" src={logoIcash} alt="logo-icash" />
          <Button onClick={handleDisplays}>
            <span>entrar</span>
          </Button>
        </ImgWrapper>
        <MenuWrapper displayMenu={displayMenu}>
          <HomeIntro />
        </MenuWrapper>
      </HomePageContainer>
    </motion.div>
  );
};

export default Home;
