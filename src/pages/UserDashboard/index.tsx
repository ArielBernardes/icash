import { motion } from "framer-motion";
import {
  DashboardPageWrapper,
  Header,
  SubHeader,
  Stores,
  Footer,
} from "./styles";
import SearchIcon from "../../assets/search.svg";
import FormLogo from "../../assets/LogoForm.svg";
import { useState } from "react";
import WalletIcon from "../../assets/wallet.svg";
import { useHistory } from "react-router-dom";
import SearchStoreModal from "../../components/searchStoresModal";
import { useStoreRegister } from "../../providers/store-register";
import Carousel from "react-material-ui-carousel";
import { useUpdate } from "../../providers/UserProvider";
import formatValue from "../../utils/formatValue";
import Avatar from "../../assets/man.svg";

const UserDashboard = () => {
  const { stores } = useStoreRegister();
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);

  const { user } = useUpdate();
  const { name, cashback } = user;
  const userCashback = formatValue(cashback);

  const handleMountingCarousel = () => {
    openModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardPageWrapper>
        <Header>
          <div className="headerWrapper">
            <div>
              Olá, <span>{name}</span>
            </div>
            <div className="walletWrapper">
              <div className="infoWallet">
                <img src={WalletIcon} alt="go-to-user-transactions" />
                <span>{userCashback}</span>
                <figure className="profilePic">
                  <img
                    onClick={() => {
                      history.push("/user-profile");
                    }}
                    src={Avatar}
                    alt="go-to-user-profile"
                  />
                </figure>
              </div>
            </div>
          </div>
        </Header>
        <SubHeader>
          <figure className="imgLogo">
            <img src={FormLogo} alt="icash-login-form" />
          </figure>
          <figure onClick={handleMountingCarousel} className="searchIcon">
            <img src={SearchIcon} alt="find-stores" />
          </figure>
        </SubHeader>
        <SearchStoreModal
          modalIsOpen={modalIsOpen}
          setIsOpen={setIsOpen}
          openModal={openModal}
        />
        <Stores>
          <Carousel
            fullHeightHover={false}
            navButtonsAlwaysInvisible={true}
            indicators={false}
            interval={4000}
            animation="slide"
          >
            {stores.map((store, index) => (
              <div key={index}>
                <p>
                  <span>{store.cashback}%</span> cashback
                </p>
                <img
                  className="image"
                  src={store.store_img}
                  alt={store.name}
                  onClick={() => {
                    history.push(`/store/${store.id}`);
                  }}
                />
                <p>
                  <span>{store.name}</span>
                </p>
                <p>{store.city}</p>
                <p>{store.category}</p>
              </div>
            ))}
          </Carousel>
        </Stores>
        <Footer>
          <div className="footerWrapper">
            <div className="infoWallet">
              <img src={WalletIcon} alt="go-to-user-transactions" />
              <span>{userCashback}</span>
            </div>
            <figure className="profilePic">
              <img
                onClick={() => {
                  history.push("/user-profile");
                }}
                src={Avatar}
                alt="go-to-user-profile"
              />
            </figure>
          </div>
        </Footer>
      </DashboardPageWrapper>
    </motion.div>
  );
};

export default UserDashboard;
