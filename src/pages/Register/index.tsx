import { motion } from "framer-motion";
import { LoginPageContainer, FormWrapper } from "./styles";
import RegisterForm from "../../components/RegisterForm";

const SignUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <LoginPageContainer>
        <FormWrapper>
          <RegisterForm />
        </FormWrapper>
      </LoginPageContainer>
    </motion.div>
  );
};

export default SignUp;
