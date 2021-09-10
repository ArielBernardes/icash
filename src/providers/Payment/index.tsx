import { createContext, ReactNode, useContext, useState } from "react";
import { useHistory } from "react-router-dom";

interface PaymentProviderProps {
  children: ReactNode;
}

interface PaymentProviderData {
  payWithCard: () => void;
  payWithCashback: () => void;
  nextPage: () => void;
}

const PaymentContext = createContext<PaymentProviderData>(
  {} as PaymentProviderData
);

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const history = useHistory();
  const [formOfPayment, setFormOfPayment] = useState<string>();

  const payWithCard = () => setFormOfPayment("Card");

  const payWithCashback = () => setFormOfPayment("Cashback");

  const nextPage = () => {
    if (formOfPayment === "Card") {
      history.push("/cardPayment");
    } else {
      history.push("/cashbackPayment");
    }
  };

  return (
    <PaymentContext.Provider value={{ payWithCard, payWithCashback, nextPage }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
