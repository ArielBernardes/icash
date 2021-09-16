import { motion } from "framer-motion";
import { PageContainer, PageHeader, PageBody } from "./styles";
import Button from "../../components/Button";
import LoyaltyImg from "../../assets/loyalty.png";
import WhiteLogo from "../../assets/logoWhite.png";
import { useHistory } from "react-router-dom";

const Loyalty = () => {
  const history = useHistory();

  const winASurprise = () => {
    history.push("/signup");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PageContainer>
        <PageHeader>
          <div className="inputWrapper">
            <img src={WhiteLogo} alt="icash-logo" />
            <h3>Aperte o botão, crie a sua conta e ganhe uma surpresa!</h3>
            <Button type="button" onClick={winASurprise}>
              Quero ganhar uma surpresa
            </Button>
          </div>
        </PageHeader>
        <PageBody>
          <img src={LoyaltyImg} alt="loyalty-img" />
        </PageBody>
      </PageContainer>
    </motion.div>
  );
};

export default Loyalty;
