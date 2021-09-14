import { motion } from "framer-motion";
import {
  Container,
  Payment,
  PaymentOptions,
  Proof,
  Value,
  Pay,
  AvailableValue,
  ValueToPay,
  RemaingBalance,
  BackArrow,
} from "./styles";
import ProofIMG from "../../assets/paymentProof.svg";
import BackArrowIMG from "../../assets/ArrowLeftPayment.svg";
import { useHistory } from "react-router";

const PaymentWithCashback = () => {
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
            Você está realizando um pagamento com cashback em Adidas Shopping
            Iguatemi - Campinas - SP
          </p>
        </Payment>
        <PaymentOptions>
          <ValueToPay>
            <h2>R$ </h2>
            <div>
              <p>120,30</p>
            </div>
          </ValueToPay>
          <AvailableValue>
            <p>Valor disponível Icash</p>
          </AvailableValue>
          <Value>
            <h2>R$ </h2>
            <div>
              <p>225,40</p>
            </div>
          </Value>
          <RemaingBalance>Saldo Icash atual: R$ 105,10</RemaingBalance>
          <Pay>Pagar conta</Pay>
        </PaymentOptions>
        <BackArrow onClick={() => history.push("/payment")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCashback;
