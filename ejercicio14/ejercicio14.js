// Escriba un programa que dado un numero de tabla de multiplicar las imprima en la consola.
function imprimirTablaMultiplicar(numero) {
    document.write(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      document.write(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  function main() {
    let numero = parseInt(prompt("Ingrese el número de la tabla de multiplicar que desea imprimir"));
  
    if (isNaN(numero)) {
      document.write("Error: Ingrese un número válido.");
    } else {
      imprimirTablaMultiplicar(numero);
    }
  }
  
  main(); 