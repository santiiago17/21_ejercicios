// La Champions League es la competición de fútbol más importante en el mundo. Se juega cada año entre los mejores equipos de Europa y es organizada por la Unión de Asociaciones Europeas de Fútbol (UEFA). Los equipos compiten por la Copa de Europa y la gloria de ser el mejor equipo. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Ingresar por el usuario el nombre del primer equipo
// b. Ingresar por el usuario el marcador del primer equipo.
// c. Ingresar por el usuario el nombre del segundo equipo
// d. Ingresar por el usuario el marcador del segundo equipo
// e. Hacer el ingreso para 3 fechas particulares de la Champions League.
// f. Mostrar Resultados de ranking de equipos.

function ingresarResultado(equipo, marcador) {
    let resultado = {
      equipo: equipo,
      marcador: marcador
    };
    return resultado;
  }
  
  function main() {
    let equipos = {};
  
    for (let i = 0; i < 3; i++) {
      let nombreEquipo1 = prompt("Ingrese el nombre del primer equipo");
      let marcadorEquipo1 = parseInt(prompt("Ingrese el marcador del primer equipo"));
  
      let nombreEquipo2 = prompt("Ingrese el nombre del segundo equipo");
      let marcadorEquipo2 = parseInt(prompt("Ingrese el marcador del segundo equipo"));
  
      let resultado1 = ingresarResultado(nombreEquipo1, marcadorEquipo1);
      let resultado2 = ingresarResultado(nombreEquipo2, marcadorEquipo2);
  
      equipos[nombreEquipo1] = equipos[nombreEquipo1] || 0;
      equipos[nombreEquipo2] = equipos[nombreEquipo2] || 0;
  
      if (marcadorEquipo1 > marcadorEquipo2) {
        equipos[nombreEquipo1] += 3;
      } else if (marcadorEquipo1 < marcadorEquipo2) {
        equipos[nombreEquipo2] += 3;
      } else {
        equipos[nombreEquipo1] += 1;
        equipos[nombreEquipo2] += 1;
      }
    }
  
    document.write("Resultados del ranking de equipos:");
  
    let ranking = Object.entries(equipos).sort((a, b) => b[1] - a[1]);
    for (let i = 0; i < ranking.length; i++) {
      document.write(`${i + 1}. ${ranking[i][0]} - ${ranking[i][1]} puntos`);
    }
  }
  
  main();