// import moment from 'moment';
const hoy = moment();
const Hoy = hoy.format("dddd, Do of MMM of YYYY");

// Variable Menu 
const menus = {
    desayuno: {
        entrante: [
            { nombre: 'Zumo Naranja', precio: 3.5 },
            { nombre: 'Fruta', precio: 2.00 },
            { nombre: 'Chocolate', precio: 3.00 }
        ],
        principal: [
            { nombre: 'Napolitana', precio: 1.75 },
            { nombre: 'Tostada', precio: 1.50 },
            { nombre: 'Tortilla', precio: 2.20 }
        ],
        segundo: [
            { nombre: 'Infusión', precio: 1.50 },
            { nombre: 'Café', precio: 1.60 },
            { nombre: 'Leche', precio: 1.75 }
        ]
    },
    comida: {
        entrante: [
            { nombre: 'Ensalada', precio: 10.50 },
            { nombre: 'Calamares', precio: 14.75 },
            { nombre: 'Tabla Ibéricos', precio: 20.25 }
        ],
        principal: [
            { nombre: 'Pavo Jardinera', precio: 15.00},
            { nombre: 'Carrilleras En Salsa', precio: 21.50 },
            { nombre: 'Chuleta A La Brasa', precio: 25.75 }
        ],
        segundo: [
            { nombre: 'Tarta Helada', precio: 7.55 },
            { nombre: 'Coulant Chocolate', precio: 6.75 },
            { nombre: 'Helado', precio: 5.50 }
        ]
    },
    cena: {
        entrante: [
            { nombre: 'Ensalada', precio: 12.50 },
            { nombre: 'Calamares', precio: 16.75 },
            { nombre: 'Tabla Ibéricos', precio: 22.25 }
        ],
        principal: [
            { nombre: 'Pavo Jardinera', precio: 17.00},
            { nombre: 'Carrilleras En Salsa', precio: 23.50 },
            { nombre: 'Chuleta A La Brasa', precio: 27.75 }
        ],
        segundo: [
            { nombre: 'Tarta Helada', precio: 9.55 },
            { nombre: 'Coulant Chocolate', precio: 8.75 },
            { nombre: 'Helado', precio: 7.50 }
        ]
    }
};

// Comentarios
const comentarios = [
    "¡Buena elección!",
    "Ese plato tiene buena pinta.",
    "Una elección muy buena.",
    "Sabia elección.",
    "¡Tienes un gusto exquisito"
];
const comentarioMenu = {
    desayuno: [
        "¡Egun on! Aquí tienes la carta del desayuno.",
        "¡Buenos días! ¿Que te apetecería desayunar hoy?",
        "¡Bienvenido! Espero el desayuno sea de tu agrado."
    ],
    comida: [
        "¡Eguerdi on! Te presento la carta de hoy." ,
        "¡Hora de Comer! Espero vengas con apetito.",
        "¡Bienvenido! ¿Qué te apetecería cenar?"
    ],
    cena: [
        "¡Gau on! La cena ya está  lista.",
        "¡Hora de cenar! Te muestro nuestro menú",
        "¡Bienvenido! Aquí tienes el menú para reponer fuerzas"
    ]
};

// Devuelve aleatoriamente(random) un comentario de la variable comentarios(limite la longitud de comentarios)
function comentarioAleatorio(comentarios) {
    const indice = Math.floor(Math.random() * comentarios.length);
    return comentarios[indice];
}

// Muestra el menú dependiendo de la hora
// charAt(0) → devuelve en un nuevo String el carácter UTF-16 de una cadena)
// toUpperCase() → devuelve el valor convertido en mayúsculas de la cadena que realiza la llamada.
function selectMenu(menu, tipo, tiempo) {
    let mensaje = `Menú de ${tiempo.charAt(0).toUpperCase() + tiempo.slice(1)} - ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}:\n\n`;
    menu.forEach((articulo, index) => {
        mensaje += `${index + 1}. ${ .nombre} - ${articulo.precio.toFixed(2) } €\n`;
    });

    let selectHora = NaN;
    while (isNaN(selectHora) || selectHora < 1 || selectHora > menu.length) {
        let seleccion = prompt(`\n${mensaje}\nElige el número del plato ${tipo} (1-${menu.length}):`);
        if (seleccion === null) { 
            alert("Proceso cancelado.");
            return null;
        }
        selectHora = parseInt(seleccion, 10);
        if (isNaN(selectHora) || selectHora < 1 || selectHora > menu.length) {
            alert("Hora no válida. Por favor, ingresa la hora correctamente");
        }
    }

    const articulo = menu[selectHora - 1];
    alert(comentarioAleatorio(comentarios));
    return articulo;
}

// Tipo menu
function tipoMenu(hora) { // Forma de escribir la hora a introducir
    const [hours, minutes] = hora.split(':').map(Number);
    // Condiciones de hora a introducir (entre 8 y 24), no mayor de 23:00,  es hora,  es minutos
    if (hours < 8 || hours >= 24 || (hours === 23 && minutes > 0) || isNaN(hours) || isNaN(minutes)) {
        return null;
    }
    // Desayuno, de 8 a 10 H
    if (hours >= 8 && hours <= 10) {
        return 'desayuno';
      // Comida de 11 a 16
    } else if (hours >= 11 && hours <= 16) {
        return 'comida';
      // Cena de 17 a 23
    } else if (hours >= 17 && hours <= 23) {
        return 'cena';
    } else {
        return null;
    }
}

// Ejecutar menu
function ejecutarMenu() {
    let horaComida = null;
    while (!horaComida) { // Mientras hora  no sea nula
        const horaSeleccionada = prompt("Bienvenido a Bottega Restaurante \nHoy es " + Hoy + "\nNuestro horario es de 08:00am a 23:00pm.\nPor favor, indique la hora (HH:MM)");
        if (horaSeleccionada === null) { 
            alert("Proceso cancelado.");
            return;
        }
        horaComida = tipoMenu(horaSeleccionada); // 
        if (!horaComida) {
            alert("Hora no válida. Por favor, ingresa la hora correctamente");
        }
    }

    // Comentario dependiendo hora
    const comentarioHora = comentarioAleatorio(comentarioMenu[horaComida]);
    alert(comentarioHora);

    const menu = menus[horaComida];

    // Entrante elegido
    const Entrante = selectMenu(menu.entrante, 'entrante', horaComida);
    if (!Entrante) return;  // Si el usuario cancela


    // Principal elegido
    const Principal = selectMenu(menu.principal, 'principal', horaComida);
    if (!Principal) return;  // Si el usuario cancela

    // Segundo elegido
    const Segundo = selectMenu(menu.segundo, 'segundo', horaComida);
    if (!Segundo) return;  // Si el usuario cancela


    // Cuenta 
   const costoTotal = Entrante.precio + Principal.precio + Segundo.precio;
    alert(`Bottega Restaurante, ${Hoy}\n\nAquí tienes la cuenta\n${Entrante.nombre} = ${Entrante.precio} €\n${Principal.nombre} = ${Principal.precio} €\n${Segundo.nombre} = ${Segundo.precio} €\n\nTotal cuenta: ${costoTotal.toFixed(2)} €\nMuchas gracias por su visita.\nEsperamos volver a verle pronto.`);
}



// Ejecutar el menú
ejecutarMenu();