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

interface Decoded {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface CreditCard {
  card_holder: string;
  good_thru: string;
  id: number;
  name: string;
  number: string;
  userId: number;
  verification_code: string;
}

interface CreditCardsProviderProps {
  children: ReactNode;
}

interface CreditCardsProviderData {
  creditCards: CreditCard[];
}

const CreditCardsContext = createContext<CreditCardsProviderData>(
  {} as CreditCardsProviderData
);

export const CreditCardsProvider = ({ children }: CreditCardsProviderProps) => {
  const { token } = useAuth();
  const decoded: Decoded = jwt_decode(token);
  const userId = Number(decoded.sub);

  const [creditCards, setCreditCards] = useState<CreditCard[]>([]);

  useEffect(() => {
    api
      .get<CreditCard[]>(`/creditCards?userId=${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setCreditCards(response.data));
  }, []);

  return (
    <CreditCardsContext.Provider value={{ creditCards }}>
      {children}
    </CreditCardsContext.Provider>
  );
};

export const useCreditCards = () => useContext(CreditCardsContext);
