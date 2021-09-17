import { motion } from "framer-motion";
import { Link, useHistory } from "react-router-dom";
import {
  Avatar,
  Container,
  Containerfull,
  Header,
  BtnAvatar,
  BtnProfile,
} from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useStoreRegister } from "../../providers/store-register";
import ModalStore from "../../components/ModalStore";
import { useAuth } from "../../providers/Auth";

const AdminProfile = () => {
  const { showModalStore, setShowModalStore } = useStoreRegister();
  const { setToken } = useAuth();

  const history = useHistory();

  const sendTo = (path: string) => {
    history.push(path);
  };

  const logout = () => {
    setToken("");
    localStorage.clear();
    history.push("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Containerfull>
        {showModalStore && <ModalStore />}
        <Container>
          <Link to="/admin-dashboard">
            {" "}
            <img src={arrowLeft} alt="voltar" />
          </Link>
          <BtnAvatar onClick={logout}>Sair</BtnAvatar>
        </Container>
        <Avatar>
          <img src="https://i.pravatar.cc/150" alt="perfil" />
        </Avatar>
        <Header />
        <h3>
          Olá, <span>ADMIN</span>{" "}
        </h3>
        <h4>email@admin.com</h4>
        <BtnProfile onClick={() => sendTo("/admin-dashboard")}>
          {" "}
          Lojas Cadastradas
        </BtnProfile>
        <BtnProfile onClick={() => setShowModalStore(true)}>
          Cadastrar Loja
        </BtnProfile>
      </Containerfull>
    </motion.div>
  );
};

export default AdminProfile;
