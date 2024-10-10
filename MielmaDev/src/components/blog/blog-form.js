import React, { Component } from "react";

export default class BlogForm extends Component { // componente de clase
  render() {
    return (
      <form>
        <input type="text" />{/* Recuadro escritura */}
        <input type="text" />{/* Recuadro escritura */}

        <button>Save</button>{/* botón guardar cambios */}
      </form>
    );
  }
}