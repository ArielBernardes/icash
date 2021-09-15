import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  BtnProfileUser,
  AvatarUser,
  FooterUser,
  Container,
  BtnAvatar,
  ContainerBtn,
  ContainerAvatar,
  BoxTitle,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";

const UserProfile = () => {
  const history = useHistory();

  const sendTo = (path: string) => {
    history.push(path);
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("");
  };
  return (
    <ContainerUser>
      <HeaderUser />
      <Container>
        <Link to="/dashboard">
          <img src={arrowLeft} alt="voltar" />
        </Link>
        <BtnAvatar>Foto do perfil</BtnAvatar>
      </Container>
      <ContainerAvatar>
        <AvatarUser>
          <img src="https://i.pravatar.cc/150" alt="perfil" />
        </AvatarUser>
        <BoxTitle>
          <h3>
            Olá, <span>User</span>{" "}
          </h3>
          <h4>usuario@mail.com</h4>
        </BoxTitle>
      </ContainerAvatar>
      <ContainerBtn>
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
      </ContainerBtn>
      <FooterUser>
        <Link to="">
          <p>Cancelar conta</p>{" "}
        </Link>
        <Link to="">
          <p onClick={handleLogout}>Sair da sessão</p>
        </Link>
      </FooterUser>
    </ContainerUser>
  );
};

export default UserProfile;
