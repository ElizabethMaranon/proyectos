import React, { Component } from 'react';
import moment from "moment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavegarContenedor from './navegar/navegar-contenedor';
import home from './pag/home';
import about from './pag/about';
import blog from './pag/blog';
import contacto from './pag/contacto';

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
              <Route exact path="/" Component={home} />
              <Route path="/about-me" Component={about} />
              <Route path="/contacto" Component={contacto} />
              <Route path="/blog" Component={blog} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

