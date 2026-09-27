// Datos con los que arranca la página.
// Los mismos médicos y especialidades que en la versión de Angular.

// ----- Especialidades de la barra lateral (sección 2) -----
gestionarEspecialidades.registrarEspecialidad(
  "terapia-neural",
  "Terapia Neural",
  "Regula el sistema nervioso autónomo aplicando anestésicos locales en dosis muy bajas sobre los puntos que mantienen activo el dolor. Se usa sobre todo en dolor crónico, migraña y cicatrices que siguen molestando años después.",
  "bi-activity"
);

gestionarEspecialidades.registrarEspecialidad(
  "quiropraxia",
  "Quiropraxia",
  "Devuelve movilidad a las articulaciones de la columna con ajustes manuales. Ayuda con el dolor lumbar y cervical, y con las molestias que deja pasar muchas horas sentado frente al computador.",
  "bi-person-arms-up"
);

gestionarEspecialidades.registrarEspecialidad(
  "fisioterapia",
  "Fisioterapia",
  "Recupera fuerza, movilidad y equilibrio con ejercicio terapéutico y agentes físicos. Acompaña la rehabilitación después de una cirugía, un esguince o una lesión deportiva hasta que puedas volver a tu rutina.",
  "bi-heart-pulse"
);

gestionarEspecialidades.registrarEspecialidad(
  "nutricion",
  "Nutrición y Dietética Terapéutica",
  "Usa la alimentación como parte del tratamiento. El plan se arma con tus exámenes, tus horarios y lo que de verdad comes, con seguimiento mensual para diabetes, hipertensión o control de peso.",
  "bi-basket"
);

gestionarEspecialidades.registrarEspecialidad(
  "medicina-deportiva",
  "Medicina Deportiva",
  "Previene y trata las lesiones de quienes entrenan, compiten o apenas están empezando. Incluye valoración de la técnica, planes de carga y readaptación progresiva al deporte.",
  "bi-trophy"
);

gestionarEspecialidades.registrarEspecialidad(
  "acupuntura",
  "Acupuntura",
  "Estimula puntos específicos del cuerpo con agujas muy finas para bajar el dolor y mejorar el descanso. Se combina bien con fisioterapia y terapia neural en dolores que llevan mucho tiempo.",
  "bi-pin-angle"
);

// ----- Médicos de la clínica (cartas de la sección 2) -----
gestionarMedicos.registrarMedico(
  "Iván", "Mosquera Lucumí", "terapia-neural", 14,
  "Universidad del Cauca, especialista en Terapia Neural",
  {
    titulo: "Dr.",
    subespecialidades: ["Dolor crónico", "Migraña"],
    motivacion: "Antes de quitar el dolor hay que entender por qué el cuerpo lo sigue produciendo.",
    foto: "img/medico.webp"
  }
);

gestionarMedicos.registrarMedico(
  "Juan", "Pérez Mera", "fisioterapia", 9,
  "Universidad del Valle, magíster en Rehabilitación Deportiva",
  {
    titulo: "Dr.",
    subespecialidades: ["Fisioterapia deportiva", "Rodilla y tobillo"],
    motivacion: "Comprometido con tu recuperación, sesión por sesión.",
    foto: "img/medico2.webp"
  }
);

gestionarMedicos.registrarMedico(
  "ian", "Somehalder Ruiz", "quiropraxia", 11,
  "Universidad Central de Chile, quiropráctico certificado",
  {
    titulo: "Dr.",
    subespecialidades: ["Ajuste vertebral", "Dolor lumbar"],
    motivacion: "Una columna que se mueve bien sostiene todo lo demás.",
    foto: "img/medico3.webp"
  }
);

gestionarMedicos.registrarMedico(
  "Andrés", "Cardozo Paz", "nutricion", 7,
  "Universidad Nacional, nutricionista clínico",
  {
    titulo: "Dr.",
    subespecialidades: ["Nutrición clínica", "Diabetes tipo 2"],
    motivacion: "Un plan que puedas sostener vale más que una dieta perfecta.",
    foto: "img/medico4.webp"
  }
);

gestionarMedicos.registrarMedico(
  "Monica", "Solarte Lopez", "terapia-neural", 16,
  "Universidad del Cauca, docente de Terapia Neural",
  {
    titulo: "Dra.",
    subespecialidades: ["Cicatrices interferentes", "Dolor pélvico"],
    motivacion: "Escuchar la historia completa ahorra exámenes innecesarios.",
    foto: "img/medico5.webp"
  }
);

gestionarMedicos.registrarMedico(
  "Laura", "Quintero Vela", "medicina-deportiva", 8,
  "Universidad de Antioquia, especialista en Medicina del Deporte",
  {
    titulo: "Dra.",
    subespecialidades: ["Lesiones deportivas", "Readaptación"],
    motivacion: "Volver a entrenar sin miedo también hace parte del tratamiento.",
    foto: "img/medico6.webp"
  }
);

gestionarMedicos.registrarMedico(
  "Sebastián", "Erazo Muñoz", "acupuntura", 12,
  "Universidad Nacional, formación en Medicina Tradicional China",
  {
    titulo: "Dr.",
    subespecialidades: ["Dolor miofascial", "Insomnio"],
    motivacion: "Dormir bien es el primer analgésico.",
    foto: "img/medico7.webp"
  }
);

gestionarMedicos.registrarMedico(
  "Manuel", "Paz Vidal", "fisioterapia", 6,
  "Fundación Universitaria María Cano, fisioterapeuta",
  {
    titulo: "Dr.",
    subespecialidades: ["Suelo pélvico", "Terapia respiratoria"],
    motivacion: "Los ejercicios de casa son los que sostienen el progreso.",
    foto: "img/medico8.webp"
  }
);
