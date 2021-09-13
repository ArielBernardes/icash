import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";
import { userUpdateData } from "../../types/userUpdate";
import toast from "react-hot-toast";
import { useAuth } from "../Auth";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  UpdateUser: (data: userUpdateData) => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserDataProvider = ({ children }: UserProviderProps) => {
  const { token } = useAuth();

  const UpdateUser = (data: userUpdateData) => {
    console.log(data);
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
    <UserContext.Provider value={{ UpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUpdate = () => useContext(UserContext);
