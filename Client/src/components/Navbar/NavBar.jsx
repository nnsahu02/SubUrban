import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Suburban
        </Link>
        <div className="navbar-buttons">
          <Link to="/signin" className="navbar-button">
            SignIn
          </Link>
          <Link to="/signup" className="navbar-button">
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

