import {
  BtnCloseModal,
  ButtonContainer,
  Container,
  ContainerModal,
  DataContainer,
  Div,
  Figure,
  FormContainer,
  InputContainer,
  TitleContainer,
} from "./styles";
import { CreditCardData } from "../../types/creditCardData";
import Modal from "react-modal";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CreditCardIcon from "../../assets/creditCardIcon.svg";
import { Input } from "../Input";
import Button from "../Button";
import { FaRegTrashAlt } from "react-icons/fa";
import { useCreditCards } from "../../providers/CreditCards";
import "./styles.css";

interface CardCreditProps {
  creditCard: CreditCardData;
}

const CardCredit = ({ creditCard }: CardCreditProps) => {
  const { creditCards, removeCreditCard, updateCreditCard, setIsUpdated } =
    useCreditCards();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const schema = yup.object().shape({
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

  const onSubmitData = (data: CreditCardData) => {
    updateCreditCard(data, creditCards[0].id);
    reset();
    setIsUpdated(true);
    toggleModal();
  };

  const deleteCard = (cardId: number | undefined) => {
    removeCreditCard(cardId);
    toggleModal();
  };

  return (
    <>
      <Container onClick={toggleModal}>
        <h2>{creditCard.name}</h2>
        <p>{creditCard.number}</p>
        <p>Validade: {creditCard.good_thru}</p>
        <p>{creditCard.card_holder}</p>
      </Container>
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        onRequestClose={toggleModal}
        className="Modal"
      >
        <BtnCloseModal onClick={toggleModal}>X</BtnCloseModal>
        <ContainerModal>
          <TitleContainer>
            <Figure>
              <img src={CreditCardIcon} alt="update-user-profile-icon" />
            </Figure>
            <h2>Editar cartão</h2>
          </TitleContainer>
          <FormContainer onSubmit={handleSubmit(onSubmitData)}>
            <InputContainer>
              <DataContainer>
                <p>{creditCard.name}</p>
                <p>{creditCard.number}</p>
                <span onClick={() => deleteCard(creditCard.id)}>
                  <FaRegTrashAlt />
                  Excluir cartão
                </span>
              </DataContainer>
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

export default CardCredit;
