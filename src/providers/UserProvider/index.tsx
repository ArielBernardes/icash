import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../../services/api";
import { userUpdateData } from "../../types/userUpdate";
import toast from "react-hot-toast";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  UpdateUser: (data: userUpdateData) => void;
  currentBalance: number;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserDataProvider = ({ children }: UserProviderProps) => {
  const token = localStorage.getItem("@iCash:token") || "";
  const userId = JSON.parse(localStorage.getItem("@iCash: userId") || "");
  const [currentBalance, setCurrentBalance] = useState<number>(0);

  useEffect(() => {
    api
      .get(`/users/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setCurrentBalance(res.data.cashback))
      .catch((res) => console.log(res));
  });

  const UpdateUser = (data: userUpdateData) => {
    api
      .patch("/users", data, {
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
