import { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";
import "./Menubar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuthData, auth } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setAuthData(null, null);
    navigate("/login");
  };

  const isActive = (path) => location.pathname === path;
  const isAdmin = auth?.role === "ROLE_ADMIN";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <Link className="navbar-brand" to="/dashboard">
        <img src={assets.logo} alt="Logo" height="40" />
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse p-2" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className={`nav-link ${isActive("/dashboard") ? "fw-bold text-warning" : ""}`} to="/dashboard">
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link className={`nav-link ${isActive("/explore") ? "fw-bold text-warning" : ""}`} to="/explore">
              Explore
            </Link>
          </li>

          {isAdmin && (
            <>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/items") ? "fw-bold text-warning" : ""}`} to="/items">
                  Manage Items
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/category") ? "fw-bold text-warning" : ""}`} to="/category">
                  Manage Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isActive("/users") ? "fw-bold text-warning" : ""}`} to="/users">
                  Manage Users
                </Link>
              </li>
            </>
          )}

          <li className="nav-item">
            <Link className={`nav-link ${isActive("/orders") ? "fw-bold text-warning" : ""}`} to="/orders">
              Order History
            </Link>
          </li>
        </ul>

        {/* USER DROPDOWN */}
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
            >
              <img src={assets.profile} alt="profile" height="32" width="32" />
            </a>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#!">Settings</a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item" href="#!">Activity Log</a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <button className="dropdown-item text-danger" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menubar;
