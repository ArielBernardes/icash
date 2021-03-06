import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
import Icon from "../../assets/man.svg";

const UserProfile = () => {
  const { user } = useUpdate();
  const { name, email } = user;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContainerUser>
        <HeaderUser />
        <Container>
          <Link to="/user-profile">
            <img src={arrowLeft} alt="voltar" />
          </Link>
        </Container>

        <AvatarUser>
          <img src={Icon} alt="perfil" />
          <UserUpdateModal />
        </AvatarUser>

        <DataUser>
          <p>Nome: {name}</p>
          <p>E-mail: {email}</p>
        </DataUser>
      </ContainerUser>
    </motion.div>
  );
};

export default UserProfile;
