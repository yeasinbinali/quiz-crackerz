import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div>
          <h3>Quiz Crackerz</h3>
        </div>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/topics'>Topics</Link>
            </li>
            <li className="nav-item">
              <Link to='/statistics'>Statistics</Link>
            </li>
            <li className="nav-item">
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
