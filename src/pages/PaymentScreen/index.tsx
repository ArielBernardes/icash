import {
  Container,
  Payment,
  PaymentOptions,
  Text,
  Wallet,
  Content,
  ICashCard,
  ICashback,
  Arrow,
} from "./styles";
import { motion } from "framer-motion";
import WalletIMG from "../../assets/walletPaymentScreen.svg";
import ICashIMG from "../../assets/iCashPayScreenLogo.svg";
import ICashCardIMG from "../../assets/iCashCard.svg";
import ArrowNext from "../../assets/ArrowPaymentScreen.svg";

const PaymentScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Payment>
          <Wallet src={WalletIMG} alt="Carteira" />
          <Text>
            <h3>Forma de pagamento</h3>
          </Text>
        </Payment>
        <PaymentOptions>
          <Content>
            <ICashCard src={ICashCardIMG} alt="Cartão" />
          </Content>
          <Content>
            <ICashback src={ICashIMG} alt="Cashback" />
          </Content>
        </PaymentOptions>
        <Arrow src={ArrowNext} alt="Avançar" />
      </Container>
    </motion.div>
  );
};

export default PaymentScreen;
