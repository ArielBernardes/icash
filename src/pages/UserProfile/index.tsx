import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  BtnProfileUser,
  AvatarUser,
  FooterUser,
} from "./styles";
// import HeaderUser from "../../components/HeaderUser";

const UserProfile = () => {
  const [modalProfile, setModalProfile] = useState(false);
  const history = useHistory();

  const sendTo = (path: string) => {
    history.push(path);
  };
  return (
    <ContainerUser>
      <HeaderUser />
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
      <BtnProfileUser onClick={() => setModalProfile(true)}>
        Editar perfil
      </BtnProfileUser>
      <BtnProfileUser onClick={() => sendTo("/finances")}>
        Cartão de crédito
      </BtnProfileUser>
      <BtnProfileUser onClick={() => sendTo("/finances")}>
        Mensagens
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
