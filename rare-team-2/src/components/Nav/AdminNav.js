import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useRef } from "react";

export const AdminNav = () => {
  return (
    <ul className="container">
      <nav className="nav">
        <ul className="nav--list">
          <li className="item">
            <Link className="navbar-link" to="/">
              <a href="#" className="item--wrapper" data-item="Home">
                Home{" "}
              </a>
            </Link>
          </li>
          <li className="item">
            <Link className="navbar-link" to="/allposts">
              <a href="#" className="item--wrapper" data-item="all posts">
                All Posts
              </a>
            </Link>
          </li>
          <li className="item">
            <Link className="navbar-link" to="/myposts">
              <a href="#" className="item--wrapper" data-item="My Posts">
                My Posts
              </a>
            </Link>
          </li>
          <li className="item">
            <Link className="navbar-link" to="/categoryManager">
              <a href="#" className="item--wrapper" data-item="Category Manager">
                Category Manager
              </a>{" "}
            </Link>
          </li>
          <li className="item">
            <Link className="navbar-link" to="/tagManager">
              <a href="#" className="item--wrapper" data-item="Tag Manager">
                Tag Manager
              </a>{" "}
            </Link>
          </li>
          <li className="item">
            <Link className="navbar-link" to="/userManager">
              <a href="#" className="item--wrapper" data-item="User Manager">
                User Manager
              </a>{" "}
            </Link>
          </li>
          <li className="item navbar-logout">
            <Link
              className="navbar-link"
              to="/login"
              onClick={() => {
                localStorage.removeItem("rare_user");
              }}
            >
              <a href="#" className="item--wrapper" data-item="Logout">
                Logout
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </ul>
  );
};
