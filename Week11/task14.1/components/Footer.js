import { useContacts } from "../context/use-contacts";
import Avatar from "./Avatar";
import "./footer.css";

export default function Footer() {
  const { footerTel, email } = useContacts();

  return (
    <footer className="footer">
      <div className="footer__content">
        <h2>Footer</h2>
        <p className="footer__phone">
          Телефон: <span>{footerTel}</span>
        </p>
        <p className="footer__email">
          Електронна пошта: <span>{email}</span>
        </p>
      </div>
      <Avatar />
    </footer>
  );
}
