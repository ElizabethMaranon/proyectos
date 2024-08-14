// import moment from 'moment';
const hoy = moment();
const Hoy = hoy.format("dddd, Do of MMM of YYYY");
// Menu

const Bienvenido =
  "Bienvenido a Bottega Restaurante \nNuestro horario es: \n \n Desayunos de 6 a 12 \n Comidas de 13 a 16 \n Merienda de 17 a 19 \n Cenas de 20 a 24 \n \n Por favor, indique la hora en formato HH \n";
const noIncluido = "Ese plato no está incluido en el menú";



// Cartas
let CartaMediodia = 
  "Entrantes: \n" + EntrantesCarta + "\n \n" + "Principales: \n" + PrincipalesCarta + "\n \n" +"Postres \n" + PostresCarta;
let CartaNoche =
  "Entrantes: \n" + EntrantesCartaNoche + "\n \n" + "Principales: \n" + PrincipalesCartaNoche + "\n \n" + "Postres \n" + PostresCartaNoche;


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
        principalesPrompt = prompt(PrincipalesCarta);
        if (principalesPrompt === null) break;
        principalesVal = principalesKey.includes(principalesPrompt);
        if (!principalesVal) {
          alert(noIncluido);
        } else if (principalesVal) {
          alert(ComentarioCamarero());
        }
      }
      while (!postresVal) {
        postresPrompt = prompt(PostresCarta);
        if (postresPrompt === null) break;
        postresVal = postresKey.includes(postresPrompt);
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
        postresPrompt = prompt(PostresCartaNoche);
        if (postresPrompt === null) break;
        postresVal = postresKey.includes(postresPrompt);
        if (!postresVal) {
          alert(noIncluido);
        } else if (postresVal) {
          alert(ComentarioCamarero());
          alert("cuenta");
        }
      }
    }
  }
