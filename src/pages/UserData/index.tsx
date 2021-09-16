import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  AvatarUser,
  Container,
  BtnAvatar,
  DataUser,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import UserUpdateModal from "../../components/userUpdateModal";
import { useUpdate } from "../../providers/UserProvider";

const UserProfile = () => {
  const history = useHistory();
  const { currentBalance } = useUpdate();

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
        <UserUpdateModal />
      </AvatarUser>

      <DataUser>
        <ul>
          <li></li>
        </ul>

        <p>Nome: </p>
        <p>E-mail: </p>
        <p>Telefone: </p>
      </DataUser>
    </ContainerUser>
  );
};

export default UserProfile;
