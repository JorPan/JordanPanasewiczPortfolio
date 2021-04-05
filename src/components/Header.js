import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="logo-section">
        <Link className="logo" to="/">
          Jordan Panasewicz
        </Link>
      </div>
      <div className="header-link-section">
        <Link className="header-link" to="/resume">
          Resume
        </Link>
        <Link className="header-link" to="/projects">
          Projects
        </Link>
        <Link className="header-link" to="/media">
          Media
        </Link>
        <Link className="header-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
