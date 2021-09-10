import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  BtnProfileUser,
  AvatarUser,
  FooterUser,
  Container,
  BtnAvatar,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";

const UserProfile = () => {
  const history = useHistory();

  const sendTo = (path: string) => {
    history.push(path);
  };
  return (
    <ContainerUser>
      <HeaderUser />
      <Container>
        <Link to="/user-profile">
          <img src={arrowLeft} alt="voltar" />
        </Link>
        <BtnAvatar>Foto do perfil</BtnAvatar>
      </Container>
      <AvatarUser>
        <img src="https://i.pravatar.cc/150" alt="perfil" />
      </AvatarUser>
      <h3>
        Olá, <span>USER</span>{" "}
      </h3>
      <h4>usuario@mail.com</h4>
      <BtnProfileUser onClick={() => sendTo("/user-data")}>
        Dados pessoais
      </BtnProfileUser>
      <BtnProfileUser onClick={() => sendTo("/cards")}>
        Cartão de crédito
      </BtnProfileUser>
      <BtnProfileUser onClick={() => sendTo("/posts")}>
        Mensagens
      </BtnProfileUser>
      <BtnProfileUser onClick={() => sendTo("/icash")}>
        Sobre ICash
      </BtnProfileUser>
      <FooterUser>
        <Link to="">
          <p>Cancelar conta</p>{" "}
        </Link>
        <Link to="">
          <p>Sair da sessão</p>
        </Link>
      </FooterUser>
    </ContainerUser>
  );
};

export default UserProfile;
