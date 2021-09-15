import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { userUpdateData } from "../../types/userUpdateData";
import toast from "react-hot-toast";
import { useAuth } from "../Auth";
import axios from "axios";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  UpdateUser: (data: userUpdateData, userId: string) => void;
  currentBalance: number;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserDataProvider = ({ children }: UserProviderProps) => {
  const token = localStorage.getItem("@iCash:token") || "";
  const [currentBalance, setCurrentBalance] = useState<number>(0);

  useEffect(() => {
    if (token) {
      const userId = JSON.parse(localStorage.getItem("@iCash: userId") || "");
      api
        .get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setCurrentBalance(res.data.cashback))
        .catch((res) => console.log(res));
    }
  });

  const UpdateUser = (data: userUpdateData, userId: string) => {
    axios
      .patch(`https://api-icash.herokuapp.com/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Dados atualizados com sucesso!");
      })
      .catch((err) => {
        toast.error("Oops, algo saiu mal. Tente novamente.");
      });
  };
  return (
    <UserContext.Provider value={{ UpdateUser, currentBalance }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUpdate = () => useContext(UserContext);
