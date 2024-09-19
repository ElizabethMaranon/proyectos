import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContenedor from './portfolio/portfolio-contenedor';
import NavegarContenedor from './navegar/navegar-contenedor';
import Home from './pag/home';
import Sobre from './pag/sobre';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavegarContenedor />
            <Switch>
              <Route exact path="/" Component={Home} />
              <Route path="/Sobre" Component={Sobre} />
            </Switch>
          </div>
        </Router>
        <h1>MielmaDev Portfolio</h1>
        <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
        <PortfolioContenedor />
      </div>
    );
  }
}

