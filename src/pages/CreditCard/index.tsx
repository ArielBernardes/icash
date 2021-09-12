import AddCreditCardModal from "../../components/AddCreditCardModal";
import CardCredit from "../../components/CardCredit";
import { useCreditCards } from "../../providers/CreditCards";
import { CardsList, Container, Header, Img, Subtitle, Title } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { Link } from "react-router-dom";

const CreditCard = () => {
  const { creditCards } = useCreditCards();

  return (
    <>
      <Link to="/user-profile">
        <Img src={arrowLeft} alt="voltar" />
      </Link>
      <Container>
        <Header />
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
            <Subtitle>
              Você ainda não tem cartões de crédito cadastrados.
            </Subtitle>
          )}
        </CardsList>
      </Container>
    </>
  );
};

export default CreditCard;
