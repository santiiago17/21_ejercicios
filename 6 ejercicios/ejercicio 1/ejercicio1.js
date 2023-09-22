let totalUsuariosAtendidos = 9;
let atendidosPorDia = {};
let estadisticasPorModulo = {
  terminalLlamada: {
    estudiantes: 0,
    docentes: 8,
  },
  oficina: {
    estudiantes: 0,
    docentes: 0,
  },
};
let trasferencias = 0;

function atenderUsuario(modulo, tipoUsuario) {
  totalUsuariosAtendidos++;

  estadisticasPorModulo[modulo][tipoUsuario]++;

  const fechaActual = new Date().toISOString().split("T")[0];

  if (!atendidosPorDia[fechaActual]) {
    atendidosPorDia[fechaActual] = {
      estudiantes: 0,
      docentes: 0,
    };
  }

  atendidosPorDia[fechaActual][tipoUsuario]++;
}

function transferirUsuario(origen, destino, tipoUsuario) {
  trasferencias++;

  estadisticasPorModulo[origen][tipoUsuario]--;

  estadisticasPorModulo[destino][tipoUsuario]++;

  console.log(`Usuario transferido de ${origen} a ${destino}`);
}

atenderUsuario("terminalLlamada", "estudiantes");
atenderUsuario("oficina", "docentes");
transferirUsuario("terminalLlamada", "oficina", "estudiantes");

console.log("Estadísticas Generales:");
console.log("Total de Usuarios Atendidos:", totalUsuariosAtendidos);
console.log("Transferencias Realizadas:", trasferencias);
console.log("Estadísticas por Módulo:");
console.log(estadisticasPorModulo);
console.log("Atendidos por Día:");
console.log(atendidosPorDia);