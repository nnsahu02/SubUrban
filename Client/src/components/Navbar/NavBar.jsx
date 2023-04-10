import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/signin')
  }

  const token = localStorage.getItem('token');

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo">
          Suburban
        </Link>
        <div className="navbar-buttons">
          {token ? (
            <button className="navbar-button" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <>
              <Link to="/signin" className="navbar-button">
                SignIn
              </Link>
              <Link to="/signup" className="navbar-button">
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
