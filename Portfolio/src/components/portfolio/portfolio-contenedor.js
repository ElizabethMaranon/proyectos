import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContenedor extends Component {
    constructor() {
        super();
        this.state = {
            tituloPag: "Bienvenido a mi portfolio",
            datos: [
                { titulo: "bat", category: "eComercio" },
                { titulo: "bi", category:  "Programación" },
                { titulo: "hiru", category:  "Empresa" },
                { titulo: "lau", category:  "eComercio" },
            ]
        };
        this.manejarFiltro = this.manejarFiltro.bind(this);
    }
    manejarFiltro(filtro) {
        this.setState({
            datos: this.state.datos.filtro(item => {
                return item.category === filtro;
            })
        });
    }
    portfolioItems() {
        return this.state.datos.map(item => {
            return <PortfolioItem titulo={item.titulo} url={"google.com"} />
        });
    }
    // manejarActPag() {
    //     this.setState({
    //         tituloPag: "El título ha sido cambiado"
    //     });
    // }
    render() {
        return (
            <div>
                <h2>{this.state.tituloPag}</h2>
                <button onClick={() => this.manejarFiltro("eComercio")}>eComercio</button>
                <button onClick={() => this.manejarFiltro("Programación")}>Programación</button>
                <button onClick={() => this.manejarFiltro("Empresa")}>Empresa</button>

                {this.portfolioItems()}
                {/* <hr />
                <button onClick={this.manejarActPag}>Cambiar título</button> */}
            </div>
        );
    }
}
