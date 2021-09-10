import { Container } from "./styles";
import { CreditCardData } from "../../types/creditCardData";

interface CardCreditProps {
  creditCard: CreditCardData;
}

const CardCredit = ({ creditCard }: CardCreditProps) => {
  return (
    <>
      <Container>
        <h2>{creditCard.name}</h2>
        <p>{creditCard.number}</p>
        <p>Validade: {creditCard.good_thru}</p>
        <p>{creditCard.card_holder}</p>
      </Container>
    </>
  );
};

export default CardCredit;
