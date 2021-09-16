import {
  Container,
  Payment,
  PaymentOptions,
  Logo,
  TextMobile,
  TextDesktop,
  Wallet,
  Content,
  ICashCard,
  ICashback,
  BackArrow,
} from "./styles";
import { motion } from "framer-motion";
import WalletIMG from "../../assets/walletPaymentScreen.svg";
import ICashIMG from "../../assets/iCashPayScreenLogo.svg";
import ICashCardIMG from "../../assets/iCashCard.svg";
import IMGLogo from "../../assets/LogoHeaderPayment.svg";
import HeaderUser from "../../components/HeaderUser";
import BackArrowIMG from "../../assets/ArrowLeftPayment.svg";
// import ArrowNext from "../../assets/ArrowPaymentScreen.svg";

import { useHistory } from "react-router-dom";
import HeaderDesktopUserWallet from "../../components/HeaderDesktopUserWallet";

const PaymentScreen = () => {
  const history = useHistory();

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
          <Wallet src={WalletIMG} alt="Carteira" />
          <Logo>
            <img src={IMGLogo} alt="Logo" />
          </Logo>
          <TextDesktop>
            <h2>Escolha a forma de pagamento</h2>
          </TextDesktop>
          <TextMobile>
            <h3>Forma de pagamento</h3>
          </TextMobile>
        </Payment>
        <PaymentOptions>
          <Content onClick={() => history.push("/cardpayment")}>
            <ICashCard src={ICashCardIMG} alt="Cartão" />
          </Content>
          <Content onClick={() => history.push("/cashbackpayment")}>
            <ICashback src={ICashIMG} alt="Cashback" />
          </Content>
        </PaymentOptions>
        {/* <Next onClick={nextPage}>
          <Arrow src={ArrowNext} alt="Avançar" />
        </Next> */}
        <BackArrow onClick={() => history.push("/dashboard")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentScreen;
