import React from "react";
import "./Navbar.scss";
import logo from "../../logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="castle logo" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
        </li>
        <li>
          <a href="/" className="nav-link">
            about
          </a>
        </li>
        <li>
          <a href="/" className="nav-link active">
            castles
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
