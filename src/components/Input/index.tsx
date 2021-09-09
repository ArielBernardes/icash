import { Container, InputContainer } from "./styles";

interface InputProps {
  register: (name: string) => void;
  name: string;
  error: string;
  colorSchema?: boolean;
  type?: string;
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
        <input {...register(name)} type={type} {...rest} />
      </InputContainer>
      <div className="inputErrors">{!!error && <span>{error}</span>}</div>
    </Container>
  );
};

export default Input;
