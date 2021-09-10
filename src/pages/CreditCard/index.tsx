import AddCreditCardModal from "../../components/AddCreditCardModal";
import CardCredit from "../../components/CardCredit";
import { useCreditCards } from "../../providers/CreditCards";
import { CardsList, Container, Title } from "./styles";

const CreditCard = () => {
  const { creditCards } = useCreditCards();

  return (
    <Container>
      <Title>Meus cartões</Title>
      <AddCreditCardModal />
      <CardsList>
        {creditCards[0] !== undefined ? (
          creditCards.map((creditCard) => (
            <li key={creditCard.id}>
              <CardCredit creditCard={creditCard} />
            </li>
          ))
        ) : (
          <h2>Você ainda não tem cartões de crédito cadastrados.</h2>
        )}
      </CardsList>
    </Container>
  );
};

export default CreditCard;
