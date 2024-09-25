import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavCont extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-paq">
        <div className="lado-izq">
          <div className="nav-link-paq">
            <NavLink exact to="/" activeClassName="nav-link-active">
              Home
            </NavLink>
          </div>

          <div className="nav-link-paq">
            <NavLink to="/about-me" activeClassName="nav-link-active">
              About
            </NavLink>
          </div>

          <div className="nav-link-paq">
            <NavLink to="/contacto" activeClassName="nav-link-active">
              Contacto
            </NavLink>
          </div>

          <div className="nav-link-paq">
            <NavLink to="/blog" activeClassName="nav-link-active">
              Blog
            </NavLink>
          </div>

        </div>
        <div className="lado-dcho">MielmaDev</div>
      </div>
    );
  }
}

