import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation col-xs-2">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container col-xs-2">
          <Link class="navbar-brand" to="/">
            Cosmophenomenology
          </Link>
          <div>
            <ul class="navbar-nav ml-auto col-xs-2">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/buy" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/buy">
                  Buy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
