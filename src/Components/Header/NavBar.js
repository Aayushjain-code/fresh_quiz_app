import React from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const NavBar = () => {
  const Navigate = useNavigate();
  const { authData, logout } = useAuth();

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          {" "}
          <i className="fab fa-canadian-maple-leaf"></i> Fresh Quiz App
        </Link>

        <div className="icons">
          <span className="userName">
            hi, {authData.firstName ? authData.firstName : "User"}
          </span>
          <div className="fas fa-search" id="search-btn"></div>

          {localStorage.getItem("QuizToken") ? (
            <div
              className="fas  large-Nav-Icon"
              id="menu-btn"
              onClick={() => logout()}
            >
              Logout
              <i className="fas fa-user fasIcon"></i>
            </div>
          ) : (
            <div
              className="fas large-Nav-Icon"
              id="menu-btn"
              onClick={() => Navigate("/login")}
            >
              Login
              <i className="fa-solid fa-fingerprint fasIcon"></i>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
