import React, { Component } from 'react';
import moment from "moment";
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavCont from './nav/nav-cont';
import home from './pag/home';
import about from './pag/about';
import contacto from './pag/contacto';
import blog from './pag/blog';
import portfolioDetalles from './portfolio/portfolio-detalles';
import noCoincidencia from './pag/no-coincidencia';

export default class App extends Component {
  constructor() {
    super();

    this.getPortfolioItems = this.getPortfolioItems.bind(this);

  }

  getPortfolioItems() {
    axios
      .get("https://mielmadev.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        console.log("datos de respuesta", response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    this.getPortfolioItems();
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
              <Route exact path="/portfolio/:slug" component={portfolioDetalles} />
              <Route component={noCoincidencia} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

