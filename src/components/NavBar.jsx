import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              <h2>Vidly</h2>
            </NavLink>
          </li>
          <li className="nav-item my-auto">
            <NavLink className="nav-link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="nav-item my-auto">
            <NavLink className="nav-link" to="/customers">
              Customers
            </NavLink>
          </li>
          <li className="nav-item my-auto">
            <NavLink className="nav-link" to="/rentals">
              Rentals
            </NavLink>
          </li>
          <li className="nav-item my-auto">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item my-auto">
            <NavLink className="nav-link" to="/register">
              Register
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
