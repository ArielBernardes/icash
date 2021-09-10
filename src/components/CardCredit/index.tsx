import { Container } from "./styles";

interface CreditCard {
  card_holder: string;
  good_thru: string;
  id: number;
  name: string;
  number: string;
  userId: number;
  verification_code: string;
}

interface CardCreditProps {
  creditCard: CreditCard;
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
