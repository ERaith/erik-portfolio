import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav-wrapper grey darken-4 header-spacing">
      <div class="container">

      <div class="row">
        <div class="col s6 m6 l6">
          <h4>ERIK RAITH</h4>
        </div>
        <div class="col s6 m6 l6">
          <ul class="right hide-on-med-and-down">
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navigation;
