import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { RegisterProvider } from "./Register";
import { StoreRegisterProvider } from "./store-register";

interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <AuthProvider>
        <StoreRegisterProvider>
          <RegisterProvider>{children}</RegisterProvider>
        </StoreRegisterProvider>
      </AuthProvider>
    </>
  );
};
