import React, { Component } from "react"; // importar componente react
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // importar iconos
import axios from "axios"; // Poder conectar con API
import BlogItem from "../blog/blog-item"; // importar blog-item.js
import BlogModal from "../modals/blog-modal"; // importar blog-modal sin componente

class Blog extends Component { // Agregar Class
  constructor() { // Obligatorio Constructor
    super(); // Obligatorio Super en constructor

    this.state = { // Crear instancia
      blogItems: [], // lMatriz vacía para poblar después
      totalCount: 0, // cont total pred 0 (para cuando tengamos el constructor, queremos que se cargue antes de que lleguen nuestros registros que se anulará tan pronto como recibamos esa actualización)
      currentPage: 0, // página actual pred 0 (para cuando tengamos el constructor, queremos que se cargue antes de que lleguen nuestros registros que se anulará tan pronto como recibamos esa actualización)
      isLoading: true, // llamar
      blogModalIsOpen: false
    };

    this.getBlogItems = this.getBlogItems.bind(this); // Vincular función
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false); // agregar oyente en constructor
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this); // vincular la función
    this.handleModalClose = this.handleModalClose.bind(this); // vincular función
    this.handleSuccessfulNewBlogSubmission = this.handleSuccessfulNewBlogSubmission.bind(
      this // vincualr función
    );
  }

  handleSuccessfulNewBlogSubmission(blog) { // función nuevo blog envio exitoso
    this.setState({
      blogModalIsOpen: false,
      blogItems: [blog].concat(this.state.blogItems) // tomar ese blog. grabar y luego pasarlo directamente a nuestra lista de nuestros blogs
    });
  }

  handleModalClose() { // Crear función
    this.setState({ // Unir estado
      blogModalIsOpen: false // establecer estado falso
    });
  }

  handleNewBlogClick() { // agregar función
    this.setState({ // actualizar estado si agregar nueva publicación
      blogModalIsOpen: true
    });
  }
  // eliminar oyentes y colocarlos en constructor
  onScroll() {// Cuando se desplaza la barra de desplazamiento
    if ( // si el estado cargando o la longitud de los elementos igual totalCount, parar
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return;
    }

    if ( //altura ventana mas scroll añadidos igual altura total documento
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getBlogItems(); // mostrar elementos
    }
  }

  getBlogItems() { // Crear función sin argumento
    this.setState({
      currentPage: this.state.currentPage + 1 // de inmediato vamos a querer actualizar nuestro estado e incrementarlo en uno para la página actual. Comenzará en cero en el constructor, pero tan pronto como se llame a getBlogItems, lo actualizaremos para que sea uno, sucesivamente
    });

    axios // Método de obtención
      .get( // get url endpoint (es el subdominio, en este caso devcamp space de mielmadev)
        `https://mielmadev.devcamp.space/portfolio/portfolio_blogs?page=${this
          .state.currentPage}`,
        {
          withCredentials: true //indicador credenciales obligatorio, booleano
        }
      )
      .then(response => { // ir API, recuperar datos
        console.log("getting - consiguiendo", response.data); // devolver cuando se llama a blogItems
        this.setState({// cuando llegue la respuesta, llamar a this.setState, y dentro de los pares, y luego un objeto
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs), // coger la lista actual y concat con lo que viene de la matriz
          totalCount: response.data.meta.total_records, // Asi lo llama la API
          isLoading: false // para que salga animación de cargando si es true
        });
      })
      .catch(error => { // detector de error
        console.log("getBlogItems error", error);
      });
  }

  componentDidMount() { // fase montaje (componentWillMount obsoleto)
    this.getBlogItems(); // llamar función y ejecutar
  }

  componentWillUnmount() { // se activa al desaparecer el componente
    window.removeEventListener("scroll", this.onScroll, false);
  }

  render() { // Obligatorio class component 
    const blogRecords = this.state.blogItems.map(blogItem => { // Crear variable almacenará registros blog. Mapear(iterar) devuelve matriz
      return <BlogItem key={blogItem.id} blogItem={blogItem} />; // Devolver con clave única
    });

    return ( // JSX
      <div className="blog-container">
        <BlogModal
          handleSuccessfulNewBlogSubmission={
            this.handleSuccessfulNewBlogSubmission
          } // Pasar como accesorio
          handleModalClose={this.handleModalClose} // agregar accesorio
          modalIsOpen={this.state.blogModalIsOpen} /> {/*Pasar accesorio con valor dinámico*/}

        <div className="new-blog-link">
          <a onClick={this.handleNewBlogClick}>Open Modal!</a> {/*manejar oyente */}
        </div>
        <div className="content-container">{blogRecords}</div>

        {this.state.isLoading ? ( // operador ternario
          <div className="content-loader">{/*si esta cargando */}
            <FontAwesomeIcon icon="spinner" spin />
          </div>
        ) : null} {/* si esta cargando aparece icono en movimiento, de lo contrario no aparece nada */}
      </div>
    );
  }
}

export default Blog; // exportar class componente