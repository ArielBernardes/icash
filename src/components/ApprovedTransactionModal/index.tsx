import { Container, Text } from "./styles";
import WalletTransaction from "../../assets/TransactionFinishedModal.svg";

const ApprovedTransactionModal = () => {
  return (
    <Container>
      <img src={WalletTransaction} alt="Carteira" />
      <Text>
        <h1>Transação</h1>
        <h1>Aprovada</h1>
      </Text>
      <button>Continuar</button>
    </Container>
  );
};

export default ApprovedTransactionModal;
