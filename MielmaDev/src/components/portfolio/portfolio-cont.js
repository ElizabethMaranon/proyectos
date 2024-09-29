import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";


export default class PortfolioCont extends Component {
  constructor() {
    super();

    this.state = {
      tituloPag: "Bienvenido al portfolio de MielmaDev",
      cargando: false,
      datos: []
    };

    this.manejarFiltro = this.manejarFiltro.bind(this);
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
      .then(respuesta => {
        this.setState({
          datos: respuesta.data.portfolio_items
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.datos.map(item => {
      return <PortfolioItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  render() {
    if (this.state.cargando) {
      return <div>El portfolio se está cargando, un momento por favor</div>
    }

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

        <div className="portfolio-items-paq">{this.portfolioItems()}</div>
      </div>
    );
  }
}

