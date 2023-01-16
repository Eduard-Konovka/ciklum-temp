import { useContext } from "react";
import { ContactsProvider } from "../context/use-contacts";
import Avatar from "./Avatar";
import "./footer.css";

export default function Footer() {
  const contactData = useContext(ContactsProvider);

  return (
    <footer className="footer">
      <div className="footer__content">
        <h2>Footer</h2>
        <p className="footer__phone">
          Телефон: <span>{contactData.footerTel}</span>
        </p>
        <p className="footer__email">
          Електронна пошта: <span>{contactData.email}</span>
        </p>
      </div>
      <Avatar />
    </footer>
  );
}
