import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
export default class PortfolioContenedor extends Component {
    constructor() { 
        super();
        this.state = { // crear state
            pagTitle: "Bienvenido a mi Portfolio",
            datos: [ // Crear objeto
                { title: "bat" },
                { title: "bi" },
                { title: "hiru" },
                { title: "lau" }
            ]
        };
    }
    portfolioItems() {// Crear función automatizada bucle
        return this.state.datos.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        });
    }
    render() {
        return (
            <div>
                <h2>{this.state.pagTitle}</h2>
                {this.portfolioItems()}
            </div>
        );
    }
}

