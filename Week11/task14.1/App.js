import { useEffect, useState } from "react";
import { UserProvider } from "./context/use-user";
import { ContactsProvider } from "./context/use-contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({});
  const [contactData, setContactData] = useState({});
  const [email, setEmail] = useState("");

  useEffect(() => {
    setUserData({
      name: "Brendan",
      surname: "Eich",
      avatar: "../../../misc/avatar.png",
    });
    setContactData({
      headerTel: "+380123456789",
      footerTel: "+389876543210",
      email: "test@test.com",
    });
  }, []);

  const changeMailHandler = () => {
    setContactData({ ...contactData, email });
  };

  return (
    <>
      <UserProvider value={userData}>
        <ContactsProvider value={contactData}>
          <Header />
          <hr />
          <main className="main">
            <h2>Main Content</h2>
            <div className="row">
              <input
                className="form-control"
                type="text"
                placeholder="Введіть нову електронну пошту"
                aria-label="change email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="btn btn-primary" onClick={changeMailHandler}>
                Змінити електронну пошту
              </button>
            </div>
          </main>
          <hr />
          <Footer />
        </ContactsProvider>
      </UserProvider>
    </>
  );
}
