import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioCont extends Component {
  constructor() {
    super();

    this.state = {
      tituloPag: "Bienvenido al portfolio de MielmaDev",
      datos: [
        { titulo: 1, category: "eCommerce" },
        { titulo: 2, category: "Programación" },
        { titulo: 3, category: "Empresa" },
        { titulo: 4, category: "eCommerce" },
      ]
    };
    
    this.manejarFiltro = this.manejarFiltro.bind(this);
  }

  portfolioItems() {
    return this.state.datos.map(item => {
      return <PortfolioItem titulo={item.titulo} url={"mielmadev.com"} />;
    });
  }

  manejarFiltro(filtro) {
    this.setState({
      datos: this.state.datos.filtro(item=> {
        return item.category === filtro;
      })
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}