
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. El cliente escoge entre dos servicios: lavado o planchado.
// b. Si es lavado, se solicita el tipo de lavado 1. En seco o 2. Normal
// c. Se solicita la cantidad de prendas.
// d. Se calcula el costo de los servicios teniendo en cuenta la lista de precios:
// • Lavado en seco: 2000 por prenda
// • Lavado normal: 1500 por prenda
// • Planchado: 1800 por prenda
// e. Adicional se cobra un domicilio de 3000 solo si es planchado; para otros servicios es gratis.

const lavadoSeco = 2000;
const lavadoNormal = 1500;
const planchado = 1800;
const domicilio = 3000;
costoTotal = 0;

function lavaYa(){
    // Pedirle al usuario que escoga algun servicio
    let servicio = parseInt(prompt('Escoge entre dos servicios:  1.lavado  2.planchado'));
    if(servicio === 1){
        // pedirle al usuario que eliga el tipo de lavado 
        let tipoLavado = parseInt(prompt('elige el tipo de lavado:  1.seco  2.normal'));
        if(tipoLavado === 1){
            // pedirle al usuario la cantidad de prendas 
            let cantidadPrendas = parseInt(prompt('cantidad prendas'));
            costoTotal = lavadoSeco*cantidadPrendas;
        }else if(tipoLavado === 2){
            costoTotal = lavadoNormal*cantidadPrendas;
        }else{
            alert('tipo de dato no valido');
        }
        }else if(servicio === 2){
            cantidadPrendas =  parseInt(prompt('cantidad prendas'));
            costoTotal = planchado*cantidadPrendas + domicilio;
        }else{
            alert('tipo de dato no valido')
        }
            alert(`El Costo total es: ${costoTotal} `);
}
lavaYa();



























  




