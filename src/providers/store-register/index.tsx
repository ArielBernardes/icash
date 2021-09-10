import { createContext, ReactNode, useContext, useState } from "react"
import toast from "react-hot-toast"
import api from "../../services/api"
import { IData } from "../../types/storeRegister";
import { useAuth } from "../Auth";

interface StoreRegisterProps {
    children: ReactNode;
}



interface StoreRegisterData {
     storeRegister: (data: IData, setshowModalStore: React.Dispatch<React.SetStateAction<boolean>> ) => void;
    showModalStore: boolean;
    setShowModalStore: React.Dispatch<React.SetStateAction<boolean>>;
}

const StoreRegisterContext = createContext<StoreRegisterData>({} as StoreRegisterData);

export const StoreRegisterProvider = ({children}: StoreRegisterProps) => {

    const [showModalStore, setShowModalStore] = useState<boolean>(false);

    const {token } = useAuth();

    const storeRegister = (data: IData , setShowModalStore: React.Dispatch<React.SetStateAction<boolean>>) => {
        api
        .post('/stores', data,
         { headers: 
            { Authorization: `Bearer ${JSON.parse(token)}`}
        })
            .then(() => {
                toast.success('Loja Cadastrada');
                setShowModalStore(false);
            })
            .catch(()=> toast.error('Erro ao cadastrar loja'))
    }

    return (
        <StoreRegisterContext.Provider value = {{ storeRegister, setShowModalStore, showModalStore }} >
            {children}
        </StoreRegisterContext.Provider>

    )
}

export const useStoreRegister = () => useContext(StoreRegisterContext);