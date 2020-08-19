import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav
      className="navbar bg-primary"
      style={{ fontSize: "4.2rem", justifyContent: "center" }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
