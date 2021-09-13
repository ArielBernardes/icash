import Button from "../../components/Button";
import {
  ButtonContainer,
  Cashback,
  Container,
  Content,
  Img,
  StoreData,
  StoreDescription,
  StoreInfo,
  Title,
} from "./styles";
import { Link } from "react-router-dom";
import arrowLeft from "../../assets/dot-arrow.svg";

const Store = () => {
  return (
    <Container>
      <Link to="/dashboard">
        <Img src={arrowLeft} alt="voltar" />
      </Link>
      <Content>
        <Title>
          <h2>Nome da loja</h2>
          <h3>Endereço</h3>
        </Title>
        <StoreInfo>
          <Cashback>
            <h2>10%</h2>
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
            Aproveite os descontos e promoçoes da Adidas Shopping Iguatemi e
            concorra a prêmios até 2 de setembro de 2021.
          </p>
        </StoreDescription>
        <ButtonContainer>
          <Button>Finalizar compra</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default Store;
