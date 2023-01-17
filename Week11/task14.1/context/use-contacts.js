import { createContext, useContext } from "react";

const contactsContext = createContext(null);

export const ContactsProvider = contactsContext.Provider;

export const useContacts = () => useContext(contactsContext);
