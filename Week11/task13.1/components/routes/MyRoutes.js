import { Routes, Route } from "react-router-dom";
import App from "../../App";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

export default function MyRoutes() {
  {
    /*========== Початок зони редагування ===============*/
  }
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />

        <Route path="about" element={<About />} />

        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  );
  {
    /*========== Кінець зони редагування ===============*/
  }
}
