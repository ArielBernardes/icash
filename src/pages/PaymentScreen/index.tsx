import { Container, Payment, PaymentOptions, Text, Wallet } from "./styles";
import { motion } from "framer-motion";
import WalletIMG from "../../assets/walletPaymentScreen.svg";

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
        <PaymentOptions></PaymentOptions>
      </Container>
    </motion.div>
  );
};

export default PaymentScreen;
