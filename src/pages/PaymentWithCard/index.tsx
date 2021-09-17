import { motion } from "framer-motion";
import {
  Container,
  Payment,
  PaymentOptions,
  Proof,
  DesktopProof,
  Value,
  Options,
  DesktopTitle,
  Icash,
  Pay,
  BackArrow,
  AvailableValue,
} from "./styles";
import ProofMobile from "../../assets/paymentProof.svg";
import ProofDesktop from "../../assets/ProofPaymentScreenDesktop.svg";
import BackArrowIMG from "../../assets/ArrowLeftPayment.svg";
import { useHistory } from "react-router-dom";
import HeaderDesktopUserWallet from "../../components/HeaderDesktopUserWallet";
import Logo from "../../assets/LogoHeaderPayment.svg";
// import ApprovedTransactionModal from "../../components/ApprovedTransactionModal";
import { usePayment } from "../../providers/Payment";
import { useStoreRegister } from "../../providers/store-register";
import { Input } from "../../components/Input";
import { useState } from "react";
import formatValue from "../../utils/formatValue";
import { useUpdate } from "../../providers/UserProvider";

interface NewData {
  cashback: number;
}

const PaymentWithCard = () => {
  const history = useHistory();
  const { finishCardPay } = usePayment();
  const [inputValue, setInputValue] = useState<string>("");
  const userId = JSON.parse(localStorage.getItem("@iCash: userId") || "");

  const storeId = Number(localStorage.getItem("@iCash: storeId"));

  const { stores } = useStoreRegister();
  const store = stores.find((element) => element.id === storeId);
  const storeCashback = store?.cashback;

  const { user, UpdateUser } = useUpdate();

  const validator = () => {
    const newCashback =
      user.cashback + (Number(inputValue) * Number(storeCashback)) / 100;
    const newData = { cashback: newCashback };
    UpdateUser(newData, userId);
    history.push("/dashboard");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        <HeaderDesktopUserWallet />
        <Payment>
          <Proof src={ProofMobile} alt="Comprovante" />
          <DesktopProof src={ProofDesktop} alt="Comprovante" />
          <h3>Minha conta</h3>
          <p>
            Você está realizando um pagamento em {store?.name} -
            {" " + store?.address}
          </p>
        </Payment>
        <Icash>
          <img src={Logo} alt="Logo" />
        </Icash>
        <DesktopTitle>Pagamento com cartão</DesktopTitle>
        <PaymentOptions>
          <AvailableValue>
            <p>Digite o valor da compra</p>
          </AvailableValue>
          <Value>
            <h2>R$ </h2>
            <div>
              <input
                type="number"
                value={inputValue}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.currentTarget.value)
                }
                step=".01"
                min="0"
                placeholder="0.00"
              />
            </div>
          </Value>
          <Options>
            <div>
              <h1>
                {formatValue(
                  (Number(inputValue) * Number(storeCashback)) / 100
                )}
              </h1>
              <p>Acumulados na sua carteira</p>
            </div>
            <div>
              <h1>{store?.cashback}%</h1>
              <p>Cashback</p>
            </div>
          </Options>
          <Pay onClick={validator}>Pagar conta</Pay>
        </PaymentOptions>
        <BackArrow onClick={() => history.push("/payment")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCard;
