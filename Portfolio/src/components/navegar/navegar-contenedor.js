import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavegarComponente extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
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




                
                {false ? <button>Agregar Blog</button> : null}
            </div>
        );
    }
}
