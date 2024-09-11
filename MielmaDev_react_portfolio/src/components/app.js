// importar react y componentes
import React, { Component } from 'react';
// importar moment de moment (npm install moment)
import moment from "moment";
// importar PortfolioContenedor creado
import PortfolioContenedor from "./Portfolio/portfolio-contenedor";

// Exportar predeterminada, clase, extender a componentes.
// render sin argumento
// Declaración return, parece html pero esl JavaScript(JSX)
export default class App extends Component {

  render() {
    return (
      <div className='app'>
        <h1>MielmaDev Portfolio</h1>
        {/* agregar contenido de PortfolioContenedor */}
        <PortfolioContenedor/>
        {/* agregar hora */}
        <h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
      </div>
    );
  }
}
