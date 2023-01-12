import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  return (
    <div className="App container">
      {/*========== Початок зони редагування ===============*/}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                to="home"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>
              <NavLink
                to="login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
      {/*========== Кінець зони редагування ===============*/}
    </div>
  );
}
