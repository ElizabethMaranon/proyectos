import React, { Component } from 'react';
import moment from "moment";

import PortfolioContenedor from './portfolio/portfolio-contenedor';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>MielmaDev Portfolio</h1>
        <h2>{moment().format('MMM Do YYY, h:mm:ss a')}</h2>
        <PortfolioContenedor />
      </div>
    );
  }
}
