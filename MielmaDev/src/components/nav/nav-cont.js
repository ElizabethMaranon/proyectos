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
                    <NavLink exact to="/" activeClassName="nav-link-active">
                        Home
                    </NavLink>

                    <NavLink to="/about-me" activeClassName="nav-link-active">
                        About
                    </NavLink>
                    <NavLink to="/contacto" activeClassName="nav-link-active">
                        Contacto
                    </NavLink>
                    <NavLink to="/blog" activeClassName="nav-link-active">
                        Blog
                    </NavLink>

                    {false ? <button>Add Blog</button> : null}
                </div>
                <div className="lado-dcho">MielmaDev</div>
            </div>
        );
    }
}

