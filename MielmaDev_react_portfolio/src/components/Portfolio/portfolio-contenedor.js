// importar react y componentes
import React, { Component } from "react";
// importar PortfolioItems creado
import PortfolioItem from "./portfolio-item";

// Exportar predeterminada, clase, extender a componentes
// render sin argumento Declaración return, parece html pero esl JavaScript(JSX)
export default class PortfolioContenedor extends Component {
    constructor() {
        // super() puente conecta componente de clase2 con su constructor de clase1, hereda todas las bondades del padre.
        super();
        console.log("El contenedor portfolio ha sido renderizado");
    }
    // Crear función automatizada
    portfolioItems() {
        const datos = ["Bat", "Bi", "Hiru"];
        return datos.map(item => {
            return <PortfolioItem />
        });
    }
    render() {
        return (
            <div>
                <h2>Este es el contenedor de portfolio</h2>
                {/* Llamar a la función */}
                {this.portfolioItems()}
            </div>
        );
    }
}

