// Hooks
import { useContext } from "react";
// Components
import { NavLink } from "react-router-dom";
// Contexts
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/mentorships">
              Mentorias
            </NavLink>
            <NavLink className="nav-link" to="/questions">
              Perguntas
            </NavLink>
          </ul>
          <ul className="navbar-nav justify-content-end">
            {user && (
              <>
                <NavLink className="nav-link" to="/dashboard">
                  Dashboard
                </NavLink>
                <span className="nav-link" role="button" onClick={''}>
                  Logout
                </span>
              </>
            )}
            {!user && (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/register">
                  Cadastro
                </NavLink>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
