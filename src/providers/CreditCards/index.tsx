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

interface UpdateCreditCard {
  card_holder: string;
  good_thru: string;
  verification_code: string;
}

interface CreditCardsProviderProps {
  children: ReactNode;
}

interface CreditCardsProviderData {
  creditCards: CreditCardData[];
  addCreditCard: (data: CreditCardData) => void;
  removeCreditCard: (cardId: number | undefined) => void;
  updateCreditCard: (
    data: UpdateCreditCard,
    cardId: number | undefined
  ) => void;
}

const CreditCardsContext = createContext<CreditCardsProviderData>(
  {} as CreditCardsProviderData
);

export const CreditCardsProvider = ({ children }: CreditCardsProviderProps) => {
  const { token } = useAuth();

  const [creditCards, setCreditCards] = useState<CreditCardData[]>([]);

  if (token) {
    const decoded = jwt_decode<Decoded>(token);
    localStorage.setItem("@iCash: userId", JSON.stringify(decoded.sub));
  }

  const userId = localStorage.getItem("@iCash: userId");

  useEffect(() => {
    if (token) {
      api
        .get<CreditCardData[]>(`/creditCards?userId=${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setCreditCards(response.data))
        .catch((_) => toast.error("Algo saiu mal. Tente novamente."));
    }
  }, [creditCards[0]]);

  const addCreditCard = (data: CreditCardData) => {
    if (creditCards.length < 1) {
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
    }
  };

  const removeCreditCard = (cardId: number | undefined) => {
    api
      .delete(`/creditCards/${cardId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const list = creditCards.filter((item) => item.id !== cardId);
        setCreditCards(list);
        toast.success("Cartão excluído.");
      })
      .catch((_) => toast.error("Algo saiu mal. Tente novamente."));
  };

  const updateCreditCard = (
    data: UpdateCreditCard,
    cardId: number | undefined
  ) => {
    api
      .patch(`/creditCards/${cardId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => toast.success("Dados atualizados com sucesso!"))
      .catch((_) => toast.error("Algo saiu mal. Tente novamente."));
  };

  return (
    <CreditCardsContext.Provider
      value={{ creditCards, addCreditCard, removeCreditCard, updateCreditCard }}
    >
      {children}
    </CreditCardsContext.Provider>
  );
};

export const useCreditCards = () => useContext(CreditCardsContext);
