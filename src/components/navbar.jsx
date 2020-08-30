import React, { Component } from "react";
import "../css/navbar.css";

// Stateless functional component, as a function instead of a class
const NavBar = () => {
  return (
    <nav className="navbarBackground">
      <a>
        <span>
          SOA24
        </span>
      </a>
    </nav>
  );
};
export default NavBar;