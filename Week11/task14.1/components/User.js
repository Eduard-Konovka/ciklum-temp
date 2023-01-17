import { useContext } from "react";
import { contactsContext } from "../context/use-contacts";
import Avatar from "./Avatar";
import "./user.css";

export default function User() {
  const contactData = useContext(contactsContext);

  return (
    <div className="user">
      <div className="user__content">
        <p className="user__phone">
          Телефон: <span>{contactData.headerTel}</span>
        </p>
        <p className="user__email">
          Електронна пошта: <span>{contactData.email}</span>
        </p>
      </div>
      <Avatar />
    </div>
  );
}
