import { NavLink, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div className="App container">
      {/*========== Початок зони редагування ===============*/}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              {/* <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                About
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Login
              </NavLink> */}

              <Outlet />
            </div>
          </div>
        </div>
      </nav>
      {/*========== Кінець зони редагування ===============*/}
    </div>
  );
}
