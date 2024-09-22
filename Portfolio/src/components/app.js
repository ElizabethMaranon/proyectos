import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import NavegarContenedor from './navegar/navegar-contenedor';
import Home from './pag/home';
import About from './pag/about';
import Blog from './pag/blog';
import Contacto from './pag/contacto';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>MielmaDev Portfolio</h1>
            <div>{moment().format("MMMM Do YYYY, h:mm:ss a")}</div>
            <NavegarContenedor />
            <Switch>
              <Route exact path="/" Component={Home} />
              <Route path="/about-me" Component={About} />
              <Route path="/contacto" Component={Contacto} />
              <Route path="/blog" Component={Blog} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

