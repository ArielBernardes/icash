import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Container, Containerfull, Header } from "../admin-profile/styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { Stores, ContainerStore, ContainerBtn } from "./styles";
import { useStoreRegister } from "../../providers/store-register";
import ModalUpdateStore from "../../components/ModalUpdateStore";

const AdminDasboard = () => {
  const { setShowModalStore, showModalStore, stores } = useStoreRegister();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Containerfull>
        {showModalStore && <ModalUpdateStore />}
        <Container>
          <Link to="/admin-profile">
            {" "}
            <img src={arrowLeft} alt="voltar" />
          </Link>
        </Container>
        <h2>Lojas Cadastradas</h2>
        <Header />
        <Stores>
          {stores.map((store, index) => (
            <ContainerStore key={store.id}>
              <figure>
                <img
                  key={index}
                  className="image"
                  src={store.store_img}
                  alt={store.name}
                />
              </figure>
              <p>
                <span>{store.name}</span>
                <div>
                  {store.city} - {store.cashback}%
                </div>
              </p>
              <p>{store.category}</p>
              <ContainerBtn>
                <button onClick={() => setShowModalStore(true)}>
                  Atualizar Dados
                </button>
              </ContainerBtn>
            </ContainerStore>
          ))}
        </Stores>
      </Containerfull>
    </motion.div>
  );
};

export default AdminDasboard;
