// El concesionario de carros “VenXtucarro” es un lugar donde los compradores pueden comprar un carro nuevo o usado. Estos establecimientos generalmente están asociados con una marca de automóviles específica y tienen un inventario de vehículos nuevos. Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. El usuario debe ingresar una marca de carros entre Chevrolet-Mazda y Renault.
// b. Dependiendo de la marca, se seleccionará una de dos referencias por marca ejemplo: captiva -traker
// c. El sistema le mostrara toda la información de cada una de las referencias en particular.

const marca = prompt("Ingrese la marca de carros (Chevrolet, Mazda o Renault):").toLowerCase();


let referencias;

switch (marca) {
  case "chevrolet":
    referencias = ["Captiva", "Tracker"];
    break;
  case "mazda":
    referencias = ["Mazda3", "Mazda6"];
    break;
  case "renault":
    referencias = ["Duster", "Clio"];
    break;
  default:
    console.log("Marca de carros no válida.");
}


if (referencias) {
  console.log(`Referencias disponibles para la marca ${marca}:`);
  for (let i = 0; i < referencias.length; i++) {
    console.log(`${i + 1}. ${referencias[i]}`);
  }


  const seleccion = parseInt(prompt("Seleccione una referencia (1 o 2):"));

  if (seleccion >= 1 && seleccion <= 2) {
    const referenciaSeleccionada = referencias[seleccion - 1];
    console.log(`Información de ${referenciaSeleccionada}:`);

  } else {
    console.log("Selección no válida.");
  }
}
