import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioCont extends Component {
  constructor(){
    super();
    console.log("portfolio renderizado");
  }
  portfolioItems() {
    const datos = [1,2,3,4];
    return datos.map(item => {
      return <PortfolioItem/>;
    });
  }
  render() {
    return (
      <div>
        <h2>Portfolio items go here updated...</h2>
        {this.portfolioItems()}
      </div>
    );
  }
}