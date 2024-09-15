import React, { Component } from 'react';
import PagContenido from './pagContenido';
import Navegar from './navegar';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        <Navegar />
        <PagContenido />
      </div>
    );
  }
}

