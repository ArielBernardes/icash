import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { useAuth } from "../Auth";

interface PaymentProviderProps {
  children: ReactNode;
}

interface PaymentProviderData {
  payWithCard: () => void;
  payWithCashback: () => void;
  finishCardPay: (valueToPay: number) => void;
  finishedCashbackPay: (valueToPay: number) => void;
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

  const finishCardPay = (valueToPay: number) => {
    console.log(userId);

    const value = {
      ammount: valueToPay,
    };

    api
      .patch("/userCashback", value, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => console.log(res))
      .then(() => toast.success("Compra finalizada"))
      .catch(() => toast.error("Oops, algo saiu mal. Tente novamente."));
  };

  const finishedCashbackPay = (valueToPay: number) => {
    const value = {
      userId: userId,
      ammount: valueToPay,
    };

    api.patch(`/userCashback/${userId}`, value, {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  return (
    <PaymentContext.Provider
      value={{
        payWithCard,
        payWithCashback,
        finishCardPay,
        finishedCashbackPay,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
