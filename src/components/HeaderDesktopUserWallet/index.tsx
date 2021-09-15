import { Container, Back, Info, Avatar } from "./styles";
import BackArrow from "../../assets/BackArrowPaymentDesktop.svg";
import { useHistory } from "react-router-dom";
import WalletImage from "../../assets/DesktopWalletPayment.svg";

const HeaderDesktopUserWallet = () => {
  const history = useHistory();

  return (
    <Container>
      <Back>
        <img onClick={() => history.goBack()} src={BackArrow} alt="Voltar" />
      </Back>
      <Info>
        <img src={WalletImage} alt="Avatar" />
        <h3>R$ 1000,00</h3>
        <Avatar src="https://i.pravatar.cc/70" alt="Avatar" />
      </Info>
    </Container>
  );
};

export default HeaderDesktopUserWallet;
