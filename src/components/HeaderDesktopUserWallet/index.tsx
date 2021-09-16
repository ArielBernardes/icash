import { Container, Back, Info, Avatar } from "./styles";
import BackArrow from "../../assets/BackArrowPaymentDesktop.svg";
import WalletImage from "../../assets/DesktopWalletPayment.svg";
import { useUpdate } from "../../providers/UserProvider";
import formatValue from "../../utils/formatValue";
import { useHistory } from "react-router-dom";

const HeaderDesktopUserWallet = () => {
  const { user } = useUpdate();
  const { cashback } = user;
  const userCashback = formatValue(cashback);

  const history = useHistory();

  return (
    <Container>
      <Back>
        <img onClick={() => history.goBack()} src={BackArrow} alt="Voltar" />
      </Back>

      <Info>
        <img src={WalletImage} alt="Avatar" />
        <h3>{userCashback}</h3>
        <Avatar src="https://i.pravatar.cc/70" alt="Avatar" />
      </Info>
    </Container>
  );
};

export default HeaderDesktopUserWallet;
