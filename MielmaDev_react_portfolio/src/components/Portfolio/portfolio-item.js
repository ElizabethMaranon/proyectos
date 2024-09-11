// Importar react
import React from "react";
// exportar predeterminada, función con return
// Declaración return, parece html pero esl JavaScript(JSX)
export default function(props) { // agregar props y llamarlas
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
    )
}

