import React, { Component } from "react"; // importar componente react
import { Link } from "react-router-dom";

class Blog extends Component { // Agregar Class
  constructor() { // Obligatorio Constructor
    super(); // Obligatorio Super en constructor
  }

  render() { // Obligatorio class component
    return ( // Devuelve
      <div>
        <h2>Blog</h2>
        <div>
          <Link to="/about-me">Read more about myself</Link> {/*Enlace insertado*/}
        </div>
      </div>
    );
  }
}
export default Blog; // exportar class componente
