import { Link } from "react-router-dom";
import { Container, Containerfull, Header } from "../admin-profile/styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { Stores , ContainerStore, ContainerBtn } from "./styles";
import { useStoreRegister } from "../../providers/store-register";
import ModalUpdateStore from "../../components/ModalUpdateStore";


const AdminDasboard = () => {

    const {setShowModalStore, showModalStore} = useStoreRegister();
    
    const stores = [
        {
          id: 1,
          name: "Candid",
          city: "São Paulo",
          category: "Roupa feminina",
          cashback: 15,
          store_img:
            "https://images.unsplash.com/photo-1564419965579-5da68ffdf3af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: 2,
          name: "Home",
          city: "São Paulo",
          cashback: 25,
          category: "Restaurante",
          store_img:
            "https://images.unsplash.com/photo-1535567679266-c113f99615bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80",
        },
        {
          id: 3,
          name: "Pharmacy",
          city: "São Paulo",
          category: "Farmácia",
          cashback: 5,
          store_img:
            "https://images.unsplash.com/photo-1603706580932-6befcf7d8521?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: 4,
          name: "Magna Carta",
          city: "São Paulo",
          category: "Restaurante",
          cashback: 35,
          store_img:
            "https://images.unsplash.com/photo-1506739738848-3da37ba381db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=564&q=80",
        },
        {
          id: 5,
          name: "Circo's",
          city: "São Paulo",
          category: "Casa de Massas",
          cashback: 10,
          store_img:
            "https://images.unsplash.com/photo-1505066827145-34bcde228211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=619&q=80",
        },
      ];


    return (
        <Containerfull>
            {showModalStore && <ModalUpdateStore />}
            <Container>
                <Link to = '/admin-profile' > <img src = {arrowLeft} alt = 'voltar' /></Link>
            </Container> 
            <h2>Lojas Cadastradas</h2>
            <Header />
            <Stores>

                {stores.map((store, index) => (
                <ContainerStore key = {index}>
                    <img
                    key={index}
                    className="image"
                    src={store.store_img}
                    alt={store.name}
                    />
                    <p>
                    <span>{store.name}</span>
                        <div>
                            {store.city} - {store.cashback}% 
                        </div> 
                    </p>
                    <p>{store.category}</p>
                    <ContainerBtn>
                        <button onClick = {() => setShowModalStore(true)}>Atualizar Dados</button>
                        <button>Relatório financeiro</button>
                    </ContainerBtn>
                </ContainerStore>
                ))}
            </Stores>
        </Containerfull>
    )
}

export default AdminDasboard;