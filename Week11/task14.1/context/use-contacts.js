import { createContext } from "react";

export const cotacts = {
  headerTel: "+380123456789",
  footerTel: "+389876543210",
  email: "test@test.com",
};

export const ContactsProvider = createContext(cotacts);
