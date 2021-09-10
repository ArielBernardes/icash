import { createContext, ReactNode, useContext, useState } from "react";
import api from "../../services/api";
import { userUpdateData } from "../../types/userUpdate";
import toast from "react-hot-toast";

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderData {
  UpdateUser: (data: userUpdateData, token: string) => void;
}

const UserContext = createContext<UserProviderData>({} as UserProviderData);

export const UserProvider = ({ children }: UserProviderProps) => {
  const token = JSON.parse(localStorage.getItem("token") || "");

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
    <UserContext.Provider value={{ UpdateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const UpdateUser = () => useContext(UserContext);
