import { motion } from "framer-motion";
import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  BtnProfileUser,
  AvatarUser,
  FooterUser,
  Container,
  ContainerBtn,
  ContainerAvatar,
  BoxTitle,
  ModalButtons,
  ModalContent,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useUpdate } from "../../providers/UserProvider";
import Modal from "react-modal";
import { useState } from "react";
import "./styles.css";
import Button from "../../components/Button";
import Icon from "../../assets/man.svg";

const UserProfile = () => {
  const history = useHistory();
  const { user, deleteAccount } = useUpdate();
  const { name, email } = user;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const sendTo = (path: string) => {
    history.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("");
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerUser>
        <HeaderUser />
        <Container>
          <Link to="/dashboard">
            <img src={arrowLeft} alt="voltar" />
          </Link>
        </Container>
        <ContainerAvatar>
          <AvatarUser>
            <img src={Icon} alt="perfil" />
          </AvatarUser>
          <BoxTitle>
            <h3>
              Olá, <span>{name}</span>{" "}
            </h3>
            <h4>{email}</h4>
          </BoxTitle>
        </ContainerAvatar>
        <ContainerBtn>
          <BtnProfileUser onClick={() => sendTo("/user-data")}>
            Dados pessoais
          </BtnProfileUser>
          <BtnProfileUser onClick={() => sendTo("/credit-cards")}>
            Cartão de crédito
          </BtnProfileUser>
          <BtnProfileUser onClick={() => sendTo("/posts")}>
            Mensagens
          </BtnProfileUser>
          <BtnProfileUser onClick={() => sendTo("/icash")}>
            Sobre ICash
          </BtnProfileUser>
        </ContainerBtn>
        <FooterUser>
          <span onClick={toggleModal}>Cancelar conta</span>
          <span onClick={handleLogout}>Sair da sessão</span>
        </FooterUser>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          onRequestClose={toggleModal}
          className="DeleteModal"
        >
          <ModalContent>
            <p>Deseja mesmo cancelar a sua conta ICash?</p>
            <ModalButtons>
              <Button onClick={deleteAccount}>Sim</Button>
              <Button onClick={toggleModal}>Não</Button>
            </ModalButtons>
          </ModalContent>
        </Modal>
      </ContainerUser>
    </motion.div>
  );
};

export default UserProfile;
