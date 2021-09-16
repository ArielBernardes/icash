import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  BtnProfileUser,
  AvatarUser,
  FooterUser,
  Container,
  ContainerBtn,
  ContainerAvatar,
  BoxTitle,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useUpdate } from "../../providers/UserProvider";

const UserProfile = () => {
  const history = useHistory();
  const { user } = useUpdate();
  const { name, email } = user;

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
      </Container>
      <ContainerAvatar>
        <AvatarUser>
          <img src="https://i.pravatar.cc/150" alt="perfil" />
        </AvatarUser>
        <BoxTitle>
          <h3>
            Olá, <span>{name}</span>{" "}
          </h3>
          <h4>{email}</h4>
        </BoxTitle>
      </ContainerAvatar>
      <ContainerBtn>
        <BtnProfileUser onClick={() => sendTo("/user-data")}>
          Dados pessoais
        </BtnProfileUser>
        <BtnProfileUser onClick={() => sendTo("/credit-cards")}>
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
