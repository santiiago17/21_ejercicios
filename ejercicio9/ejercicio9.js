let totalAna = 0;
let totalDiego = 0;

function sistemaElectronico(){
for( let i = 1; i <= 10; i++ ) {
    let candidatos = parseInt(prompt(`Voto : ${i} Elige tu voto: (1)Ana Maria Suarez (2)Diego Acero`));
    if(candidatos == 1){
        totalAna ++;
    }else if(candidatos == 2){
        totalDiego ++;
    }
}
document.write(`La cantidad de votos de Ana Maria suarez es ${totalAna} votos `);
document.write('<br>');
document.write(`La cantidad de votos de Diego Acero es ${totalDiego} votos`);
}
sistemaElectronico();

function validate(){
    if(totalAna > totalDiego){
        document.write('<br>');
        document.write(`Ana Gana con ${totalAna} votos`);
    }else if(totalDiego > totalAna){
        document.write('<br>');
        document.write(`Diego Gana con ${totalDiego} votos`);
    }else if(totalDiego == totalAna){
        document.write('<br>');
        document.write('Empate entre los candidatos');
    }

}
validate();

// Un sistema de voto electrónico es una aplicación informática diseñada para permitir a los votantes emitir sus votos de forma electrónica. 
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. La cantidad de votantes son 10 personas
// b. Hay dos opciones de votos: 1. Ana Maria Suarez 2. Diego Acero
// c. El sistema debe ir sumando los votos de cada candidato.
// d. El sistema debe arrojar el ganador y perdedor de la votación
