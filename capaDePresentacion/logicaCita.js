const formCitas = document.getElementById("formCitas");
const tablaCitas = document.getElementById("tablaCitas");
const filaSinCitas = document.getElementById("filaSinCitas");
const pacienteSelect = document.getElementById("pacienteSelect");
const avisoSinPacientes = document.getElementById("avisoSinPacientes");
const btnAgregarCita = document.getElementById("btnAgregarCita");
const modalCita = new bootstrap.Modal(document.getElementById("modalCita"));

function actualizarSelectPacientes() {
  const pacientes = gestionarPacientes.listarConfirmados();
  pacienteSelect.innerHTML = '<option value="">Selecciona…</option>'
    + pacientes.map(p => `<option value="${p.id}">${p.nombreCompleto()}</option>`).join("");
  const sinPacientes = pacientes.length === 0;
  avisoSinPacientes.classList.toggle("d-none", !sinPacientes);
  btnAgregarCita.disabled = sinPacientes;
  pacienteSelect.disabled = sinPacientes;
}

function abrirModalCita(idMedico) {
  const medico = gestionarMedicos.buscarMedico(idMedico);
  if (!medico) return;
  document.getElementById("medicoId").value = medico.id;
  document.getElementById("medicoSeleccionado").innerHTML =
    `Cita con <strong>${medico.nombreCompleto()}</strong>, ${gestionarEspecialidades.nombreDe(medico.especialidad)}.`;
  formCitas.reset();
  limpiarMarcas(formCitas);
  actualizarSelectPacientes();
  modalCita.show();
}

formCitas.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validarFormularioCita()) {
    mostrarNotificacion("Revisa los datos de la cita", "error");
    return;
  }
  const idMedico = parseInt(document.getElementById("medicoId").value);
  const idPaciente = parseInt(pacienteSelect.value);
  try {
    const cita = gestionarCitas.registrarCita(
      document.getElementById("fecha").value,
      document.getElementById("horaInicio").value,
      document.getElementById("horaFin").value,
      idMedico, idPaciente
    );
    agregarFilaCita(cita);
    modalCita.hide();
    mostrarNotificacion(`Cita agendada para el ${cita.fecha} a las ${cita.horaInicio}`);
  } catch (error) {
    mostrarNotificacion(error.message, "error");
  }
});

function agregarFilaCita(cita) {
  if (filaSinCitas) filaSinCitas.remove();
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>${cita.fecha}</td>
    <td>${cita.horaInicio}</td>
    <td>${cita.horaFin}</td>
    <td>${cita.medico.nombreCompleto()}</td>
    <td>${cita.paciente.nombreCompleto()}</td>`;
  tablaCitas.appendChild(fila);
}

document.addEventListener("DOMContentLoaded", actualizarSelectPacientes);
