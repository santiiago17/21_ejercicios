// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se solicita al usuario el tamaño del stikers, pequeño o grande.
// • Costo pequeño es de 4000 y costo del grande 6000
// b. Se pide al usuario la cantidad de estikers teniendo en cuenta que solo se pueden enviar mínimo 10; Sino debe indicarse al usuario un numero correcto.
// c. El sistema debe arrojar cuanto es el costo total para pagar




const costoPequeño = 4000;
const costoGrande = 6000;
costoTotal = 0;
cantidad = 0;

function etiquetas(){
    let tamaño = parseInt(prompt('Elige el tamaño de sticker: 1.pequeño  2.grande'));
    if(tamaño == 1){
        cantidad = parseInt(prompt('Elige cantidad de stickers'));
        if(cantidad <= 10){
            alert('Minimo 10 stickers puedes enviar');
        }else if(cantidad >= 11){
            costoTotal = cantidad * costoPequeño;
            alert(`El costo total es : ${costoTotal}`);
        }    
    }
    if(tamaño == 2){
        cantidad = parseInt(prompt('Elige cantidad de stickers'));
        if(cantidad <= 10){
            alert('puedes enviar stickers');
        }else{(cantidad >=11)
            costoTotal = cantidad * costoGrande;
            alert(`El costo total es: ${costoTotal}`);

        } 
    }   

    
    
}
etiquetas();



