import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { IData } from "../../types/storeRegister";
import { useAuth } from "../Auth";

interface StoreRegisterProps {
  children: ReactNode;
}

interface Stores {
  name: string;
  address: string;
  city: string;
  category: string;
  cashback: number;
  working_hours: string;
  telephone: string;
  store_img: string;
  open: string;
  onSale: string;
  id: number;
}

interface StoreRegisterData {
  storeRegister: (
    data: IData,
    setshowModalStore: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  showModalStore: boolean;
  setShowModalStore: React.Dispatch<React.SetStateAction<boolean>>;
  storeUpdate: (
    data: IData,
    setshowModalStore: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  stores: Stores[];
}

const StoreRegisterContext = createContext<StoreRegisterData>(
  {} as StoreRegisterData
);

export const StoreRegisterProvider = ({ children }: StoreRegisterProps) => {
  const [showModalStore, setShowModalStore] = useState<boolean>(false);
  const [stores, setStores] = useState<Stores[]>([] as Stores[]);
  const { token } = useAuth();

  const storeRegister = useCallback(
    (
      data: IData,
      setShowModalStore: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      api
        .post("/stores", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          toast.success("Loja Cadastrada");
          setShowModalStore(false);
        })
        .catch(() => toast.error("Erro ao cadastrar loja"));
    },
    [token]
  );

  const storeUpdate = useCallback(
    (
      data: IData,
      setShowModalStore: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
      api
        .patch("/stores", data, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          toast.success("Dados atualizados");
          setShowModalStore(false);
        })
        .catch(() => toast.error("Erro ao atualizar dados"));
    },
    [token]
  );

  useEffect(() => {
    if (token) {
      api
        .get("/stores", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => setStores(res.data))
        .catch((err) => console.log(err));
    }
  }, [token, storeRegister, storeUpdate]);

  return (
    <StoreRegisterContext.Provider
      value={{
        stores,
        storeUpdate,
        storeRegister,
        setShowModalStore,
        showModalStore,
      }}
    >
      {children}
    </StoreRegisterContext.Provider>
  );
};

export const useStoreRegister = () => useContext(StoreRegisterContext);
