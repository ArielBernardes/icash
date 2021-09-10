import { ReactNode } from "react";
import { AuthProvider } from "./Auth";
import { CreditCardsProvider } from "./CreditCards";
import { RegisterProvider } from "./Register";

interface ProvidersProps {
  children: ReactNode;
}
export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      <AuthProvider>
        <RegisterProvider>
          <CreditCardsProvider>{children}</CreditCardsProvider>
        </RegisterProvider>
      </AuthProvider>
    </>
  );
};
