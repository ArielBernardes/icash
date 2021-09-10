import { createContext, ReactNode, useContext } from "react";
import { useHistory } from "react-router-dom";

interface PaymentProviderProps {
  children: ReactNode;
}

interface PaymentProviderData {
  payWithCard: () => void;
  payWithCashback: () => void;
}

const PaymentContext = createContext<PaymentProviderData>(
  {} as PaymentProviderData
);

export const PaymentProvider = ({ children }: PaymentProviderProps) => {
  const history = useHistory();
  // const [formOfPayment, setFormOfPayment] = useState<string>();

  const payWithCard = () => history.push("/cardpayment");

  const payWithCashback = () => history.push("/cashbackpayment");

  // const nextPage = () => {
  //   if (formOfPayment === "Card") {
  //     history.push("/cardPayment");
  //   } else {
  //     history.push("/cashbackPayment");
  //   }
  // };

  return (
    <PaymentContext.Provider value={{ payWithCard, payWithCashback }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => useContext(PaymentContext);
