import React, { Component } from 'react';
import { EntradaRevista } from "./entrada_revista"

const datosRevista = [
    { titulo: 'Post One', contenido: 'Post contenido', estado: 'draft' },
    { titulo: 'Post two', contenido: 'Post contenido', estado: 'published' },
    { titulo: 'Post three', contenido: 'Post contenido', estado: 'published' },
    { titulo: 'Post four', contenido: 'Post contenido', estado: 'published' },
];


export default class ListaRevista extends Component {
    constructor(props) {
        super();
        this.state = {
            datosRevista: datosRevista,
            isOpen: true
        };
    }
    render() {
        const entradasRevista = this.state.datosRevista.map(entradaRevista => {
            return (
                <div key={entradaRevista.titulo}>
                    <EntradaRevista
                        titulo={entradaRevista.titulo}
                        contenido={entradaRevista.contenido}
                    />
                </div>
            );
        })
        return (
            <div>
                <h2>{this.props.encabezado}</h2>
                {entradasRevista}
            </div>
        )

    }
}

