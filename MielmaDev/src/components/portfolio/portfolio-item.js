import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class PortfolioItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      portfolioItemClass: ""
    };
  }

  manejarMouseEntrada() {
    this.setState({ portfolioItemClass: "image-borrosa" });
  }

  manejarMouseSalida() {
    this.setState({ portfolioItemClass: "" });
  }

  render() {
    const { id, description, thumb_image_url, logo_url } = this.props.item;
    return (
      <div
        className="portfolio-item-paq"
        onMouseEnter={() => this.manejarMouseEntrada()}
        onMouseLeave={() => this.manejarMouseSalida()}
      >
        <div
          className={
            "portfolio-img-fondo" + this.state.portfolioItemClass
          }
          style={{
            backgroundImage: "url(" + thumb_image_url + ")"
          }}
        />

        <div className="img-text-paq">
          <div className="logo-paq">
            <img src={logo_url} />
          </div>

          <div className="subtitulo">{description}</div>
        </div>
      </div>
    );
  }
}