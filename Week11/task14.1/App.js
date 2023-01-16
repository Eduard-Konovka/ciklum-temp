import { useEffect, useState } from "react";
import { user, UserProvider } from "./context/use-user";
import { cotacts, ContactsProvider } from "./context/use-contacts";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState({});
  const [contactData, setContactData] = useState({});
  const [email, setEmail] = useState("");

  useEffect(() => {
    setUserData(user);
    setContactData(cotacts);
  }, []);

  const changeMailHandler = () => {
    setContactData({ ...contactData, email });
  };

  return (
    <>
      <UserProvider.Provider value={userData}>
        <Header />
      </UserProvider.Provider>
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
      <ContactsProvider.Provider value={contactData}>
        <Footer />
      </ContactsProvider.Provider>
    </>
  );
}
