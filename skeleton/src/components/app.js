import React, { Component } from 'react';
import ListaRevista from './revista/lista_revista';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Skeleton</h1>
        <h2>React, Props and State</h2>
        <ListaRevista />
      </div>
    );
  }
}

