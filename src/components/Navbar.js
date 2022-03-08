import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <NavLink className="navbar-brand document" to="/">
          {props.title}
        </NavLink>
        <button
          className="navbar-toggler document"
          type="button"
          data-toggle="collapse"
          data-target="/navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon document"></span>
        </button>

        <div
          className="collapse navbar-collapse document"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto document">
            <li className="nav-item active document">
              <NavLink className="nav-link document" to="/">
                Home <span className="sr-only document"></span>
              </NavLink>
            </li>
            <li className="nav-item document">
              <NavLink className="nav-link document" to="/about">
                About
              </NavLink>
            </li>
          </ul>

          <input
            type="checkbox"
            name=""
            id="themeSwitcher"
            className="checkbox"
            onClick={props.toggleMode}
          />
        </div>
      </nav>
    </>
  );
}
