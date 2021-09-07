import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { RegisterProvider } from "./Register";

interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <AuthProvider>
        <RegisterProvider>{children}</RegisterProvider>
      </AuthProvider>
    </>
  );
};
