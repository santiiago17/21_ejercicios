const habitaciones = {
    individual: { capacidad: 2, fumadores: false, mascotas: false, disponibles: 3 },
    doble: { capacidad: 4, fumadores: false, mascotas: false, disponibles: 3 },
    familiar: { capacidad: 6, fumadores: false, mascotas: true, disponibles: 3 },
  };
  
  const estadisticas = {
    reservas: [],
    personasOcupadas: 0,
  };
  
  function hacerReserva(nombre, tipo, fumadores, mascotas, personas, periodo) {
    const habitacion = habitaciones[tipo];
  
    if (habitacion.disponibles > 0 && personas <= habitacion.capacidad) {
      const reserva = {
        nombre,
        tipo,
        fumadores,
        mascotas,
        personas,
        periodo,
      };
  
      estadisticas.reservas.push(reserva);
      estadisticas.personasOcupadas += personas;
      habitacion.disponibles--;
  
      return `Reserva exitosa para ${nombre}.`;
    } else {
      return `No hay habitaciones disponibles de tipo ${tipo} para las fechas solicitadas o la cantidad de personas excede la capacidad de la habitación.`;
    }
  }
  
  function obtenerEstadisticas() {
    return {
      totalReservas: estadisticas.reservas.length,
      personasOcupadas: estadisticas.personasOcupadas,
      habitacionesDisponibles: {
        individual: habitaciones.individual.disponibles,
        doble: habitaciones.doble.disponibles,
        familiar: habitaciones.familiar.disponibles,
      },
    };
  }
  
  console.log(hacerReserva('Cliente 1', 'individual', false, false, 1, '01/09/2023 - 05/09/2023'));
  console.log(hacerReserva('Cliente 2', 'familiar', false, true, 4, '10/09/2023 - 15/09/2023'));
  console.log(hacerReserva('Cliente 3', 'doble', true, false, 3, '03/09/2023 - 07/09/2023'));
  
  console.log(obtenerEstadisticas());