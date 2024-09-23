import React, { Component } from "react";
import axios from "axios";
import PortfolioItem from "./portfolio-item";

export default class PortfolioCont extends Component {
  constructor() {
    super();

    this.state = {
      tituloPag: "Bienvenido al portfolio de MielmaDev",
      cargando: false,
      datos: [
        { titulo: 1, category: "eCommerce", slug: "bat" },
        { titulo: 2, category: "Programación", slug: "bi" },
        {
          titulo: 3,
          category: "Empresa",
          slug: "hiru"
        },
        { titulo: 4, category: "eCommerce", slug: "lau" },
      ]
    };

    this.manejarFiltro = this.manejarFiltro.bind(this);
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  manejarFiltro(filtro) {
    this.setState({
      datos: this.state.datos.filtro(item => {
        return item.category === filtro;
      })
    });
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
  portfolioItems() {
    return this.state.datos.map(item => {
      return (
        <PortfolioItem titulo={item.titulo} url={"mielmadev.com"} slug={item.slug} />
      )
    });
  }
  render() {
    if (this.state.cargando) {
      return <div>El portfolio se está cargando, un momento por favor</div>
    }
    this.getPortfolioItems();
    return (
      <div>
        <h2>{this.state.tituloPag}</h2>
        <button onClick={() => this.manejarFiltro("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.manejarFiltro("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.manejarFiltro("Enterprise")}>
          Enterprise
        </button>
        {this.portfolioItems()}
      </div>
    );
  }
}

