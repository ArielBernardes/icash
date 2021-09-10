import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  AvatarUser,
  Container,
  BtnAvatar,
  DataUser,
  BtnProfile,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import Modal from "react-modal";
import { Bubble } from "react-chartjs-2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgoundColor: "blue",
    width: "80%",
  },
};

const UserProfile = () => {
  const [modalData, setModalData] = useState(false);
  const history = useHistory();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ContainerUser>
      <HeaderUser />
      <Container>
        <Link to="/user-profile">
          <img src={arrowLeft} alt="voltar" />
        </Link>
        <BtnAvatar>Foto do perfil</BtnAvatar>
      </Container>

      <AvatarUser>
        <img src="https://i.pravatar.cc/150" alt="perfil" />
      </AvatarUser>

      <BtnProfile onClick={openModal}>Editar</BtnProfile>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Hello</h2>
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
      <DataUser>
        <p>Nome: </p>
        <p>E-mail: </p>
        <p>Celular: </p>
      </DataUser>
    </ContainerUser>
  );
};

export default UserProfile;
