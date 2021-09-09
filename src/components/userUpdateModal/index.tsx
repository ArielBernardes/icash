import { useState } from "react";
import Modal from "react-modal";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";

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
      <Button onClick={toggleModal}>Abrir</Button>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={toggleModal}
      >
        <form onSubmit={handleSubmit(onSubmitData)}>
          <Input
            colorSchema
            type="name"
            placeholder="name"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            type="email"
            placeholder="email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            type="cellphone"
            placeholder="cellphone"
            register={register}
            name="cellphone"
            error={errors.cellphone?.message}
          />
          <Input
            type="user_img"
            placeholder="user_img"
            register={register}
            name="user_img"
            error={errors.user_img?.message}
          />
          <button type="submit">Salvar</button>
        </form>
      </Modal>
    </>
  );
};

export default UserUpdateModal;
