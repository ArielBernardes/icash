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
  Next,
} from "./styles";
import { motion } from "framer-motion";
import WalletIMG from "../../assets/walletPaymentScreen.svg";
import ICashIMG from "../../assets/iCashPayScreenLogo.svg";
import ICashCardIMG from "../../assets/iCashCard.svg";
import ArrowNext from "../../assets/ArrowPaymentScreen.svg";
import { usePayment } from "../../providers/Payment";

const PaymentScreen = () => {
  const { payWithCard, payWithCashback, nextPage } = usePayment();

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
          <Content onClick={payWithCard}>
            <ICashCard src={ICashCardIMG} alt="Cartão" />
          </Content>
          <Content onClick={payWithCashback}>
            <ICashback src={ICashIMG} alt="Cashback" />
          </Content>
        </PaymentOptions>
        <Next onClick={nextPage}>
          <Arrow src={ArrowNext} alt="Avançar" />
        </Next>
      </Container>
    </motion.div>
  );
};

export default PaymentScreen;
