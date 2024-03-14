import { NavLink } from "react-router-dom";

export default function Header() {
  const activeLink = ({ isActive }) => {
    return {
      color: isActive ? "#000000" : "#ffffff",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-light" to="/">
          Online Learning Class
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
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              style={activeLink}
              className="nav-link active"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink style={activeLink} className="nav-link " to="/language">
              Language
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink style={activeLink} className="nav-link " to="/service">
              Service
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink style={activeLink} className="nav-link " to="/contactus">
              Contact Us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={activeLink} className="nav-link " to="/aboutus">
              About Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
