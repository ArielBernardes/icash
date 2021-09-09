import { useState } from "react";
import Modal from "react-modal";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import {
  ButtonContainer,
  ContainerModal,
  Figure,
  FormContainer,
  InputContainer,
  OpenModal,
  TitleContainer,
} from "./styles";
import ProfileIcon from "../../assets/profileIcon.svg";

interface User {
  name?: string;
  email?: string;
  cellphone?: string;
  user_img?: string;
}

const UserUpdateModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const customStyles = {
    content: {
      display: "flex",
      alignItems: "center",
      padding: 0,
      borderRadius: "12px",
      boxShadow: "0 0 10px black",
    },
  };

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().email("Email inválido"),
    cellphone: yup
      .string()
      .matches(
        /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}-?[0-9]{4}$/,
        "*Número de celular inválido"
      ),
    user_img: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitData = (data: User) => {
    console.log(data);
    toggleModal();
  };

  return (
    <>
      <OpenModal onClick={toggleModal}>Editar perfil</OpenModal>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        <ContainerModal>
          <TitleContainer>
            <Figure>
              <img src={ProfileIcon} alt="update-user-profile-icon" />
            </Figure>
            <h2>Editar perfil</h2>
          </TitleContainer>
          <FormContainer onSubmit={handleSubmit(onSubmitData)}>
            <InputContainer>
              <Input
                colorSchema
                type="text"
                placeholder="nome"
                register={register}
                name="name"
                error={errors.name?.message}
              />
              <Input
                colorSchema
                type="text"
                placeholder="e-mail"
                register={register}
                name="email"
                error={errors.email?.message}
              />
              <Input
                colorSchema
                type="text"
                placeholder="celular"
                register={register}
                name="cellphone"
                error={errors.cellphone?.message}
              />
              <Input
                colorSchema
                type="text"
                placeholder="anexar foto"
                register={register}
                name="user_img"
                error={errors.user_img?.message}
              />
            </InputContainer>
            <ButtonContainer>
              <Button type="submit">Salvar</Button>
            </ButtonContainer>
          </FormContainer>
        </ContainerModal>
      </Modal>
    </>
  );
};

export default UserUpdateModal;
