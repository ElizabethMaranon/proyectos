import React, { Component } from "react"; 
import ReactModal from "react-modal";

export default class BlogModal extends Component { // componente clase xq tiene su propio estado
  constructor(props) { // constructor básico con accesorios
    super(props); // llamará a super
  }
  
  render() { // función render obligatoria para class component
    return ( // devuelve
      <ReactModal isOpen={true}>{/* Accesorio */}
        <h1>I'm in a modal!</h1>{/* Lo que sucede */}
      </ReactModal> // cerrar accesorio, (componente secundario no autocierre)
    );
  }
}