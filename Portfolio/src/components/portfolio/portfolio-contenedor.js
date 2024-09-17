import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioContenedor extends Component {
    constructor() {
        super();
        this.state = {
            tituloPag: "Bienvenido a mi portfolio",
            datos: [
                {titulo: "bat"},
                {titulo: "bi"},
                {titulo: "hiru"},
                {titulo: "lau"},
            ]
        };
        this.manejarActPag = this.manejarActPag.bind(this);
    }
    portfolioItems() {
        return this.state.datos.map(item => {
            return <PortfolioItem titulo={item.titulo} url={"google.com"} />
        });
    }
    manejarActPag() {
        this.setState({
            tituloPag: "Algún título más"
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.tituloPag}</h2>
                {this.portfolioItems()}
                <hr />
                <button onClick={this.manejarActPag}>Cambiar título</button>
            </div>
        );
    }
}