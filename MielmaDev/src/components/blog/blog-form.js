import React, { Component } from "react";

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

  handleSubmit(event) { // función enviar
    this.props.handleSuccessfullFormSubmission(this.state); // propiedades Envío de formulario exitoso
    event.preventDefault();
  }

  handleChange(event) { // Función cambios con evento de argumento
    this.setState({ // Dinámico:  si  clave =  variable,  la encierra entre corchetes.
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange} // llamar a función cambios
          name="title" // datos obtenidos de virtual dom
          placeholder="Blog Title"
          value={this.state.title}
        />
        <input
          type="text"
          onChange={this.handleChange}// llamar a función cambios
          name="blog_status"// datos obtenidos de virtual dom
          placeholder="Blog status"
          value={this.state.blog_status}
        />

        <button>Save</button>{/* botón guardar cambios */}
      </form>
    );
  }
}