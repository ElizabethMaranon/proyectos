import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default class NavegarContenedor extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <NavLink exact to="/" activeClassName="nav-link-active">
                    Home
                </NavLink>
                <NavLink exact to="/about" activeClassName="nav-link-active">
                    Conóceme
                </NavLink>
                <NavLink exact to="/contacto" activeClassName="nav-link-active">
                    Contacto
                </NavLink>
                <NavLink exact to="/blog" activeClassName="nav-link-active">
                    Blog
                </NavLink>




                
                {false ? <button>Agregar Blog</button> : null}
            </div>
        );
    }
}
