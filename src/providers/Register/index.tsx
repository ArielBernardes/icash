import { createContext, useContext, ReactNode } from "react";
import api from "../../services/api";
import { History } from "history";
import { userSignUpData } from "../../types/userSignUpData";

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
        // toast.success("Usuário criado com sucesso. Faça Login!");
        return history.push("/login");
      })
      .catch((err) => {
        console.log("ERRO", err);
        // toast.error("Mensagem")
      });
  };
  return (
    <RegisterContext.Provider value={{ registerUser }}>
      {children}
    </RegisterContext.Provider>
  );
};

export const useRegister = () => useContext(RegisterContext);
