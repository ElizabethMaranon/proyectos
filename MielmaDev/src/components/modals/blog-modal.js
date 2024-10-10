import React, { Component } from "react";
import ReactModal from "react-modal";

import BlogForm from "../blog/blog-form"; // importar blog formulario

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component { // componente clase xq tiene su propio estado
  constructor(props) { // constructor básico con accesorios
    super(props); // llamará a super

    this.customStyles = { // agregar estilos modal
      content: {
        top: "50%",
        left: "50%",
        right: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%",
        width: "800px"
      },
      overlay: { // superposición
        backgroundColor: "rgba(238, 202, 85, 0.75)" // color superposición (0,75 es el grado de traslucido)
      }
    };
  }

  render() { // función render obligatoria para class component
    return ( // devuelve
      <ReactModal
                style={this.customStyles} // llamar al estilo
        onRequestClose={() => { // accesorio onRequestClose
          this.props.handleModalClose(); // Aplicar componente
        }}
        isOpen={this.props.modalIsOpen}>{/* llamar Accesorio */}
        <BlogForm />{/* Lo que sucede, agregar el formulario */}
      </ReactModal> // cerrar accesorio, (componente secundario no autocierre)
    );
  }
}