import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

export default function MyRoutes() {
  {
    /*========== Початок зони редагування ===============*/
  }
  <Routes>
    <Route to="/" element={Home} />

    <Route to="/about" element={About} />

    <Route to="/login" element={Login} />
  </Routes>;
  {
    /*========== Кінець зони редагування ===============*/
  }
}
