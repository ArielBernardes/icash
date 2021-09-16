import { motion } from "framer-motion";
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
  StoreContentContainer,
  FigureDesktop,
} from "./styles";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/dot-arrow.svg";
import { useParams, useHistory } from "react-router-dom";
import { useStoreRegister } from "../../providers/store-register";

interface Params {
  storeId: string;
}

const Store = () => {
  const { stores } = useStoreRegister();
  const params = useParams<Params>();
  const storeId = Number(params.storeId);
  localStorage.setItem("@iCash: storeId", JSON.stringify(storeId));
  const store = stores.find((element) => element.id === storeId);
  const history = useHistory();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundMobile image={store?.store_img} />
      <Content>
        <Link to="/dashboard">
          <Img src={arrowLeft} alt="voltar" />
        </Link>
        <StoreContentContainer>
          <StoreContent>
            <Title>
              <FigureDesktop>
                <img src={store?.store_img} alt={store?.name} />
              </FigureDesktop>
              <div>
                <h2>{store?.name}</h2>
                <h3>{store?.address}</h3>
              </div>
              <StoreInfo>
                <h3>{store?.category}</h3>
                <Cashback>
                  <h2>{store?.cashback}%</h2>
                  <span>Cashback</span>
                </Cashback>
              </StoreInfo>
            </Title>
            <StoreData>
              <h4>Informação:</h4>
              <p>{store?.open}</p>
              <p>{store?.working_hours}</p>
              <p>{store?.telephone}</p>
            </StoreData>
            <StoreDescription>
              <p>{store?.onSale}</p>
            </StoreDescription>
            <ButtonContainer>
              <Button onClick={() => history.push("/payment")}>
                Finalizar compra
              </Button>
            </ButtonContainer>
          </StoreContent>
        </StoreContentContainer>
      </Content>
    </motion.div>
  );
};

export default Store;
