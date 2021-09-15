import { Container, Back, Info, Avatar } from "./styles";
import BackArrow from "../../assets/BackArrowPaymentDesktop.svg";
import WalletImage from "../../assets/DesktopWalletPayment.svg";
import { useUpdate } from "../../providers/UserProvider";
import formatValue from "../../utils/formatValue";

const HeaderDesktopUserWallet = () => {
  const { currentBalance } = useUpdate();

  return (
    <Container>
      <Back>
        <img src={BackArrow} alt="Voltar" />
      </Back>
      <Info>
        <img src={WalletImage} alt="Avatar" />
        <h3>{formatValue(currentBalance)}</h3>
        <Avatar src="https://i.pravatar.cc/70" alt="Avatar" />
      </Info>
    </Container>
  );
};

export default HeaderDesktopUserWallet;
