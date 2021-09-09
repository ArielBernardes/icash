import { Link, useHistory } from "react-router-dom";
import { Avatar, Container, Containerfull, Header, BtnAvatar, BtnProfile } from "./styles";
import arrowLeft from "../../assets/arrowLeft.svg";

const AdminProfile = () => {
    const history = useHistory();

   const sendTo = (path: string) => {
        history.push(path);
   }
    return (
        <Containerfull>
        <Container>
        <Link to = '/admin-dashboard' > <img src = {arrowLeft} alt = 'voltar' /></Link>
        <BtnAvatar>Foto do perfil</BtnAvatar>
        </Container>
        <Avatar>
        <img src = 'https://i.pravatar.cc/150' alt = 'perfil' />
        </Avatar>
        <Header />
        <h3>Olá, ADMIN</h3>
        <h4>email@admin.com</h4>
        <BtnProfile onClick = {()=> sendTo('/stores')}> Lojas Cadastradas</BtnProfile>
        <BtnProfile onClick = {()=> sendTo('/signup-store')}>Cadastrar Lojas</BtnProfile>
        <BtnProfile onClick = {()=> sendTo('/finances')}>Relatórios Financeiros</BtnProfile>
        </Containerfull>
    )

}

export default AdminProfile;