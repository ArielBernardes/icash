import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CreditCardsProvider } from "./CreditCards";
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
          <RegisterProvider>
            <CreditCardsProvider>
              {children}
            </CreditCardsProvider>
          </RegisterProvider>
        </StoreRegisterProvider>
      </AuthProvider>
    </>
  );
};
