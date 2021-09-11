import { ModalWrapper } from "./styles";
import Modal from "react-modal";
import React, { Dispatch, SetStateAction } from "react";

interface ModalProps {
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  openModal: () => void;
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
}

const SearchStoreModal = ({
  modalIsOpen,
  setIsOpen,
  openModal,
  searchInput,
  setSearchInput,
}: ModalProps) => {
  const closeModal = () => setIsOpen(false);

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
        </div>
        <input placeholder="nome da loja ou categoria" />
      </ModalWrapper>
    </Modal>
  );
};

export default SearchStoreModal;
