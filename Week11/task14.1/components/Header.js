import { useUser } from "../context/use-user";
import User from "./User";
import "./header.css";

export default function Header() {
  const { name, surname } = useUser();

  return (
    <header className="header row">
      <h2>Header</h2>
      <h3>
        {name} {surname}
      </h3>
      <User />
    </header>
  );
}
