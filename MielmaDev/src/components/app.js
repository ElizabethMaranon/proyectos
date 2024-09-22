import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavCont from './nav/nav-cont';
import home from './pag/home';
import about from './pag/about';
import contacto from './pag/contacto';
import blog from './pag/blog';
import portfolioDetalles from './portfolio/portfolio-detalles';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <h1>MielmaDev`s Portfolio</h1>
            <h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
            <NavCont />

            <Switch>
              <Route exact path="/" component={home} />
              <Route path="/about-me" component={about} />
              <Route path="/contacto" component={contacto} />
              <Route path="/blog" component={blog} />
              <Route path="/portfolio/:slug" component={portfolioDetalles} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

