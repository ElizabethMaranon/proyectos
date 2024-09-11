// importar react y componentes
import React, { Component } from "react";
// importar PortfolioItems creado
import PortfolioItems from './portfolio-items';

// Exportar predeterminada, clase, extender a componentes.
// render sin argumento
// Declaración return, parece html pero esl JavaScript(JSX)
export default class PortfolioContainer extends Component {
    render() {
        return (
            <div>
                <h2>Este es el contenedor de portfolio</h2>
                <PortfolioItems/>
            </div>
        );
    }
}
