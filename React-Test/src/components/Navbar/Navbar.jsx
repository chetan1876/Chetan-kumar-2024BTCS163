import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ name, tag }) => {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        
        <div className="logo">
          <h2>{name}</h2>
        </div>

        
        <nav className="nav-links">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "active-link" : ""
            }
          >
            Contact
          </NavLink>
        </nav>

        
        <div className="tag">
          <span>{tag}</span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;