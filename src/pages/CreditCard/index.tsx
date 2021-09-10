import AddCreditCardModal from "../../components/AddCreditCardModal";
import { useCreditCards } from "../../providers/CreditCards";

const CreditCard = () => {
  const { creditCards } = useCreditCards();

  return (
    <div>
      <h1>Meus cartões</h1>
      <AddCreditCardModal />
      <ul>
        {creditCards.map((creditCard) => (
          <li key={creditCard.id}>{creditCard.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreditCard;
