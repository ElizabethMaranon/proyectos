import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioCont extends Component {
  constructor() {
    super();

    this.state = {
      tituloPag: "Bienvenido al portfolio de MielmaDev",
      datos: [
        { titulo: 1 },
        { titulo: 2 },
        { titulo: 3 },
        { titulo: 4 },
      ]

    };
    this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
  }

  portfolioItems() {
    return this.state.datos.map(item => {
      return <PortfolioItem titulo={item.titulo} url={"mielmadev.com"} />;
    });
  }

  handlePageTitleUpdate() {
    this.setState({
      pageTitle: "Something Else"
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        {this.portfolioItems()}

        <hr />

        <button onClick={this.handlePageTitleUpdate}>Change Title</button>
      </div>
    );
  }
}