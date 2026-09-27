const formRegistro = document.getElementById("formRegistro");
const panelConfirmacion = document.getElementById("panelConfirmacion");
const textoConfirmacion = document.getElementById("textoConfirmacion");
const inputCodigo = document.getElementById("codigoConfirmacion");
const errorCodigo = document.getElementById("errorCodigoConfirmacion");
const btnConfirmar = document.getElementById("btnConfirmar");

let pacientePendiente = null;

formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validarFormularioRegistro()) {
    mostrarNotificacion("Revisa los campos marcados en rojo", "error");
    return;
  }
  const datosContacto = {
    tipoDocumento: document.getElementById("tipoDocumento").value,
    numeroDocumento: document.getElementById("numeroDocumento").value.trim(),
    fechaNacimiento: document.getElementById("fechaNacimiento").value,
    correo: document.getElementById("correo").value.trim(),
    celular: document.getElementById("celular").value.trim(),
    sexo: document.querySelector('input[name="sexo"]:checked').value,
    aseguradora: document.getElementById("aseguradora").value,
    recordatorios: document.getElementById("recordatorios").checked
  };
  try {
    pacientePendiente = gestionarPacientes.registrarPaciente(
      document.getElementById("nombresPaciente").value.trim(),
      document.getElementById("apellidosPaciente").value.trim(),
      datosContacto
    );
    textoConfirmacion.textContent =
      `Enviamos un código de 6 dígitos a ${pacientePendiente.correo}. Escríbelo aquí para activar tu cuenta.`;
    panelConfirmacion.classList.remove("d-none");
    inputCodigo.value = "";
    errorCodigo.textContent = "";
    panelConfirmacion.scrollIntoView({ behavior: "smooth", block: "center" });
    mostrarNotificacion(
      `Código enviado al correo (simulación): <strong>${pacientePendiente.codigoConfirmacion}</strong>`,
      "info", 12000
    );
    formRegistro.reset();
    limpiarMarcas(formRegistro);
  } catch (error) {
    mostrarNotificacion(error.message, "error");
  }
});

btnConfirmar.addEventListener("click", () => {
  if (!pacientePendiente) return;
  try {
    const paciente = gestionarPacientes.confirmarRegistro(pacientePendiente.id, inputCodigo.value);
    errorCodigo.textContent = "";
    panelConfirmacion.classList.add("d-none");
    pacientePendiente = null;
    actualizarSelectPacientes();
    mostrarNotificacion(`Cuenta confirmada. Bienvenido, ${paciente.nombres}, ya puedes agendar tu cita.`);
  } catch (error) {
    errorCodigo.textContent = error.message;
  }
});

document.getElementById("btnLimpiar").addEventListener("click", () => {
  limpiarMarcas(formRegistro);
});
