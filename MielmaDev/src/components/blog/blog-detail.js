import React, { Component } from "react"; // importar react component
import axios from "axios"; // Conectar API

export default class BlogDetail extends Component { // Class Component
  constructor(props) { // llamar constructor con accesorios porque necesitamos poder acceder al parámetro de ruta
    super(props); // Super obligatorio por constructor
    this.state = { // representa estado actual id {// método que utiliza para actualizar}
      currentId: this.props.match.params.slug, 
      blogItem: {} // comenzará como un objeto vacío, 
    };
  }

  getBlogItem() { // Crear función sin argumento
    axios// Método de obtención
      .get( // get url endpoint (es el subdominio, en este caso devcamp space de mielmadev)
        `https://mielmadev.devcamp.space/portfolio/portfolio_blogs/${this.state
          .currentId}`
      )
      .then(response => { // Cuando se resuelva la promesa
        console.log("response", response); // probar
      })
      .catch(error => {  // detector de error
        console.log("getBlogItem error", error);
      });
  }

  componentDidMount() {// fase montaje (componentWillMount obsoleto)
    this.getBlogItem();// llamar función y ejecutar
  }

  render() { // Obligatorio class component 
    return (
      <div>
        <h1>Blog detail</h1>
      </div>
    );
  }
}