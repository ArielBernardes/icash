import {
  BtnClose,
  BtnSubmit,
  Container,
  FormStore,
} from "../ModalStore/styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useStoreRegister } from "../../providers/store-register";
import { Input } from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IData } from "../../types/storeRegister";

const ModalUpdateStore = () => {
  const { setShowModalStore, storeUpdate } = useStoreRegister();

  const schema = yup.object().shape({
    name: yup.string(),
    address: yup.string(),
    city: yup.string(),
    category: yup.string(),
    cashback: yup.string(),
    working_hours: yup.string(),
    telephone: yup.string(),
    store_img: yup.string(),
    open: yup.string(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleRegister = (data: IData) => {
    console.log(data);
    storeUpdate(data, setShowModalStore);
    reset();
  };
  return (
    <Container>
      <BtnClose onClick={() => setShowModalStore(false)}>
        <img src={arrowLeft} alt="close" />
      </BtnClose>
      <h1>Atualizar dados</h1>
      <FormStore onSubmit={handleSubmit(handleRegister)}>
        <Input
          type="text"
          name="name"
          error={errors.name?.message}
          register={register}
          placeholder="Nome da loja"
        />

        <Input
          type="text"
          name="address"
          error={errors.address?.message}
          register={register}
          placeholder="Endereço"
        />

        <Input
          type="text"
          name="city"
          error={errors.city?.message}
          register={register}
          placeholder="Cidade"
        />

        <Input
          type="number"
          name="cashback"
          error={errors.cashback?.message}
          register={register}
          placeholder="Cashback oferecido"
        />

        <Input
          type="text"
          name="working_hours"
          error={errors.working_hours?.message}
          register={register}
          placeholder="Horário de funcionamento"
        />

        <Input
          type="number"
          name="telephone"
          error={errors.telephone?.message}
          register={register}
          placeholder="Telefone"
        />

        <Input
          type="text"
          name="store_img"
          error={errors.store_img?.message}
          register={register}
          placeholder="Link da imagem"
        />

        <Input
          type="text"
          name="categoria"
          error={errors.category?.message}
          register={register}
          placeholder="Segmento"
        />

        <Input
          type="text"
          name="open"
          error={errors.open?.message}
          register={register}
          placeholder="Dias de funcionamento"
        />

        <BtnSubmit type="submit">Atualizar</BtnSubmit>
      </FormStore>
    </Container>
  );
};

export default ModalUpdateStore;
