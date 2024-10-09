import React, { Component } from "react"; // importar componente react
import { Link } from "react-router-dom";
import axios from "axios"; // Poder conectar con API
import BlogItem from "../blog/blog-item"; // importar blog-item.js

class Blog extends Component { // Agregar Class
  constructor() { // Obligatorio Constructor
    super(); // Obligatorio Super en constructor

    this.state = { // Crear instancia
      blogItems: [], // lMatriz vacía para poblar después
      totalCount: 0, // cont total pred 0 (para cuando tengamos el constructor, queremos que se cargue antes de que lleguen nuestros registros que se anulará tan pronto como recibamos esa actualización)
      currentPage: 0 // página actual pred 0 (para cuando tengamos el constructor, queremos que se cargue antes de que lleguen nuestros registros que se anulará tan pronto como recibamos esa actualización)
    };

    this.getBlogItems = this.getBlogItems.bind(this); // Vincular función
    this.activateInfiniteScroll(); // llamarla pero no vincularla a this
  }

  activateInfiniteScroll() { // crear función
    window.onscroll = () => { // Cuando se desplaza la barra de desplazamiento
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log("get more posts");
      }
    };
  }

  getBlogItems() { // Crear función sin argumento
    this.setState({
      currentPage: this.state.currentPage + 1 // de inmediato vamos a querer actualizar nuestro estado e incrementarlo en uno para la página actual. Comenzará en cero en el constructor, pero tan pronto como se llame a getBlogItems, lo actualizaremos para que sea uno, sucesivamente
    });

    axios // Método de obtención

      .get("https://mielmadev.devcamp.space/portfolio/portfolio_blogs", { // get url endpoint (es el subdominio, en este caso devcamp space de mielmadev)
        withCredentials: true //indicador credenciales obligatorio, booleano
      })
      .then(response => { // Cuando se resuelva la promesa
        this.setState({ // ir API, recuperar datos
          blogItems: response.data.portfolio_blogs, // cuando llegue la respuesta, llamar a this.setState, y dentro de los pares, y luego un objeto
          totalCount: response.data.meta.total_records // Asi lo llama la API
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