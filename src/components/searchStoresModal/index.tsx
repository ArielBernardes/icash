import { ModalWrapper, Stores } from "./styles";
import Modal from "react-modal";
import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import { useHistory } from "react-router-dom";

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
    id: 1,
    name: "Candid",
    city: "São Paulo",
    category: "Roupa feminina",
    cashback: 15,
    store_img:
      "https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 2,
    name: "Home",
    city: "São Paulo",
    cashback: 25,
    category: "Restaurante",
    store_img:
      "https://images.unsplash.com/photo-1535567679266-c113f99615bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80",
  },
  {
    id: 3,
    name: "Pharmacy",
    city: "São Paulo",
    category: "Farmácia",
    cashback: 5,
    store_img:
      "https://images.unsplash.com/photo-1603706580932-6befcf7d8521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  },
  {
    id: 4,
    name: "Magna Carta",
    city: "São Paulo",
    category: "Restaurante",
    cashback: 35,
    store_img:
      "https://images.unsplash.com/photo-1506739738848-3da37ba381db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80",
  },
  {
    id: 5,
    name: "Circo's",
    city: "São Paulo",
    category: "Restaurante",
    cashback: 10,
    store_img:
      "https://images.unsplash.com/photo-1505066827145-34bcde228211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=619&q=80",
  },
];

interface ModalProps {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openModal: () => void;
  setMountCarousel: Dispatch<SetStateAction<boolean>>;
}

const SearchStoreModal = ({
  modalIsOpen,
  setIsOpen,
  openModal,
  setMountCarousel,
}: ModalProps) => {
  const history = useHistory();

  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredStores, setFilteredStores] = useState<store[]>([] as store[]);

  const closeModal = () => {
    setIsOpen(false);
    setMountCarousel(true);
  };

  const handleModal = () => {
    searchStores();
    setSearchInput("");
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const searchStores = () => {
    if (searchInput === "") return;
    setFilteredStores([
      ...filteredStores,
      ...stores.filter(
        (store) =>
          store.name.toLowerCase().includes(searchInput.toLowerCase()) ||
          store.category.toLowerCase().includes(searchInput.toLowerCase())
      ),
    ]);
    setSearchInput("");
  };

  const cleanSearch = () => {
    setFilteredStores([]);
    setIsOpen(false);
    setMountCarousel(true);
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <ModalWrapper>
        <div className="modalHeader">
          <h3>Encontre lojas por nome ou categoria</h3>
          <span className="closeModal" onClick={closeModal}>
            X
          </span>
          <input
            placeholder="nome da loja ou categoria"
            value={searchInput}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchInput(e.target.value)
            }
          />
          <Button onClick={handleModal}>Pesquisar</Button>
          <Button onClick={cleanSearch}>Limpar</Button>
        </div>
        <Stores>
          <h3>{filteredStores.length} lojas encontradas oferecem cashback:</h3>
          {filteredStores &&
            filteredStores.map((store, index) => (
              <div key={index} className="searchWrapper">
                <ul>
                  <li
                    onClick={() => {
                      history.push(`/store/${store.id}`);
                      window.location.reload();
                    }}
                  >
                    <span className="cashback"> {store.cashback}% -</span>
                    <span> {store.name}</span> {store.category}
                  </li>
                </ul>
              </div>
            ))}
        </Stores>
      </ModalWrapper>
    </Modal>
  );
};

export default SearchStoreModal;
