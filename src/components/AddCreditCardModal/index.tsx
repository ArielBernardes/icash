import { useState } from "react";
import Modal from "react-modal";
import Button from "../Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import {
  BtnCloseModal,
  ButtonContainer,
  ContainerModal,
  Div,
  Figure,
  FormContainer,
  InputContainer,
  OpenModal,
  TitleContainer,
} from "./styles";
import CreditCardIcon from "../../assets/creditCardIcon.svg";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useCreditCards } from "../../providers/CreditCards";

interface User {
  number: string;
  card_holder: string;
  name: string;
  good_thru: string;
  verification_code: string;
}

const AddCreditCardModal = () => {
  const { addCreditCard } = useCreditCards();

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
      inset: "10px 30px",
    },
  };

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    number: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "16 dígitos com espaço a cada 4"),
    card_holder: yup.string().required("Campo obrigatório"),
    good_thru: yup.string().required("Campo obrigatório"),
    verification_code: yup
      .string()
      .required("Campo obrigatório")
      .matches(/^\d{3}$/, "Deve ter 3 dígitos"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitData = (data: User) => {
    addCreditCard(data);
    reset();
    toggleModal();
  };

  return (
    <>
      <OpenModal onClick={toggleModal}>
        <AiOutlinePlusCircle />
        Adicionar cartão
      </OpenModal>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={toggleModal}
        style={customStyles}
      >
        <BtnCloseModal onClick={toggleModal}>X</BtnCloseModal>
        <ContainerModal>
          <TitleContainer>
            <Figure>
              <img src={CreditCardIcon} alt="update-user-profile-icon" />
            </Figure>
            <h2>Adicionar cartão</h2>
          </TitleContainer>
          <FormContainer onSubmit={handleSubmit(onSubmitData)}>
            <InputContainer>
              <Input
                colorSchema
                type="text"
                placeholder="bandeira do cartão"
                register={register}
                name="name"
                error={errors.name?.message}
              />
              <Input
                colorSchema
                type="text"
                placeholder="número do cartão"
                register={register}
                name="number"
                error={errors.number?.message}
              />
              <Input
                colorSchema
                type="text"
                placeholder="nome impresso no cartão"
                register={register}
                name="card_holder"
                error={errors.card_holder?.message}
              />
              <Div>
                <Input
                  colorSchema
                  type="text"
                  placeholder="validade"
                  register={register}
                  name="good_thru"
                  error={errors.good_thru?.message}
                />
                <Input
                  colorSchema
                  type="text"
                  placeholder="cvv"
                  register={register}
                  name="verification_code"
                  error={errors.verification_code?.message}
                />
              </Div>
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

export default AddCreditCardModal;
