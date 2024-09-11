// importar react y componentes
import React, { Component } from "react";
// importar PortfolioItems creado
import PortfolioItem from "./portfolio-item";

// Exportar predeterminada, clase, extender a componentes.
// render sin argumento
// Declaración return, parece html pero esl JavaScript(JSX)
export default class PortfolioContainer extends Component {
    constructor() {
        // super() es el puente que conecta un componente de clase secundaria
        // con su constructor de clase principal, permitir que la clase 
        // secundaria herede todas las bondades del padre.
        super();
        console.log("El contenedor portfolio ha sido renderizado");
    }
    render() {
        return (
            <div>
                <h2>Este es el contenedor de portfolio</h2>
                <PortfolioItem/>
            </div>
        );
    }
}