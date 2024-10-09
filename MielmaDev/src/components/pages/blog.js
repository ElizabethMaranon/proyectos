import React, { Component } from "react"; // importar componente react
import { Link } from "react-router-dom";
import axios from "axios"; // Poder conectar con API
import BlogItem from "../blog/blog-item"; // importar blog-item.js

class Blog extends Component { // Agregar Class
  constructor() { // Obligatorio Constructor
    super(); // Obligatorio Super en constructor

    this.state = { // Crear instancia
      blogItems: [] // lMatriz vacía para poblar después
    };

    this.getBlogItems = this.getBlogItems.bind(this); // Vincular función
  }

  getBlogItems() { // Crear función sin argumento
    axios // Método de obtención
      
      .get("https://mielmadev.devcamp.space/portfolio/portfolio_blogs", { // get url endpoint (es el subdominio, en este caso devcamp space de mielmadev)
        withCredentials: true //indicador credenciales obligatorio, booleano
      })
      .then(response => { // Cuando se resuelva la promesa
        this.setState({ // ir API, recuperar datos
          blogItems: response.data.portfolio_blogs // cuando llegue la respuesta, llamar a this.setState, y dentro de los pares, y luego un objeto
        });
      })
      .catch(error => { // detector de error
        console.log("getBlogItems error", error);
      });
  }

  componentDidMount() { // fase montaje (componentWillMount obsoleto)
    this.getBlogItems(); // llamar función y ejecutar
  }

  render() { // Obligatorio class component 
    const blogRecords = this.state.blogItems.map(blogItem => { // Crear variable almacenará registros blog. Mapear(iterar) devuelve matriz
      return <BlogItem key={blogItem.id} blogItem={blogItem} />; // Devolver con clave única
    });
    
    return (
      <div className="blog-container">
        <div className="content-container">{blogRecords}</div>
      </div>
    );
  }
}

export default Blog; // exportar class componente