import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";
import api from "../../services/api";
import { userData } from "../../types/userLoginData";
import { History } from "history";
import toast from "react-hot-toast";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthProviderData {
  login: (userData: userData, history: History) => void;
  loginAdmin: (userData: userData, history: History) => void;
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const getToken = localStorage.getItem("@iCash:token") || "";
  const [token, setToken] = useState(getToken);

  const login = (userData: userData, history: History) => {
    api
      .post("/login", userData)
      .then((res) => {
        localStorage.clear();
        localStorage.setItem("@iCash:token", res.data.accessToken);
        setToken(res.data.accessToken);
        history.push("/dashboard");
        toast.success("Usuário logado com sucesso!");
      })
      .catch((err) => {
        console.log("ERRO", err);
        toast.error(
          "Verifique seus dados. Caso seja um novo usuário, crie sua conta."
        );
      });
  };

  const loginAdmin = (userData: userData, history: History) => {
    api
      .post("/login", userData)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        localStorage.setItem("@iCash:token", res.data.accessToken);
        setToken(res.data.accessToken);
        history.push("/admin-profile");
        toast.success("Usuário logado com sucesso!");
      })
      .catch((err) => {
        console.log("ERRO", err);
        toast.error(
          "Verifique seus dados. Caso seja um novo usuário, crie sua conta."
        );
      });
  };

  return (
    <AuthContext.Provider value={{ login, token, setToken, loginAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
