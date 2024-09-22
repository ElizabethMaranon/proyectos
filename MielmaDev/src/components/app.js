import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PortfolioCont from './portfolio/portfolio-Cont';
import NavCont from './nav/nav-cont';
import home from './pag/home';
import about from './pag/about';
import contacto from './pag/contacto';
import blog from './pag/blog';

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
            </Switch>
            </div>
        </Router>

        <h1>MielmaDev`s Portfolio</h1>
        <h2>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>
        <PortfolioCont />
      </div>
    );
  }
}
