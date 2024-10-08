import React, { Component } from "react";
import axios from "axios"; // importar axios para conectar API

export default class BlogForm extends Component { // componente de clase
  constructor(props) {
    super(props);

    this.state = { // datos qe queremos que estén
      title: "",
      blog_status: ""
    };

    this.handleChange = this.handleChange.bind(this); // vincular constructor
    this.handleSubmit = this.handleSubmit.bind(this); // vincular constructor
  }

  buildForm() { // función construir formulario
    let formData = new FormData();  // formData: Es una clase en JavaScript que nos permite tener pares clave-valor pero también agregar un nivel de abstracción a los datos que pasamos a una API

    formData.append("portfolio_blog[title]", this.state.title); // agregar objeto que acabamos de crear
    formData.append("portfolio_blog[blog_status]", this.state.blog_status);// agregar objeto que acabamos de crear

    return formData;
  }

  handleSubmit(event) { // función enviar
    axios
      .post( // agregar en devcamp space, url de la API
        "https://mielmadev.devcamp.space/portfolio/portfolio_blogs",
        this.buildForm(), // Llama al método
        { withCredentials: true } // Autorizarnos a nosotros mismos porque aquí es donde la seguridad es importante
      )
      .then(response => { // que hacer al regresar
        this.props.handleSuccessfullFormSubmission(
          response.data.portfolio_blog
        );

        this.setState({ // Crear cadena vacía para que al enviar sustituya lo escrito por las strings 
          title: "",
          blog_status: ""
        }); // lo que se envía
      })
      .catch(error => { // en caso de error e la función
        console.log("Envío a blog ha tenido un error", error);
      });
    
    event.preventDefault();
  }

  handleChange(event) { // Función cambios con evento de argumento
    this.setState({ // Dinámico:  si  clave =  variable,  la encierra entre corchetes.
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
        <div className="two-column">
          <input
            type="text"
            onChange={this.handleChange}
            name="title"
            placeholder="Blog Title"
            value={this.state.title}
          />

        <input
            type="text"
            onChange={this.handleChange}
            name="blog_status"
            placeholder="Blog status"
            value={this.state.blog_status}
          />
        </div>

        <button className="btn">Guardar</button>{/* botón guardar cambios */}
      </form>
    );
  }
}