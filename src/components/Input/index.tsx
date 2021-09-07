import { Container, InputContainer } from "./styles";

interface InputProps {
  register: (name: string) => void;
  name: string;
  error: string;
  colorSchema?: boolean;
  type?: "email" | "password" | "text";
  placeholder?: string;
}

const Input = ({
  register,
  type,
  name,
  error = "",
  colorSchema = false,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <InputContainer colorSchema={colorSchema}>
        <input {...register(name)} {...rest} />
      </InputContainer>
      <div className="inputErrors">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
