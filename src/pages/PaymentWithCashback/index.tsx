import { motion } from "framer-motion";
import {
  Container,
  Payment,
  LogoImage,
  PaymentOptions,
  DesktopText,
  Proof,
  Value,
  Pay,
  AvailableValue,
  CashbackValue,
  ValueToPay,
  RemaingBalance,
  BackArrow,
} from "./styles";
import ProofIMG from "../../assets/paymentProof.svg";
import BackArrowIMG from "../../assets/ArrowLeftPayment.svg";
import { useHistory } from "react-router";
import HeaderDesktopUserWallet from "../../components/HeaderDesktopUserWallet";
import Logo from "../../assets/LogoHeaderPayment.svg";
import { usePayment } from "../../providers/Payment";

const PaymentWithCashback = () => {
  const history = useHistory();
  const { finishedCashbackPay } = usePayment();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <HeaderDesktopUserWallet />
        <Payment>
          <LogoImage>
            <img src={Logo} alt="Logo" />
          </LogoImage>
          <DesktopText>
            <h1>Pagamento com</h1>
            <h1>Icash</h1>
          </DesktopText>
          <Proof src={ProofIMG} alt="ComprovanteIMG" />
          <h3>Minha conta</h3>
          <p>
            Você está realizando um pagamento com cashback em Adidas Shopping
            Iguatemi - Campinas - SP
          </p>
        </Payment>
        <PaymentOptions>
          <ValueToPay>
            <h2>R$ {}</h2>
            <div>
              <p>120,30</p>
            </div>
          </ValueToPay>
          <CashbackValue>
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
          </CashbackValue>
        </PaymentOptions>
        <Pay>
          <button onClick={() => finishedCashbackPay(20)}>Pagar conta</button>
        </Pay>
        <BackArrow onClick={() => history.push("/payment")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCashback;
