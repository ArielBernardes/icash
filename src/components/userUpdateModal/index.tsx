import { useState } from "react";
import Modal from "react-modal";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import {
  Figure,
  FormContainer,
  InputContainer,
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
      <div onClick={toggleModal}>Editar perfil</div>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={toggleModal}
      >
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
              type="name"
              placeholder="name"
              register={register}
              name="name"
              error={errors.name?.message}
            />
            <Input
              colorSchema
              type="email"
              placeholder="email"
              register={register}
              name="email"
              error={errors.email?.message}
            />
            <Input
              colorSchema
              type="cellphone"
              placeholder="cellphone"
              register={register}
              name="cellphone"
              error={errors.cellphone?.message}
            />
            <Input
              colorSchema
              type="user_img"
              placeholder="anexar foto"
              register={register}
              name="user_img"
              error={errors.user_img?.message}
            />
          </InputContainer>
          <Button type="submit">Salvar</Button>
        </FormContainer>
      </Modal>
    </>
  );
};

export default UserUpdateModal;
