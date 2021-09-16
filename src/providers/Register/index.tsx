import { createContext, useContext, ReactNode } from "react";
import api from "../../services/api";
import { History } from "history";
import { userSignUpData } from "../../types/userSignUpData";
import toast from "react-hot-toast";

interface RegisterProviderProps {
  children: ReactNode;
}

interface RegisterProviderData {
  registerUser: (data: userSignUpData, history: History) => void;
}

const RegisterContext = createContext<RegisterProviderData>(
  {} as RegisterProviderData
);

export const RegisterProvider = ({ children }: RegisterProviderProps) => {
  const registerUser = (data: userSignUpData, history: History) => {
    api
      .post("/register", data)
      .then((_) => {
        toast.success("Você ganhou R$ 50,00! Faça Login e boas compras!");
        return history.push("/login");
      })
      .catch((err) => {
        console.log("ERRO", err);
        toast.error("Algo saiu mal. Tente novamente.");
      });
  };
  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
