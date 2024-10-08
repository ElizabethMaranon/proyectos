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
        this.setState({ // configurar blogItem
          blogItem: response.data.portfolio_blog
        });
      })
      .catch(error => {  // detector de error
        console.log("getBlogItem error", error);
      });
  }

  componentDidMount() {// fase montaje (componentWillMount obsoleto)
    this.getBlogItem();// llamar función y ejecutar
  }

  render() { // Obligatorio class component 
    const { // Atributos (desestructuración palabras clave)
      title,
      content,
      featured_image_url,
      blog_status
    } = this.state.blogItem;
    return (
      <div>
        <h1>{title}</h1> {/*Obtener título */}
        <img src={featured_image_url} />{/* Obtener imagen sin estilo */}
        <div>{content}</div> {/*Obtener contenido */}
      </div>
    );
  }
}