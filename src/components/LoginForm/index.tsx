import { FormContainer } from "./styles";
import { Input, InputPassword } from "../Input";
import Button from "../Button";
import { Link } from "react-router-dom";
import FormLogo from "../../assets/LogoForm.svg";
import { useForm } from "react-hook-form";
import HomeLogo from "../../assets/home.svg";
import PlusSign from "../../assets/plus.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import { userData } from "../../types/userLoginData";

const LoginForm = () => {
  const history = useHistory();
  const { login } = useAuth();

  const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
  const validator = new RegExp(regex);

  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Senha deve ter no mínimo 6 digitos")
      .required("Campo obrigatório")
      .matches(
        validator,
        "Senha deve ter pelo menos um caractere minúsculo, um maiúsculo, um número e um caractere especial"
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = (data: userData) => {
    login(data, history);
    reset();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmitData)}>
        <img src={FormLogo} alt="icash-login-form" />
        <Input
          colorSchema
          type="email"
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <InputPassword
          colorSchema
          type="password"
          placeholder="Senha"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <Button type="submit">Login</Button>
        <Link to="/signup" className="openAccount">
          <div>Abrir uma conta</div>
          <img src={PlusSign} alt="to-open-account" />
        </Link>
        <Link to="/" className="goHome">
          <div>Voltar para Home</div>
          <img src={HomeLogo} alt="to-open-account" />
        </Link>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
