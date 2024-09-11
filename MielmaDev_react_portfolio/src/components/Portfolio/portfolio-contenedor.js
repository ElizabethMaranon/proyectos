import React, { Component } from "react";// importar react y componentes
import PortfolioItem from "./portfolio-item";// importar PortfolioItems creado

export default class PortfolioContenedor extends Component {// Exportar predeterminada, clase, extender a componentes
    constructor() { // agregar constructor, super() console.log
        // super() puente conecta componente de clase2 con su constructor de clase, hereda todas las bondades del padre.
        super();
        console.log("El contenedor portfolio ha sido renderizado");
    }
    portfolioItems() {// Crear función automatizada bucle
        const datos = ["Bat", "Bi", "Hiru"];
        return datos.map(item => {
            return <PortfolioItem />
        });
    }
    render() {
        return (
            <div>
                <h2>Este es el contenedor de portfolio</h2>
                {this.portfolioItems()}{/* Llamar a la función */}
            </div>
        );
    }
}

