import { FormContainer } from "./styles";
import Input from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import Enter from "../../assets/enter.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRegister } from "../../providers/Register";
import { useHistory } from "react-router-dom";

interface userSignUpData {
  email: string;
  password: string;
  passwordConfirm: string;
}

const RegisterForm = () => {
  const { registerUser } = useRegister();
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve ter no mínimo 6 digitos")
      .required("Campo obrigatório")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])",
        "Senha deve ter pelo menos um caracter minúsculo, um maiúsculo, um número e um caracter especial"
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Senha errada")
      .required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data: userSignUpData) => {
    registerUser(data, history);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>
          Cadastro <span>iCash</span>
        </h2>
        <Input
          type="text"
          placeholder="nome"
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
          type="password"
          placeholder="senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Input
          type="password"
          placeholder="confirmar senha"
          register={register}
          name="passwordConfirm"
          error={errors.passwordConfirm?.message}
        />
        <Button type="submit">enviar</Button>
        <Link to="/login" className="account">
          <div>Já tenho conta</div>
          <img src={Enter} alt="go-to-login" />
        </Link>
      </form>
    </FormContainer>
  );
};

export default RegisterForm;
