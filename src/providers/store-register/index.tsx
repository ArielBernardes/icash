import { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../../services/api";
import { IData } from "../../types/storeRegister";
import { useAuth } from "../Auth";

interface StoreRegisterProps {
  children: ReactNode;
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
}

const StoreRegisterContext = createContext<StoreRegisterData>(
  {} as StoreRegisterData
);

export const StoreRegisterProvider = ({ children }: StoreRegisterProps) => {
  const [showModalStore, setShowModalStore] = useState<boolean>(false);

  const { token } = useAuth();

  const storeRegister = (
    data: IData,
    setShowModalStore: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    api
      .post("/stores", data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        toast.success("Loja Cadastrada");
        setShowModalStore(false);
      })
      .catch(() => toast.error("Erro ao cadastrar loja"));
  };

  const storeUpdate = (
    data: IData,
    setShowModalStore: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    api
      .patch("/stores", data, { headers: { Authorization: `Bearer ${token}` } })
      .then(() => {
        toast.success("Dados atualizados");
        setShowModalStore(false);
      })
      .catch(() => toast.error("Erro ao atualizar dados"));
  };

  return (
    <StoreRegisterContext.Provider
      value={{ storeUpdate, storeRegister, setShowModalStore, showModalStore }}
    >
      {children}
    </StoreRegisterContext.Provider>
  );
};

export const useStoreRegister = () => useContext(StoreRegisterContext);
