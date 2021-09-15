import { motion } from "framer-motion";
import { CarouselWrapper } from "react-pretty-carousel";
import {
  DashboardPageWrapper,
  Header,
  SubHeader,
  Stores,
  Footer,
} from "./styles";
import SearchIcon from "../../assets/search.svg";
import FormLogo from "../../assets/LogoForm.svg";
import { useState, useEffect } from "react";
import WalletIcon from "../../assets/wallet.svg";
import InformationIcon from "../../assets/information.svg";
import { useHistory } from "react-router-dom";
import SearchStoreModal from "../../components/searchStoresModal";
import { useStoreRegister } from "../../providers/store-register";

const UserDashboard = () => {
  const { stores } = useStoreRegister();
  const history = useHistory();
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const [items, setItems] = useState(3);

  const handleMountingCarousel = () => {
    openModal();
  };

  useEffect(() => {
    if (window.innerWidth < 576) setItems(1);
    else setItems(3);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 576) setItems(1);
      else setItems(3);
    });
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

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
              Olá, <span>User</span>
            </div>
            <div className="walletWrapper">
              <div className="infoWallet">
                <img src={WalletIcon} alt="go-to-user-transactions" />
                <span>R$ 1.134,50</span>
              </div>
              <figure className="profilePic">
                <img src="https://i.pravatar.cc/150" alt="go-to-user-profile" />
              </figure>
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
          <CarouselWrapper items={items} mode="gallery" showControls={false}>
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
                    window.location.reload();
                  }}
                />
                <p>
                  <span>{store.name}</span> - {store.city}
                </p>
                <p>{store.category}</p>
              </div>
            ))}
          </CarouselWrapper>
        </Stores>
        <Footer>
          <div className="footerWrapper">
            <img src={InformationIcon} alt="customer-service" />
            <div className="infoWallet">
              <img src={WalletIcon} alt="go-to-user-transactions" />
              <span>R$ 1.134,50</span>
            </div>
            <figure className="profilePic">
              <img src="https://i.pravatar.cc/150" alt="go-to-user-profile" />
            </figure>
          </div>
        </Footer>
      </DashboardPageWrapper>
    </motion.div>
  );
};

export default UserDashboard;
