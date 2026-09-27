/* Validaciones del formulario.
   Se disparan al cambiar el foco entre inputs (blur/change) y al dar clic en registrar (submit). */

function marcarCampo(campo, esValido) {
  if (!campo) return;
  campo.classList.remove("is-valid", "is-invalid");
  campo.classList.add(esValido ? "is-valid" : "is-invalid");
}

function limpiarMarcas(formulario) {
  formulario.querySelectorAll(".is-valid, .is-invalid")
    .forEach(campo => campo.classList.remove("is-valid", "is-invalid"));
  formulario.querySelectorAll("small.text-danger")
    .forEach(etiqueta => etiqueta.textContent = "");
}

function validarCampoObligatorio(campo, errorElement, mensaje) {
  if (campo.value.trim() === "") {
    errorElement.textContent = mensaje;
    marcarCampo(campo, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(campo, true);
  return true;
}

function validarLongitud(campo, errorElement, min, max, mensaje) {
  if (campo.value.trim().length < min || campo.value.trim().length > max) {
    errorElement.textContent = mensaje;
    marcarCampo(campo, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(campo, true);
  return true;
}

function validarSoloNumeros(campo, errorElement, min, max, mensaje) {
  const valor = campo.value.trim();
  const expresion = /^[0-9]+$/;
  if (!expresion.test(valor) || valor.length < min || valor.length > max) {
    errorElement.textContent = mensaje;
    marcarCampo(campo, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(campo, true);
  return true;
}

function validarCorreo(campo, errorElement, mensaje) {
  const expresion = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!expresion.test(campo.value.trim())) {
    errorElement.textContent = mensaje;
    marcarCampo(campo, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(campo, true);
  return true;
}

function validarCoincidencia(campoOriginal, campoCopia, errorElement, mensaje) {
  if (campoCopia.value.trim().toLowerCase() !== campoOriginal.value.trim().toLowerCase()
      || campoCopia.value.trim() === "") {
    errorElement.textContent = mensaje;
    marcarCampo(campoCopia, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(campoCopia, true);
  return true;
}

function validarSeleccion(select, errorElement, mensaje) {
  if (select.value === "") {
    errorElement.textContent = mensaje;
    marcarCampo(select, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(select, true);
  return true;
}

function validarGrupoRadio(nombreGrupo, errorElement, mensaje) {
  const seleccionado = document.querySelector(`input[name="${nombreGrupo}"]:checked`);
  if (!seleccionado) {
    errorElement.textContent = mensaje;
    return false;
  }
  errorElement.textContent = "";
  return true;
}

function validarCheckbox(checkbox, errorElement, mensaje) {
  if (!checkbox.checked) {
    errorElement.textContent = mensaje;
    marcarCampo(checkbox, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(checkbox, true);
  return true;
}

function validarFechaPasada(campo, errorElement, mensaje) {
  const hoy = new Date().toISOString().split("T")[0];
  if (campo.value === "" || campo.value > hoy) {
    errorElement.textContent = mensaje;
    marcarCampo(campo, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(campo, true);
  return true;
}

function validarFechaFutura(campo, errorElement, mensaje) {
  const hoy = new Date().toISOString().split("T")[0];
  if (campo.value === "" || campo.value < hoy) {
    errorElement.textContent = mensaje;
    marcarCampo(campo, false);
    return false;
  }
  errorElement.textContent = "";
  marcarCampo(campo, true);
  return true;
}

function validarRangoHoras(campoInicio, campoFin, errorElement, mensaje) {
  if (campoInicio.value !== "" && campoFin.value !== "" && campoFin.value <= campoInicio.value) {
    errorElement.textContent = mensaje;
    marcarCampo(campoFin, false);
    return false;
  }
  errorElement.textContent = "";
  return true;
}

function camposRegistro() {
  return {
    nombres: document.getElementById("nombresPaciente"),
    apellidos: document.getElementById("apellidosPaciente"),
    tipoDocumento: document.getElementById("tipoDocumento"),
    numeroDocumento: document.getElementById("numeroDocumento"),
    fechaNacimiento: document.getElementById("fechaNacimiento"),
    celular: document.getElementById("celular"),
    correo: document.getElementById("correo"),
    confirmarCorreo: document.getElementById("confirmarCorreo"),
    tratamientoDatos: document.getElementById("tratamientoDatos"),

    errorNombres: document.getElementById("errorNombresPaciente"),
    errorApellidos: document.getElementById("errorApellidosPaciente"),
    errorTipoDocumento: document.getElementById("errorTipoDocumento"),
    errorNumeroDocumento: document.getElementById("errorNumeroDocumento"),
    errorFechaNacimiento: document.getElementById("errorFechaNacimiento"),
    errorCelular: document.getElementById("errorCelular"),
    errorCorreo: document.getElementById("errorCorreo"),
    errorConfirmarCorreo: document.getElementById("errorConfirmarCorreo"),
    errorSexo: document.getElementById("errorSexo"),
    errorTratamientoDatos: document.getElementById("errorTratamientoDatos")
  };
}

function validarFormularioRegistro() {
  const c = camposRegistro();

  const nombresValidos = validarCampoObligatorio(c.nombres, c.errorNombres, "Los nombres son obligatorios")
    && validarLongitud(c.nombres, c.errorNombres, 3, 40, "Los nombres deben tener entre 3 y 40 caracteres");

  const apellidosValidos = validarCampoObligatorio(c.apellidos, c.errorApellidos, "Los apellidos son obligatorios")
    && validarLongitud(c.apellidos, c.errorApellidos, 3, 40, "Los apellidos deben tener entre 3 y 40 caracteres");

  const tipoDocumentoValido = validarSeleccion(c.tipoDocumento, c.errorTipoDocumento, "Selecciona el tipo de documento");

  const numeroDocumentoValido = validarCampoObligatorio(c.numeroDocumento, c.errorNumeroDocumento, "El número de documento es obligatorio")
    && validarSoloNumeros(c.numeroDocumento, c.errorNumeroDocumento, 6, 12, "El documento debe tener entre 6 y 12 dígitos, sin puntos ni letras");

  const fechaNacimientoValida = validarFechaPasada(c.fechaNacimiento, c.errorFechaNacimiento, "Ingresa una fecha de nacimiento válida");

  const celularValido = validarCampoObligatorio(c.celular, c.errorCelular, "El celular es obligatorio")
    && validarSoloNumeros(c.celular, c.errorCelular, 10, 10, "El celular debe tener 10 dígitos");

  const correoValido = validarCampoObligatorio(c.correo, c.errorCorreo, "El correo es obligatorio")
    && validarCorreo(c.correo, c.errorCorreo, "Escribe un correo con el formato nombre@correo.com");

  const confirmacionValida = validarCoincidencia(c.correo, c.confirmarCorreo, c.errorConfirmarCorreo, "Los dos correos deben ser iguales");

  const sexoValido = validarGrupoRadio("sexo", c.errorSexo, "Selecciona una opción");

  const datosAutorizados = validarCheckbox(c.tratamientoDatos, c.errorTratamientoDatos, "Debes autorizar el tratamiento de datos para continuar");

  return nombresValidos && apellidosValidos && tipoDocumentoValido && numeroDocumentoValido
    && fechaNacimientoValida && celularValido && correoValido && confirmacionValida
    && sexoValido && datosAutorizados;
}

function validarCamposRegistroAlCambiarFoco() {
  const c = camposRegistro();
  if (!c.nombres) return;

  c.nombres.addEventListener("blur", () =>
    validarCampoObligatorio(c.nombres, c.errorNombres, "Los nombres son obligatorios")
    && validarLongitud(c.nombres, c.errorNombres, 3, 40, "Los nombres deben tener entre 3 y 40 caracteres"));

  c.apellidos.addEventListener("blur", () =>
    validarCampoObligatorio(c.apellidos, c.errorApellidos, "Los apellidos son obligatorios")
    && validarLongitud(c.apellidos, c.errorApellidos, 3, 40, "Los apellidos deben tener entre 3 y 40 caracteres"));

  c.tipoDocumento.addEventListener("change", () =>
    validarSeleccion(c.tipoDocumento, c.errorTipoDocumento, "Selecciona el tipo de documento"));

  c.numeroDocumento.addEventListener("blur", () =>
    validarCampoObligatorio(c.numeroDocumento, c.errorNumeroDocumento, "El número de documento es obligatorio")
    && validarSoloNumeros(c.numeroDocumento, c.errorNumeroDocumento, 6, 12, "El documento debe tener entre 6 y 12 dígitos, sin puntos ni letras"));

  c.fechaNacimiento.addEventListener("blur", () =>
    validarFechaPasada(c.fechaNacimiento, c.errorFechaNacimiento, "Ingresa una fecha de nacimiento válida"));

  c.celular.addEventListener("blur", () =>
    validarCampoObligatorio(c.celular, c.errorCelular, "El celular es obligatorio")
    && validarSoloNumeros(c.celular, c.errorCelular, 10, 10, "El celular debe tener 10 dígitos"));

  c.correo.addEventListener("blur", () =>
    validarCampoObligatorio(c.correo, c.errorCorreo, "El correo es obligatorio")
    && validarCorreo(c.correo, c.errorCorreo, "Escribe un correo con el formato nombre@correo.com"));

  c.confirmarCorreo.addEventListener("blur", () =>
    validarCoincidencia(c.correo, c.confirmarCorreo, c.errorConfirmarCorreo, "Los dos correos deben ser iguales"));

  document.querySelectorAll('input[name="sexo"]').forEach(radio =>
    radio.addEventListener("change", () =>
      validarGrupoRadio("sexo", c.errorSexo, "Selecciona una opción")));

  c.tratamientoDatos.addEventListener("change", () =>
    validarCheckbox(c.tratamientoDatos, c.errorTratamientoDatos, "Debes autorizar el tratamiento de datos para continuar"));
}

function camposCita() {
  return {
    paciente: document.getElementById("pacienteSelect"),
    fecha: document.getElementById("fecha"),
    horaInicio: document.getElementById("horaInicio"),
    horaFin: document.getElementById("horaFin"),

    errorPaciente: document.getElementById("errorPacienteSelect"),
    errorFecha: document.getElementById("errorFecha"),
    errorHoraInicio: document.getElementById("errorHoraInicio"),
    errorHoraFin: document.getElementById("errorHoraFin")
  };
}

function validarFormularioCita() {
  const c = camposCita();

  const pacienteValido = validarSeleccion(c.paciente, c.errorPaciente, "Selecciona el paciente de la cita");
  const fechaValida = validarFechaFutura(c.fecha, c.errorFecha, "La cita debe ser de hoy en adelante");
  const horaInicioValida = validarCampoObligatorio(c.horaInicio, c.errorHoraInicio, "La hora de inicio es obligatoria");
  const horaFinValida = validarCampoObligatorio(c.horaFin, c.errorHoraFin, "La hora de fin es obligatoria")
    && validarRangoHoras(c.horaInicio, c.horaFin, c.errorHoraFin, "La hora de fin debe ser mayor que la de inicio");

  return pacienteValido && fechaValida && horaInicioValida && horaFinValida;
}

function validarCamposCitaAlCambiarFoco() {
  const c = camposCita();
  if (!c.fecha) return;

  c.paciente.addEventListener("change", () =>
    validarSeleccion(c.paciente, c.errorPaciente, "Selecciona el paciente de la cita"));

  c.fecha.addEventListener("blur", () =>
    validarFechaFutura(c.fecha, c.errorFecha, "La cita debe ser de hoy en adelante"));

  c.horaInicio.addEventListener("blur", () =>
    validarCampoObligatorio(c.horaInicio, c.errorHoraInicio, "La hora de inicio es obligatoria"));

  c.horaFin.addEventListener("blur", () =>
    validarCampoObligatorio(c.horaFin, c.errorHoraFin, "La hora de fin es obligatoria")
    && validarRangoHoras(c.horaInicio, c.horaFin, c.errorHoraFin, "La hora de fin debe ser mayor que la de inicio"));
}

document.addEventListener("DOMContentLoaded", () => {
  validarCamposRegistroAlCambiarFoco();
  validarCamposCitaAlCambiarFoco();
});
