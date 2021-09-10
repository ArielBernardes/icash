import { motion } from "framer-motion";
import { Container, Payment, PaymentOptions } from "./styles";

const PaymentWithCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <Payment></Payment>
        <PaymentOptions></PaymentOptions>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCard;
