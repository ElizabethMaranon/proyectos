// Moment
const hoy = moment();
const Hoy = hoy.format("dddd, Do of MMM of YYYY");
// Lista menus
const Desayunos = { Cafe: 1, Zumo: 3, Croisant: 2 };
const Entrantes = { Ensalada: 10, Calamares: 15, Ibéricos: 20 };
const Principales = { Pavo: 15, Carrilleras: 22, Chuleta: 25 };
const Postres = { Tarta: 8, Helado: 5, Fruta: 2 };
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
// Cartas
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
// While hora
let horaVal = false;
let hora;

while (!horaVal) {
  hora = prompt(
    "Bienvenido a Bottega Restaurante \nNuestro horario es: \n \n" +
      "Desayunos de 6 a 12 \n" +
      "Comidas de 13 a 16 \n" +
      "Merienda de 17 a 19 \n" +
      "Cenas de 20 a 24 \n \n" +
      "Por favor, indique la hora en formato HH \n"
  );
  horaVal =
    (hora > 5 && hora < 24 && !isNaN(hora) && hora !== "") || hora === null;

  if (!horaVal) {
    alert("Por favor, indique la hora correctamente\n Formato HH");
  }
  if (hora >= 6 && hora <= 12) {
    alert("El desayuno de hoy, " + Hoy + "es: \n" + DesayunosCarta);
    alert("cuenta");
  } else if (hora >= 13 && hora <= 16) {
    alert("La comida de hoy, " + Hoy + "es: \n" + CartaMediodia);
    prompt(EntrantesCarta);
    prompt ("comentario camarero");
    prompt(PrincipalesCarta);
    prompt ("comentario camarero");
    prompt(PostresCarta);
    prompt ("comentario camarero");
    prompt ("La cuenta")
  } else if (hora >= 17 && hora <= 19) {
    alert("La merienda de hoy, " + Hoy + "es: \n" + MeriendasCarta);
    alert("Cuenta");
  } else if (hora >= 20 && hora <= 24) {
    alert("La cena de hoy, " + Hoy + "es: \n" + CartaNoche);
    prompt(EntrantesCartaNoche);
    prompt ("comentario camarero");
    prompt(PrincipalesCartaNoche);
    prompt ("comentario camarero");
    prompt(PostresCartaNoche);
    prompt ("comentario camarero");
    prompt ("La cuenta")
  }
}
