import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CreditCardsProvider } from "./CreditCards";
import { PaymentProvider } from "./Payment";
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
        <CreditCardsProvider>
          <UserDataProvider>
            <StoreRegisterProvider>
              <PaymentProvider>
                <RegisterProvider>{children}</RegisterProvider>
              </PaymentProvider>
            </StoreRegisterProvider>
          </UserDataProvider>
        </CreditCardsProvider>
      </AuthProvider>
    </>
  );
};
