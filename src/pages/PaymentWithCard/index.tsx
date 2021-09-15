import { motion } from "framer-motion";
import {
  Container,
  Payment,
  PaymentOptions,
  Proof,
  DesktopProof,
  Value,
  Options,
  DesktopTitle,
  Icash,
  Pay,
  BackArrow,
} from "./styles";
import ProofMobile from "../../assets/paymentProof.svg";
import ProofDesktop from "../../assets/ProofPaymentScreenDesktop.svg";
import BackArrowIMG from "../../assets/ArrowLeftPayment.svg";
import { useHistory } from "react-router-dom";
import HeaderDesktopUserWallet from "../../components/HeaderDesktopUserWallet";
import Logo from "../../assets/LogoHeaderPayment.svg";
// import ApprovedTransactionModal from "../../components/ApprovedTransactionModal";
import { usePayment } from "../../providers/Payment";

const PaymentWithCard = () => {
  const history = useHistory();
  const { finishCardPay } = usePayment();

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
          <Proof src={ProofMobile} alt="Comprovante" />
          <DesktopProof src={ProofDesktop} alt="Comprovante" />
          <h3>Minha conta</h3>
          <p>
            Você está realizando um pagamento em Adidas Shopping Iguatemi -
            Campinas - SP
          </p>
        </Payment>
        <Icash>
          <img src={Logo} alt="Logo" />
        </Icash>
        <DesktopTitle>Pagamento com cartão</DesktopTitle>
        <PaymentOptions>
          <Value>
            <h2>R$ </h2>
            <div>
              <p>120,30</p>
            </div>
          </Value>
          <Options>
            <div>
              <h1>R$ 12,03</h1>
              <p>Acumulados na sua carteira</p>
            </div>
            <div>
              <h1>10%</h1>
              <p>Cashback</p>
            </div>
          </Options>
          <Pay onClick={() => finishCardPay(50)}>Pagar conta</Pay>
        </PaymentOptions>
        <BackArrow onClick={() => history.push("/payment")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCard;
