// Menús 
const menus = {
    desayuno: {
        platos: [
            { nombre: 'Pancakes', precio: 5.99 },
            { nombre: 'Huevos al gusto', precio: 6.99 },
            { nombre: 'Caldo de costilla', precio: 4.99 }
        ],
        guarniciones: [
            { nombre: 'Muffins', precio: 2.99 },
            { nombre: 'Pan', precio: 2.99 },
            { nombre: 'Yogurt', precio: 1.99 }
        ],
        guarniciones_2: [
            { nombre: 'Frutas Frescas', precio: 3.00 },
            { nombre: 'Avena', precio: 2.50 },
            { nombre: 'Tostadas', precio: 1.99 }
        ]
    },
    almuerzo: {
        platos: [
            { nombre: 'Bandeja paisa', precio: 8.99 },
            { nombre: 'Sancocho de gallina', precio: 7.99 },
            { nombre: 'Arroz con pollo', precio: 6.99 }
        ],
        guarniciones: [
            { nombre: 'Papas Fritas', precio: 2.99 },
            { nombre: 'Ensalada', precio: 3.99 },
            { nombre: 'Helado', precio: 2.99 }
        ],
        guarniciones_2: [
            { nombre: 'Ensalada Mixta', precio: 3.00 },
            { nombre: 'Puré de Papas', precio: 2.50 },
            { nombre: 'Cuscús', precio: 1.99 }
        ]
    },
    cena: {
        platos: [
            { nombre: 'Horse bistec', precio: 10.99 },
            { nombre: 'Pulpo al vapor', precio: 9.99 },
            { nombre: 'Calentado de frijol', precio: 8.99 }
        ],
        guarniciones: [
            { nombre: 'Chupito', precio: 3.99 },
            { nombre: 'Cerveza', precio: 4.99 },
            { nombre: 'Vino', precio: 3.99 }
        ],
        guarniciones_2: [
            { nombre: 'Judías Verdes', precio: 3.00 },
            { nombre: 'Macarrones con Queso', precio: 2.50 },
            { nombre: 'Espárragos a la Parrilla', precio: 1.99 }
        ]
    }
};

// Comentarios de la camarera
const comentarios = [
    "¡Buena elección!",
    "Eso suena delicioso.",
    "Esa es una opción popular.",
    "Espero que disfrutes tu comida.",
    "¡Qué buen gusto tienes!"
];

// Comentarios de la hora de comida
const comentariosHoraComida = {
    desayuno: [
        "¡Buenos días! Es hora de desayunar y comenzar tu día con energía.",
        "Es hora de desayunar. ¿Qué te gustaría comer esta mañana?",
        "Desayuno listo. ¡Elige tus platos favoritos para empezar bien el día!"
    ],
    almuerzo: [
        "Es la hora del almuerzo. ¿Qué te gustaría disfrutar esta tarde?",
        "¡Hora de almorzar! Perfecto para recargar energías para la tarde.",
        "Es el momento ideal para un buen almuerzo. ¿Qué te apetece?"
    ],
    cena: [
        "Buenas noches. Es hora de cenar y relajarse después de un largo día.",
        "Es la hora de la cena. Elige algo delicioso para terminar el día.",
        "Cena lista. ¡Perfecto para disfrutar una buena comida antes de descansar!"
    ]
};

// Función para seleccionar un comentario aleatorio
function obtenerComentarioAleatorio(comentarios) {
    const indice = Math.floor(Math.random() * comentarios.length);
    return comentarios[indice];
}

// Función para mostrar el menú completo y permitir la selección
function seleccionarArticulo(menu, tipo, tiempo) {
    let mensaje = `Menú de ${tiempo.charAt(0).toUpperCase() + tiempo.slice(1)} - ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:\n\n`;
    menu.forEach((articulo, index) => {
        mensaje += `${index + 1}. ${articulo.nombre} - €${articulo.precio.toFixed(2)}\n`;
    });

    let seleccionNumerica = NaN;
    while (isNaN(seleccionNumerica) || seleccionNumerica < 1 || seleccionNumerica > menu.length) {
        let seleccion = prompt(`\n${mensaje}\nSelecciona un ${tipo} (1-${menu.length}):`);
        if (seleccion === null) {
            alert("Proceso cancelado.");
            return null;
        }
        seleccionNumerica = parseInt(seleccion, 10);
        if (isNaN(seleccionNumerica) || seleccionNumerica < 1 || seleccionNumerica > menu.length) {
            alert("Entrada no válida. Por favor, ingresa un número válido dentro del rango del menú.");
        }
    }

    const articulo = menu[seleccionNumerica - 1];
    alert(obtenerComentarioAleatorio(comentarios));
    return articulo;
}

// Función para determinar el momento de la comida basado en la hora ingresada
function obtenerMomentoComida(hora) {
    const [hours, minutes] = hora.split(':').map(Number);
    
    if (hours < 8 || hours >= 24 || (hours === 23 && minutes > 0) || isNaN(hours) || isNaN(minutes)) {
        return null;
    }
    
    if (hours >= 8 && hours <= 10) {
        return 'desayuno';
    } else if (hours >= 11 && hours <= 16) {
        return 'almuerzo';
    } else if (hours >= 17 && hours <= 23) {
        return 'cena';
    } else {
        return null;
    }
}

// Función principal para ejecutar el menú
function ejecutarMenu() {
    let momentoComida = null;
    while (!momentoComida) {
        const horaSeleccionada = prompt("Bienvenido a Bottega fast Food, horario atencion 08:00am a 23:00pm, Ingresa la hora (HH:MM) para seleccionar tu comida:");
        if (horaSeleccionada === null) {
            alert("Proceso cancelado.");
            return;
        }
        momentoComida = obtenerMomentoComida(horaSeleccionada);
        if (!momentoComida) {
            alert("Hora no válida. Por favor, ingresa una hora dentro de las franjas horarias permitidas.");
        }
    }

    // Obtener un comentario adecuado para la hora de la comida
    const comentarioHora = obtenerComentarioAleatorio(comentariosHoraComida[momentoComida]);
    alert(comentarioHora);

    const menu = menus[momentoComida];

    // Selección de plato principal
    const platoPrincipal = seleccionarArticulo(menu.platos, 'plato principal', momentoComida);
    if (!platoPrincipal) return;  // Si el usuario cancela


    // Selección de guarniciones
    const guarnicion1 = seleccionarArticulo(menu.guarniciones, 'guarnición', momentoComida);
    if (!guarnicion1) return;  // Si el usuario cancela


    const guarnicion2 = seleccionarArticulo(menu.guarniciones_2, 'guarnición', momentoComida);
    if (!guarnicion2) return;  // Si el usuario cancela


    // Sumar el costo total
   const costoTotal = platoPrincipal.precio + guarnicion1.precio + guarnicion2.precio;
    alert(`Bottega Fast Food\n\nRecibo venta\n${platoPrincipal.nombre} = €${platoPrincipal.precio}\n${guarnicion1.nombre} = €${guarnicion1.precio}\n${guarnicion2.nombre} = €${guarnicion2.precio} \n\nCosto total: €${costoTotal.toFixed(2)}\nGracias por Visitarnos`);
}



// Ejecutar el menú
ejecutarMenu();