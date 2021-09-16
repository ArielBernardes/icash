import { useHistory, Link } from "react-router-dom";
import {
  ContainerUser,
  HeaderUser,
  AvatarUser,
  Container,
  DataUser,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import UserUpdateModal from "../../components/userUpdateModal";
import { useUpdate } from "../../providers/UserProvider";

const UserProfile = () => {
  const history = useHistory();
  const { user } = useUpdate();
  const { name, email } = user;

  return (
    <ContainerUser>
      <HeaderUser />
      <Container>
        <Link to="/user-profile">
          <img src={arrowLeft} alt="voltar" />
        </Link>
      </Container>

      <AvatarUser>
        <img src="https://i.pravatar.cc/150" alt="perfil" />
        <UserUpdateModal />
      </AvatarUser>

      <DataUser>
        <p>Nome: {name}</p>
        <p>E-mail: {email}</p>
      </DataUser>
    </ContainerUser>
  );
};

export default UserProfile;
