import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ name, tag }) => {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        {/* Left */}
        <div className="logo">
          <h2>{name}</h2>
        </div>

        {/* Center */}
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

        {/* Right */}
        <div className="tag">
          <span>{tag}</span>
        </div>

      </div>
    </header>
  );
};

export default Navbar;