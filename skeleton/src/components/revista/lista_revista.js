import React, { Component } from 'react';
// Agregar constante `datosRevista`(imita a una API)
const datosRevista = [
    { title: 'Post One', content: 'Post content', status: 'draft' },
    { title: 'Post two', content: 'Post content', status: 'published' },
    { title: 'Post three', content: 'Post content', status: 'published' },
    { title: 'Post four', content: 'Post content', status: 'published' },
];

const EntradaRevista = props => {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.contenido}</p>
        </div>
    )
}
export default class ListaRevista extends Component {
    constructor(props) {
        super();
        this.state = {
            ListaRevista: datosRevista,
            saludo: 'MielmaDev',
            isOpen: true
        }
    }
    render() {
        return (
            <div>
                <h2>{this.props.encabezado}</h2>
                <EntradaRevista
                    titulo="Título artículo"
                    contenido="Contenido artículo" />
            </div>
        )

    }
}

