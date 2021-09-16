import { ModalWrapper, Stores } from "./styles";
import Modal from "react-modal";
import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import { useStoreRegister } from "../../providers/store-register";
import "./styles.css";

interface IStores {
  name: string;
  address: string;
  city: string;
  category: string;
  cashback: number;
  working_hours: string;
  telephone: string;
  store_img: string;
  open: string;
  onSale: string;
  id: number;
}

interface ModalProps {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openModal: () => void;
}

const SearchStoreModal = ({
  modalIsOpen,
  setIsOpen,
  openModal,
}: ModalProps) => {
  const { stores } = useStoreRegister();
  const history = useHistory();
  const [searchInput, setSearchInput] = useState<string>("");
  const [filteredStores, setFilteredStores] = useState<IStores[]>(
    [] as IStores[]
  );

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleModal = () => {
    searchStores();
    setSearchInput("");
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
    closeModal();
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      className="SearchModal"
    >
      <ModalWrapper>
        <div className="modalHeader">
          <h3>Encontre lojas por nome ou categoria</h3>
          <span className="closeModal" onClick={cleanSearch}>
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
