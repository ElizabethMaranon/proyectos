import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";

export default class PortfolioCont extends Component {
  constructor(){
    super();
    console.log("portfolio renderizado");
  }
  render() {
    return (
      <div>
        <h2>Portfolio items go here updated...</h2>
        <PortfolioItem />
      </div>
    );
  }
}