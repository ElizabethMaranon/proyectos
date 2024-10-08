import React, { Component } from "react"; // importar componente react
import { Link } from "react-router-dom";
import axios from "axios"; // Poder conectar con API

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