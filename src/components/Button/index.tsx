import { ReactNode } from "react";
import { Container } from "./styles";

interface ButtonProps {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
}

const Button = ({ children, ...rest }: ButtonProps) => {
  return <Container {...rest}>{children}</Container>;
};

export default Button;
