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

const PaymentWithCard = () => {
  const history = useHistory();
  const { finishCardPay } = usePayment();
  const [inputValue, setInputValue] = useState<number>(0);

  const storeId = Number(localStorage.getItem("@iCash: storeId"));

  const { stores } = useStoreRegister();
  const store = stores.find((element) => element.id === storeId);
  const storeCashback = store?.cashback;

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
          <Value>
            <h2>R$ </h2>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(Number(e.currentTarget.value))}
            />
          </Value>
          <Options>
            <div>
              <h1>{formatValue((inputValue * Number(storeCashback)) / 100)}</h1>
              <p>Acumulados na sua carteira</p>
            </div>
            <div>
              <h1>{store?.cashback}%</h1>
              <p>Cashback</p>
            </div>
          </Options>
          <Pay>Pagar conta</Pay>
        </PaymentOptions>
        <BackArrow onClick={() => history.push("/payment")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCard;
