import React, { Component } from 'react';

export default class NavegarContenedor extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <button>Home</button>
                <button>Sobre</button>
                <button>Contacto</button>
                <button>Blog</button>
                {false ? <button>Agregar Blog</button> : null}
            </div>
        );
    }
}
