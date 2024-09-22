import React, { Component } from 'react';
import moment from "moment";

import PortfolioCont from './portfolio/portfolio-Cont';
import NavCont from './nav/nav-cont';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <NavCont />
        <h1>MielmaDev`s Portfolio</h1>
        <h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
        <PortfolioCont />
      </div>
    );
  }
}
