/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FaClipboardList, FaDrum, FaCalculator, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className="navbar-style">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed">
          <NavLink className="navbar-brand" to="/">
            Hi Buddy👍
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a>
                  <NavLink
                    exact="true"
                    activeClassName="active"
                    className="nav-link"
                    to="/"
                  >
                    <FontAwesomeIcon icon={faHome} color="#0077ff" />
                    Home
                  </NavLink>
                </a>
              </li>
              <li className="nav-item active">
                <a>
                  <NavLink
                    exact="true"
                    activeClassName="active"
                    className="nav-link todo-link"
                    to="/todo"
                  >
                    <FaClipboardList color="#0077ff" />
                    Todo
                  </NavLink>
                </a>
              </li>
              <li className="nav-item active">
                <a>
                  <NavLink
                    exact="true"
                    activeClassName="active"
                    className="nav-link drum-link"
                    to="/drum"
                  >
                    <FaDrum color="#0077ff" />
                    Drum
                  </NavLink>
                </a>
              </li>
              <li className="nav-item active">
                <a>
                  <NavLink
                    exact="true"
                    activeClassName="active"
                    className="nav-link calculator-link"
                    to="/calculator"
                  >
                    <FaCalculator color="#0077ff" />
                    Calculator
                  </NavLink>
                </a>
              </li>
              <li className="nav-item active">
                <a>
                  <NavLink
                    exact="true"
                    activeClassName="active"
                    className="nav-link about-link"
                    to="/about"
                  >
                    <FaUser color="#0077ff" />
                    About
                  </NavLink>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
