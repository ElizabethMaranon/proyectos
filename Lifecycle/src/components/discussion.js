import React, { Component } from 'react';

const mensajeDiscussion = props => {
    return <div>{props.msg}</div>;
};

class listaDiscussion extends Component {
    constructor() {
        super();
        const mensajes = ["Algún mensaje", "algún otro mensaje"]
        this.state = {
            mensajes: this.mensajesAll(mensajes)
        };
    }
    mensajesAll = mensajes =>
        mensajes.map(mensaje => {
            return (
                <div>
                    <mensajeDiscussion
                        key={`mensaje-${String(new Date())}`}
                        msg={mensaje}
                    />
                </div>
            );
        });
    componentDidMount() {
        clearInterval(this.mensajeAdd);
    }
}

export default class Discussion extends Component {
    constructor() {
        super();
        this.state = {
            tituloPag: "Discussion",
            horaActual: String(new Date())
        };
    }
    componentDidMount() {
        console.log("hola de parte de los padres");
        this.tiempoActual = setInterval(() => {
            this.setState({
                tiempoActual: String(new Date())
            });
        }, 1000);

    }


    render() {
        const {tituloPag} = this.state;
        return (
            <div>
                <h1>{tituloPag}</h1>
                <listaDiscussion />
                <div>{this.state.tiempoActual}</div>
            </div>
        )
    }
}

