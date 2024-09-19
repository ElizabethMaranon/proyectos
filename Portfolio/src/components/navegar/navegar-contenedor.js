import React, { Component } from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default class NavegarContenedor extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <NavLink exact to="/">
                Home
                </NavLink>
                <NavLink to="sobre-me">Sobre</NavLink>
                
                <button>Contacto</button>
                <button>Blog</button>
                {false ? <button>Agregar Blog</button> : null}
            </div>
        );
    }
}
