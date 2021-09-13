import { motion } from "framer-motion";
import {
  Container,
  Payment,
  PaymentOptions,
  Proof,
  Value,
  Options,
  Pay,
  BackArrow,
} from "./styles";
import ProofIMG from "../../assets/paymentProof.svg";
import BackArrowIMG from "../../assets/ArrowLeftPayment.svg";
import { useHistory } from "react-router-dom";

const PaymentWithCard = () => {
  const history = useHistory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Payment>
          <Proof src={ProofIMG} alt="ComprovanteIMG" />
          <h3>Minha conta</h3>
          <p>
            Você está realizando um pagamento em Adidas Shopping Iguatemi -
            Campinas - SP
          </p>
        </Payment>
        <PaymentOptions>
          <Value>
            <h2>R$ </h2>
            <div>
              <p>120,30</p>
            </div>
          </Value>
          <Options>
            <div className="wallet">
              <h1>R$12,03</h1>
              <p>Acumulados na sua carteira</p>
            </div>
            <div className="cashback">
              <h1>10%</h1>
              <p>Cashback</p>
            </div>
          </Options>
          <Pay>Pagar conta</Pay>
        </PaymentOptions>
        <BackArrow onClick={() => history.push("/payment")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCard;
