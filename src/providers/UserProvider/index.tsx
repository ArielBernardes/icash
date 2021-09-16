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

interface UserDataProps {
  name: string;
  email: string;
  cashback: number;
  city?: string;
  cellphone?: number;
  age?: number;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  UpdateUser: (data: userUpdateData, userId: string) => void;
  currentBalance: number;
  userData: UserDataProps[];
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserDataProvider = ({ children }: UserProviderProps) => {
  const token = localStorage.getItem("@iCash:token") || "";
  const [userData, setUserData] = useState([]);
  const [currentBalance, setCurrentBalance] = useState<number>(0);

  console.log(userData);
  useEffect(() => {
    if (token) {
      const userId = JSON.parse(localStorage.getItem("@iCash: userId") || "");
      api
        .get(`/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUserData(res.data))
        .catch((res) => console.log(res));
    }
  }, []);

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
    <UserContext.Provider value={{ UpdateUser, currentBalance, userData }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUpdate = () => useContext(UserContext);
