import { useContacts } from "../context/use-contacts";
import Avatar from "./Avatar";
import "./user.css";

export default function User() {
  const { headerTel, email } = useContacts();

  return (
    <div className="user">
      <div className="user__content">
        <p className="user__phone">
          Телефон: <span>{headerTel}</span>
        </p>
        <p className="user__email">
          Електронна пошта: <span>{email}</span>
        </p>
      </div>
      <Avatar />
    </div>
  );
}
