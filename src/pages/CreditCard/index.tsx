import { motion } from "framer-motion";
import AddCreditCardModal from "../../components/AddCreditCardModal";
import CardCredit from "../../components/CardCredit";
import { useCreditCards } from "../../providers/CreditCards";
import {
  CardsList,
  Container,
  Header,
  Img,
  Subtitle,
  Title,
  SubHeader,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { Link } from "react-router-dom";
import HeaderDesktopUserWallet from "../../components/HeaderDesktopUserWallet";
import loading from "../../assets/loading.svg";

const CreditCard = () => {
  const { creditCards, isLoading } = useCreditCards();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {window.innerWidth < 899 && (
        <Link to="/user-profile">
          <Img src={arrowLeft} alt="voltar" />
        </Link>
      )}
      <Container>
        {window.innerWidth < 899 ? <Header /> : <HeaderDesktopUserWallet />}
        <SubHeader>
          <Title>Cartão de Crédito</Title>
          <AddCreditCardModal />
        </SubHeader>
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
    </motion.div>
  );
};

export default CreditCard;
