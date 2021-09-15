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

interface store {
  id: number;
  name: string;
  city: string;
  category: string;
  cashback: number;
  store_img: string;
}

const stores: store[] = [
  {
    id: 2,
    name: "Candid",
    city: "São Paulo",
    category: "Roupa feminina",
    cashback: 15,
    store_img:
      "https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 3,
    name: "Home",
    city: "São Paulo",
    cashback: 25,
    category: "Restaurante",
    store_img:
      "https://images.unsplash.com/photo-1535567679266-c113f99615bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80",
  },
  {
    id: 4,
    name: "Pharmacy",
    city: "São Paulo",
    category: "Farmácia",
    cashback: 5,
    store_img:
      "https://images.unsplash.com/photo-1603706580932-6befcf7d8521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 5,
    name: "Magna Carta",
    city: "São Paulo",
    category: "Restaurante",
    cashback: 35,
    store_img:
      "https://images.unsplash.com/photo-1506739738848-3da37ba381db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80",
  },
  {
    id: 6,
    name: "Circo's",
    city: "São Paulo",
    category: "Casa de Massas",
    cashback: 10,
    store_img:
      "https://images.unsplash.com/photo-1505066827145-34bcde228211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=619&q=80",
  },
];

const UserDashboard = () => {
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const openModal = () => setIsOpen(true);
  const [items, setItems] = useState(3);
  const [mountCarousel, setMountCarousel] = useState<boolean>(true);

  const handleMountingCarousel = () => {
    setMountCarousel(false);
    openModal();
  };

  useEffect(() => {
    if (mountCarousel) {
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
    }
  }, [mountCarousel]);

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
          setMountCarousel={setMountCarousel}
        />
        <Stores mountCarousel={mountCarousel}>
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
