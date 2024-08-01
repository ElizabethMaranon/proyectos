// import moment from 'moment';
const hoy = moment();
const Hoy = hoy.format("dddd, Do of MMM of YYYY");
// Bienvenido
const Bienvenido =
  "Bienvenido a Bottega Restaurante \nNuestro horario es: \n \n Desayunos de 6 a 12 \n Comidas de 13 a 16 \n Merienda de 17 a 19 \n Cenas de 20 a 24 \n \n Por favor, indique la hora en formato HH \n";
const noIncluido = "Ese plato no está incluido en el menú";
// Lista menus
let horaVal = false;
let hora;

const Desayunos = { Cafe: 1, Zumo: 3, Croisant: 2 };

const Entrantes = { Ensalada: 10, Calamares: 15, Ibéricos: 20 };
let entrantesKey = Object.keys(Entrantes);
let entrantesValue = Object.values(Entrantes);
let entrantes;
let entrantesVal = false;
let entrantesPrompt;

const Principales = { Pavo: 15, Carrilleras: 22, Chuleta: 25 };
let principalesKey = Object.keys(Principales);
let principalesValue = Object.values(Principales);
let principales;
let principalesVal = false;
let principalesPropmt;

const Postres = { Tarta: 8, Helado: 5, Fruta: 2 };
let postresKey = Object.keys(Postres);
let postresValue = Object.values(Postres);
let postres;
let postresVal = false;
let postresPropmt;

// Desglose array
let DesayunosCarta = "";
for (let [Desayuno, precio] of Object.entries(Desayunos)) {
  DesayunosCarta += Desayuno + ": " + precio + " €\n";
}
let MeriendasCarta = "";
for (let [Merienda, precio] of Object.entries(Desayunos)) {
  MeriendasCarta += Merienda + ": " + (precio + 1) + " €\n";
}
let EntrantesCarta = "";
for (let [Entrante, precio] of Object.entries(Entrantes)) {
  EntrantesCarta += Entrante + ": " + precio + " €\n";
}
let PrincipalesCarta = "";
for (let [Principal, precio] of Object.entries(Principales)) {
  PrincipalesCarta += Principal + ": " + precio + " €\n";
}
let PostresCarta = "";
for (let [Postre, precio] of Object.entries(Postres)) {
  PostresCarta += Postre + ": " + precio + " €\n";
}
let EntrantesCartaNoche = "";
for (let [Entrante, precio] of Object.entries(Entrantes)) {
  EntrantesCartaNoche += Entrante + ": " + (precio + 5) + " €\n";
}
let PrincipalesCartaNoche = "";
for (let [Principal, precio] of Object.entries(Principales)) {
  PrincipalesCartaNoche += Principal + ": " + (precio + 5) + " €\n";
}
let PostresCartaNoche = "";
for (let [Postre, precio] of Object.entries(Postres)) {
  PostresCartaNoche += Postre + ": " + (precio + 5) + " €\n";
}
//Cartas
let CartaMediodia =
  "Entrantes: \n" +
  EntrantesCarta +
  "\n \n" +
  "Principales: \n" +
  PrincipalesCarta +
  "\n \n" +
  "Postres \n" +
  PostresCarta;
let CartaNoche =
  "Entrantes: \n" +
  EntrantesCartaNoche +
  "\n \n" +
  "Principales: \n" +
  PrincipalesCartaNoche +
  "\n \n" +
  "Postres \n" +
  PostresCartaNoche;

// Comentarios
let comentario = "";
let aleatorio = "";
function ComentarioCamarero() {
  var comentarios =
    "Buena elección, Ese plato tiene buena pinta, Una elección muy buena, Sabia elección";
  comentario = comentarios.split(",");
  aleatorio = Math.floor(Math.random() * comentario.length);
  return comentario[aleatorio];
}

//Mayus
const mayus = (t) => {
  return t[0].toUpperCase() + t.substr(1);
};

// While

while (!horaVal) {
  hora = prompt(Bienvenido);
  if (hora === null) break;
  horaVal = hora > parseInt(5) && hora < parseInt(24);
  if (!horaVal) {
    alert("Por favor, indique la hora correctamente, formato HH\n");
  }
  if (hora >= 6 && hora <= 12) {
    alert("El desayuno de hoy, " + Hoy + "es: \n" + DesayunosCarta);
    alert("cuenta");
  } else if (hora >= 13 && hora <= 16) {
    alert("La comida de hoy, " + Hoy + "es: \n" + CartaMediodia);
    while (!entrantesVal) {
      entrantesPrompt = prompt(EntrantesCarta);
      if (entrantesPrompt === null) break;
      entrantesVal = entrantesKey.includes(entrantesPrompt);
      if (!entrantesVal) {
        alert(noIncluido);
      } else if (entrantesVal) {
        alert(ComentarioCamarero());
      }
    }
    while (!principalesVal) {
      principalesPropmt = prompt(PrincipalesCarta);
      if (principalesPropmt === null) break;
      principalesVal = principalesKey.includes(principalesPropmt);
      if (!principalesVal) {
        alert(noIncluido);
      } else if (principalesVal) {
        alert(ComentarioCamarero());
      }
    }
    while (!postresVal) {
      postresPropmt = prompt(PostresCarta);
      if (postresPropmt === null) break;
      postresVal = postresKey.includes(postresPropmt);
      if (!postresVal) {
        alert(noIncluido);
      } else if (postresVal) {
        alert(ComentarioCamarero());
        alert("cuenta");
      }
    }
  } else if (hora >= 17 && hora <= 19) {
    alert("La merienda de hoy, " + Hoy + "es: \n" + MeriendasCarta);
    alert("Cuenta");
  } else if (hora >= 20 && hora <= 24) {
    alert("La comida de hoy, " + Hoy + "es: \n" + CartaNoche);
    while (!entrantesVal) {
      entrantesPrompt = prompt(EntrantesCartaNoche);
      if (entrantesPrompt === null) break;
      entrantesVal = entrantesKey.includes(entrantesPrompt);
      if (!entrantesVal) {
        alert(noIncluido);
      } else if (entrantesVal) {
        alert(ComentarioCamarero());
      }
    }
    while (!principalesVal) {
      principalesPropmt = prompt(PrincipalesCartaNoche);
      if (principalesPropmt === null) break;
      principalesVal = principalesKey.includes(principalesPropmt);
      if (!principalesVal) {
        alert(noIncluido);
      } else if (principalesVal) {
        alert(ComentarioCamarero());
      }
    }
    while (!postresVal) {
      postresPropmt = prompt(PostresCartaNoche);
      if (postresPropmt === null) break;
      postresVal = postresKey.includes(postresPropmt);
      if (!postresVal) {
        alert(noIncluido);
      } else if (postresVal) {
        alert(ComentarioCamarero());
        alert("cuenta");
      }
    }
  }
}