import { motion } from "framer-motion";
import { PageContainer, PageHeader, PageBody } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import LoyaltyImg from "../../assets/loyalty.png";
import WhiteLogo from "../../assets/logoWhite.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useHistory } from "react-router-dom";
import * as yup from "yup";

interface Code {
  code: string;
}

const regex = /iCash1/;
const validator = new RegExp(regex);

const Loyalty = () => {
  const history = useHistory();
  const schema = yup.object().shape({
    code: yup
      .string()
      .min(6, "Código deve ter 6 digitos")
      .required("Campo obrigatório")
      .matches(
        validator,
        "Incorreto. Caso não possua um código, abra sua conta"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitData = ({ code }: Code) => {
    if (code === "iCash1") {
      //   toast.success("Você ganhou R$ 50,00! Crie seu perfil e boas compras!");
      history.push("/signup");
    } else {
      //   toast.error("O código inserido não é válido.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageContainer>
        <PageHeader>
          <div className="inputWrapper">
            <img src={WhiteLogo} alt="icash-logo" />
            <form onSubmit={handleSubmit(onSubmitData)}>
              <Input
                type="text"
                placeholder="insira o seu código"
                register={register}
                name="code"
                error={errors.code?.message}
              />
              <Button type="submit">enviar</Button>
            </form>
            <Link to="signup" className="openAccount">
              <div>Sem código? Abra sua conta</div>
            </Link>
          </div>
        </PageHeader>
        <PageBody>
          <img src={LoyaltyImg} alt="loyalty-img" />
        </PageBody>
      </PageContainer>
    </motion.div>
  );
};

export default Loyalty;
