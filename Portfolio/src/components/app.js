import React, { Component } from 'react';
import moment from "moment";
import PortfolioContenedor from './portfolio/portfolio-contenedor';
import NavegarContenedor from './navegar/navegar-contenedor';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavegarContenedor />
        <h1>MielmaDev Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContenedor />
      </div>
    );
  }
}

