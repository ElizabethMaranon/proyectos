import React from "react";
import { Link } from 'react-router-dom';

export default function (props) {
  const { id, description, thumb_image_url, logo_url } = props.item;
  return (
    <div className="portfolio-item-paq">
      <div
        className="portfolio-img-fondo"
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
