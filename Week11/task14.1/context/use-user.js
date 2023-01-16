import { createContext } from "react";

export const user = {
  name: "Brendan",
  surname: "Eich",
  avatar: "../../../misc/avatar.png",
};

export const UserProvider = createContext(user);
