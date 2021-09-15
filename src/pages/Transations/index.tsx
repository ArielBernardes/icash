import { Link } from "react-router-dom";
import {
  HeaderTransations,
  BoxTitle,
  BtnAvatar,
  MyIcash,
  Status,
  InfoTransations,
  ContainerTransations,
  Calendar,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
const Transations = () => {
  return (
    <>
      <HeaderTransations>
        <BoxTitle>
          <Link to="/user-profile">
            <img src={arrowLeft} alt="voltar" />
          </Link>
          <span>Valor disponível em carteira</span>
          <BtnAvatar>R$ 105,00</BtnAvatar>
        </BoxTitle>
        <MyIcash>
          <span>Meu iCash</span>
        </MyIcash>
        <Status>
          <div className="status">Aprovado</div>
          <div className="status">Reprovado</div>
        </Status>
        <InfoTransations>
          <div className="info">Mês</div>
          <div className="info">Descrição</div>
          <div className="info">Cashback</div>
        </InfoTransations>
      </HeaderTransations>
      <ContainerTransations>
        <Calendar>
          <span>AGO 2021</span>
          <span>SET 2021</span>
        </Calendar>
        <ul>
          <div className="boxTransation">
            <span className="day">21</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">+2,51</span>
          </div>

          <div className="boxTransation">
            <span className="day">21</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">+2,51</span>
          </div>
          <div className="boxTransation">
            <span className="day">21</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">+2,51</span>
          </div>
          <div className="boxTransation">
            <span className="day">21</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">+2,51</span>
          </div>
          <div className="boxTransation">
            <span className="day">1</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">-1,01</span>
          </div>
          <div className="boxTransation">
            <span className="day">7</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">+2,51</span>
          </div>
          <div className="boxTransation">
            <span className="day">10</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">+2,51</span>
          </div>
          <div className="boxTransation">
            <span className="day">15</span>
            <span className="description">
              Pagamento com {"iCash"} {"10h30"}
              Transaçao aprovada Posto de gasolina por R$ {"70,97"}
            </span>
            <span className="value">-1,45</span>
          </div>
        </ul>
      </ContainerTransations>
    </>
  );
};

export default Transations;
