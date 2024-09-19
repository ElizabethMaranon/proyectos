import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioContenedor from './portfolio/portfolio-contenedor';
import NavegarContenedor from './navegar/navegar-contenedor';
import home from './pag/home';
import about from './pag/about';
import Blog from './pag/blog';
import contacto from './pag/contacto';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
        <NavegarContenedor />
        <Switch>
          <Route exact path="/" Component={home} />
          <Route path="/sobre-mi" Component={about} />
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

