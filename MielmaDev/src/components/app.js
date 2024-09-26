import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavCont from './nav/nav-cont';
import home from './pag/home';
import about from './pag/about';
import contacto from './pag/contacto';
import blog from './pag/blog';
import portfolioDetalles from './portfolio/portfolio-detalles';
import noCoincidencia from './pag/no-coincidencia';

export default class App extends Component {
   render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <NavCont />
            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/about-me" component={about} />
              <Route path="/contacto" component={contacto} />
              <Route path="/blog" component={blog} />
              <Route exact path="/portfolio/:slug" component={portfolioDetalles} />
              <Route component={noCoincidencia} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

