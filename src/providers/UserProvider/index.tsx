import { createContext, ReactNode, useContext } from "react";
import { userUpdateData } from "../../types/userUpdateData";
import toast from "react-hot-toast";
import { useAuth } from "../Auth";
import axios from "axios";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  UpdateUser: (data: userUpdateData, userId: string) => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserDataProvider = ({ children }: UserProviderProps) => {
  const { token } = useAuth();

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
    <UserContext.Provider value={{ UpdateUser } as UserProviderData}>
      {children}
    </UserContext.Provider>
  );
};

export const useUpdate = () => useContext(UserContext);
