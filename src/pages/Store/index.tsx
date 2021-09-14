import Button from "../../components/Button";
import {
  ButtonContainer,
  Cashback,
  Content,
  Img,
  StoreData,
  StoreDescription,
  StoreInfo,
  Title,
  StoreContent,
  BackgroundMobile,
} from "./styles";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/dot-arrow.svg";
import { useParams } from "react-router-dom";

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

interface Params {
  storeId: string;
}

const Store = () => {
  const params = useParams<Params>();

  const storeId = Number(params.storeId);

  const store = stores.filter((item) => item.id === storeId);

  console.log(store);

  return (
    <>
      <BackgroundMobile image={store[0].store_img} />
      <Content>
        <Link to="/dashboard">
          <Img src={arrowLeft} alt="voltar" />
        </Link>
        <StoreContent>
          <Title>
            <h2>{store[0].name}</h2>
            <h3>{store[0].city}</h3>
          </Title>
          <StoreInfo>
            <Cashback>
              <h2>{store[0].cashback}%</h2>
              <span>Cashback</span>
            </Cashback>
          </StoreInfo>
          <StoreData>
            <h4>Informação:</h4>
            <p>Segunda a domingo</p>
            <p>08h00 às 21h00</p>
            <p>99999-9999</p>
          </StoreData>
          <StoreDescription>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates iste corporis accusantium fugit. Est quam amet vero
              possimus!
            </p>
          </StoreDescription>
          <ButtonContainer>
            <Button>Finalizar compra</Button>
          </ButtonContainer>
        </StoreContent>
      </Content>
    </>
  );
};

export default Store;
