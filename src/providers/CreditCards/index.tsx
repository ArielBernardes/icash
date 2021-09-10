import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import api from "../../services/api";
import { useAuth } from "../../providers/Auth";
import jwt_decode from "jwt-decode";
import toast from "react-hot-toast";
import { CreditCardData } from "../../types/creditCardData";

interface Decoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface CreditCardsProviderProps {
  children: ReactNode;
}

interface CreditCardsProviderData {
  creditCards: CreditCardData[];
  addCreditCard: (data: CreditCardData) => void;
}

const CreditCardsContext = createContext<CreditCardsProviderData>(
  {} as CreditCardsProviderData
);

export const CreditCardsProvider = ({ children }: CreditCardsProviderProps) => {
  const { token } = useAuth();
  const decoded = jwt_decode<Decoded>(token);
  const userId = Number(decoded.sub);

  const [creditCards, setCreditCards] = useState<CreditCardData[]>([]);

  useEffect(() => {
    api
      .get<CreditCardData[]>(`/creditCards?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setCreditCards(response.data));
  }, []);

  const addCreditCard = (data: CreditCardData) => {
    api
      .post(
        "/creditCards",
        { ...data, userId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setCreditCards([...creditCards, response.data]);
        toast.success("Cartão adicionado com sucesso!");
      })
      .catch((_) => toast.error("Algo saiu mal. Tente novamente."));
  };

  return (
    <CreditCardsContext.Provider value={{ creditCards, addCreditCard }}>
      {children}
    </CreditCardsContext.Provider>
  );
};

export const useCreditCards = () => useContext(CreditCardsContext);
