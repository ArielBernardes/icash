import AddCreditCardModal from "../../components/AddCreditCardModal";
import CardCredit from "../../components/CardCredit";
import { useCreditCards } from "../../providers/CreditCards";

const CreditCard = () => {
  const { creditCards } = useCreditCards();

  return (
    <div>
      <h1>Meus cartões</h1>
      <AddCreditCardModal />
      <ul>
        {creditCards.map((creditCard) => (
          <li key={creditCard.id}>
            <CardCredit creditCard={creditCard} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreditCard;
