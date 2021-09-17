import { motion } from "framer-motion";
import {
  Container,
  Payment,
  LogoImage,
  PaymentOptions,
  DesktopText,
  Proof,
  Value,
  Pay,
  AvailableValue,
  CashbackValue,
  ValueToPay,
  BackArrow,
} from "./styles";
import ProofIMG from "../../assets/paymentProof.svg";
import BackArrowIMG from "../../assets/ArrowLeftPayment.svg";
import { useHistory } from "react-router";
import HeaderDesktopUserWallet from "../../components/HeaderDesktopUserWallet";
import Logo from "../../assets/LogoHeaderPayment.svg";
import { useUpdate } from "../../providers/UserProvider";
import React, { useState } from "react";
import { useStoreRegister } from "../../providers/store-register";
import toast from "react-hot-toast";

const PaymentWithCashback = () => {
  const userId = JSON.parse(localStorage.getItem("@iCash: userId") || "");
  const history = useHistory();

  const storeId = Number(localStorage.getItem("@iCash: storeId"));

  const { stores } = useStoreRegister();
  const store = stores.find((element) => element.id === storeId);

  const { UpdateUser, user } = useUpdate();
  const [checkValue, setCheckValue] = useState<string>("");
  const { cashback } = user;

  if (cashback) {
    localStorage.setItem("@iCash: cashback", cashback.toString());
  }

  const Validator = () => {
    if (cashback < Number(checkValue) || Number(checkValue) < 1) {
      toast.success("Saldo cashback insuficiente!");
    } else {
      const newValue = cashback - Number(checkValue);
      const newCashback = { cashback: newValue };
      UpdateUser(newCashback, userId);
      history.push("/dashboard");
    }
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
          <LogoImage>
            <img src={Logo} alt="Logo" />
          </LogoImage>
          <DesktopText>
            <h1>Pagamento com</h1>
            <h1>Icash</h1>
          </DesktopText>
          <Proof src={ProofIMG} alt="ComprovanteIMG" />
          <h3>Minha conta</h3>
          <p>
            Você está realizando um pagamento em {store?.name} -
            {" " + store?.address}
          </p>
        </Payment>
        <PaymentOptions>
          <ValueToPay>
            <h2>Saldo iCash R$ {cashback}</h2>
          </ValueToPay>
          <CashbackValue>
            <AvailableValue>
              <p>Digite o valor da compra</p>
            </AvailableValue>
            <Value>
              <h2>R$ </h2>
              <div>
                <input
                  type="number"
                  value={checkValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = e.target.value;
                    setCheckValue(value);
                  }}
                  step=".01"
                  min="0"
                  placeholder="0.00"
                />
              </div>
            </Value>
          </CashbackValue>
        </PaymentOptions>
        <Pay>
          <button onClick={Validator}>Pagar conta</button>
        </Pay>
        <BackArrow onClick={() => history.push("/payment")}>
          <img src={BackArrowIMG} alt="Voltar" />
        </BackArrow>
      </Container>
    </motion.div>
  );
};

export default PaymentWithCashback;
