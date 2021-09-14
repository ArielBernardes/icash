import { createContext, ReactNode, useContext } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../Auth";

interface PaymentProviderProps {
  children: ReactNode;
}

interface PaymentProviderData {
  payWithCard: () => void;
  payWithCashback: () => void;
  finishCardPay: () => void;
}

const PaymentContext = createContext<PaymentProviderData>(
  {} as PaymentProviderData
);

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const { token } = useAuth();
  const userId = localStorage.getItem("@iCash: userId");
  const history = useHistory();

  const payWithCard = () => history.push("/cardpayment");

  const payWithCashback = () => history.push("/cashbackpayment");

  const finishCardPay = () => {
    api
      .patch(`/userCashback/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .catch((res) => console.log(res));
  };

  return (
    <PaymentContext.Provider
      value={{ payWithCard, payWithCashback, finishCardPay }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
