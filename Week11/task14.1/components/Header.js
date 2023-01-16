import { useContext } from "react";
import { UserProvider } from "../context/use-user";
import User from "./User";
import "./header.css";

export default function Header() {
  const userData = useContext(UserProvider);

  return (
    <header className="header row">
      <h2>Header</h2>
      <h3>
        {userData.name} {userData.surname}
      </h3>
      <User />
    </header>
  );
}
