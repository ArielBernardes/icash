import { BtnClose, BtnSubmit, Container, FormStore } from "../ModalStore/styles";
import arrowLeft from "../../assets/arrowLeft.svg";
import { useStoreRegister } from "../../providers/store-register";
import { Input } from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IData } from "../../types/storeRegister";


const ModalUpdateStore = () => {
    
    const {setShowModalStore, storeUpdate} = useStoreRegister();

    const schema = yup.object().shape({
        name: yup.string().required("Campo Obrigatório"),
        address: yup.string().required("Campo Obrigatório"),
        city: yup.string().required("Campo Obrigatório"),
        cashback: yup.string().required("Campo Obrigatório"),
        working_hours: yup.string().required("Campo Obrigatório"),
        telephone: yup.string().required("Campo Obrigatório"),
        store_img: yup.string().required("Campo Obrigatório"),
        open: yup.string().required("Campo Obrigatório")
    })

    const {register,handleSubmit,reset,formState: {errors}} = useForm({resolver: yupResolver(schema)});

    const handleRegister = (data: IData) => {
        console.log(data)
        storeUpdate(data,setShowModalStore);
        reset();
    }
    return (
        <Container>
            <BtnClose onClick = {()=> setShowModalStore(false)}><img src = {arrowLeft} alt = 'close' /></BtnClose>
                <h1>Atualizar dados</h1>
            <FormStore onSubmit = {handleSubmit(handleRegister)} > 
                <Input 
                type = 'text'
                name = 'name'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Nome da loja' />

                <Input 
                type = 'text'
                name = 'address'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Endereço' />

                <Input 
                type = 'text'
                name = 'city'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Cidade' />

                <Input 
                type = 'number'
                name = 'cashback'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Cashback oferecido' />

                <Input 
                type = 'text'
                name = 'working_hours'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Horário de funcionamento' />

                <Input 
                type = 'number'
                name = 'telephone'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Telefone' />

                <Input 
                type = 'text'
                name = 'store_img'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Link da imagem' />

                <Input 
                type = 'text'
                name = 'open'
                error= {errors.email?.message} 
                register = {register} 
                placeholder = 'Dias de funcionamento' />

                <BtnSubmit type = 'submit' >Atualizar</BtnSubmit>

            </FormStore>
        </Container>
    )
}

export default ModalUpdateStore;