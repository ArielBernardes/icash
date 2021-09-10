import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { RegisterProvider } from "./Register";
import { StoreRegisterProvider } from "./store-register";
import { UserDataProvider } from "./UserProvider";

interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <AuthProvider>
        <UserDataProvider>
          <StoreRegisterProvider>
            <RegisterProvider>{children}</RegisterProvider>
          </StoreRegisterProvider>
        </UserDataProvider>
      </AuthProvider>
    </>
  );
};
