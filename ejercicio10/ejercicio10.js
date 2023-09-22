// Un examen de conocimientos es una prueba diseñada para evaluar el conocimiento y comprensión de un tema o disciplina específica. 
// Hacer un programa en JavaScript que cumpla los siguientes requisitos o características (programa básico-simulación):
// a. Se debe presentar 5 preguntas (sea de selección múltiple o verdadero-falso.
// b. Cada pregunta debe ser evaluada si fue correcta o no su respuesta.
// c. Si la opción es correcta se suma 10 puntos por cada pregunta.
// d. Se debe mostrar los resultados del examen.+


const preguntas = [
    {
      pregunta: "¿Cuál es la capital de Francia?",
      opciones: ["Londres", "París", "Madrid", "Berlín"],
      respuestaCorrecta: 1, 
    },
    {
      pregunta: "¿Cuál es el planeta más grande del sistema solar?",
      opciones: ["Venus", "Marte", "Júpiter", "Saturno"],
      respuestaCorrecta: 2, 
    },
    {
      pregunta: "¿La Tierra es plana? (Verdadero o Falso)",
      respuestaCorrecta: false, 
    },
    {
      pregunta: "¿Cuál es el número atómico del oxígeno?",
      opciones: ["8", "10", "12", "14"],
      respuestaCorrecta: 0, 
    },
    {
      pregunta: "¿Quién escribió 'Romeo y Julieta'?",
      opciones: ["Charles Dickens", "Jane Austen", "William Shakespeare", "F. Scott Fitzgerald"],
      respuestaCorrecta: 2, 
    },
  ];
  

  let puntuacion = 0;
  
 
  for (let i = 0; i < preguntas.length; i++) {
    const pregunta = preguntas[i];
  
    if (pregunta.opciones) {
      console.log(`Pregunta ${i + 1}: ${pregunta.pregunta}`);
      for (let j = 0; j < pregunta.opciones.length; j++) {
        console.log(`${j + 1}. ${pregunta.opciones[j]}`);
      }
      const respuesta = parseInt(prompt("Seleccione la opción correcta (1, 2, 3, 4):")) - 1;
      if (respuesta === pregunta.respuestaCorrecta) {
        puntuacion += 10;
      }
    } else {
      const respuesta = prompt(pregunta.pregunta + " (Verdadero o Falso):").toLowerCase();
      if ((respuesta === "verdadero" && pregunta.respuestaCorrecta) || (respuesta === "falso" && !pregunta.respuestaCorrecta)) {
        puntuacion += 10;
      }
    }
  }
  
 
  console.log(`Puntuación total: ${puntuacion} puntos`);