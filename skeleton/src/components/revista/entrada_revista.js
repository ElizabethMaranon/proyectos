import React,  {Component} from 'react';

export const EntradaRevista = props => {
    return (
        <div>
            <h1>{props.titulo}</h1>
            <p>{props.contenido}</p>
        </div>
    )
}
