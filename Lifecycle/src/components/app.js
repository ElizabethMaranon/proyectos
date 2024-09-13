import React, { Component } from 'react';
import Discussion from './componentes/discussion';
import Normas from './componentes/normas';
import Flujo from './componentes/flujo';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        <Discussion />
        <Normas />
        <Flujo />
      </div>
    );
  }
}
