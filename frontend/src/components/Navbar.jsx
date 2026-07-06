import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import logo from "../assets/logo.png";


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="navbar">

      <div className="logo-section">
        <img src={logo} alt="SVR Hospital Logo" />

        <div>
          <h2>SVR</h2>
          <p>Multi Speciality Hospital</p>
        </div>
      </div>

      <div
          className="menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
      >
          {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
            <NavLink
                to="/"
                onClick={() => setMenuOpen(false)}
            >
                Home
            </NavLink>
        </li>
        
        <li>
            <NavLink
                to="/about"
                onClick={() => setMenuOpen(false)}
            >
                About
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/departments"
                onClick={() => setMenuOpen(false)}
            >
                Departments
            </NavLink>
        </li>
        
        <li>
            <NavLink
                to="/doctors"
                onClick={() => setMenuOpen(false)}
            >
                Doctors
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/appointment"
                onClick={() => setMenuOpen(false)}
            >
                Appointment
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/contact"
                onClick={() => setMenuOpen(false)}
            >
                Contact
            </NavLink>
        </li>
        
      </ul>

      <div className="emergency">
        <span>24/7 Emergency</span>
        <h4>
          <FaPhoneAlt className="phone-icon" />
          +91 40 2456 7890
        </h4>
      </div>

    </nav>
  );
}

export default Navbar;