import { motion } from "framer-motion";
import { LoginPageContainer, FormWrapper } from "./styles";
import LoginForm from "../../components/LoginForm";
import UserUpdateModal from "../../components/userUpdateModal";

const Login = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <LoginPageContainer>
          <FormWrapper>
            <LoginForm />
          </FormWrapper>
        </LoginPageContainer>
      </motion.div>
      <UserUpdateModal />
    </>
  );
};

export default Login;
