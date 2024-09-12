import React, { Component } from 'react';
// Agregar constante `datosRevista`(imita a una API)
const datosRevista = [
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post two', content: 'Post content', status: 'published' },
    { title: 'Post three', content: 'Post content', status: 'published' },
    { title: 'Post four', content: 'Post content', status: 'published' },
]
// Construir export predeterminado con función constructora
export default class ListaRevista extends Component {
    constructor(props) {
        super();
        this.state = {
            ListaRevista: datosRevista,
            isOpen: true
        }
    }
    // Construir `render`
    render() {
        return <h2>MielmaDev</h2>;
    }
}

