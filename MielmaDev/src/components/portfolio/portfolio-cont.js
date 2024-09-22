import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioCont extends Component {
  constructor(){
    super();

    this.state = {
      tituloPag:"Bienvenido al portfolio de MielmaDev",
      datos: [
        {titulo: 1 },
        {titulo: 2 },
        {titulo: 3 },
        {titulo: 4 },
      ]

    }
  }

  portfolioItems() {
    return this.state.datos.map(item => {
      return <PortfolioItem titulo={item.titulo} url={"mielmadev.com"} />;
    });
  }
  
  render() {
    return (
      <div>
        <h2>{this.state.tituloPag}</h2>

        {this.portfolioItems()}
      </div>
    );
  }
}