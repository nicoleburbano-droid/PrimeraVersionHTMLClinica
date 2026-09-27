const listaEspecialidades = document.getElementById("listaEspecialidades");
const panelDescripcion = document.getElementById("descripcionEspecialidad");
const TODAS = "todas";

function renderizarEspecialidades() {
  const especialidades = gestionarEspecialidades.listarEspecialidades();
  let html = `
    <button type="button" class="list-group-item list-group-item-action active" data-especialidad="${TODAS}">
      <i class="bi bi-grid me-2"></i>Todas
    </button>`;
  especialidades.forEach(especialidad => {
    html += `
      <button type="button" class="list-group-item list-group-item-action" data-especialidad="${especialidad.id}">
        <i class="bi ${especialidad.icono} me-2"></i>${especialidad.nombre}
      </button>`;
  });
  listaEspecialidades.innerHTML = html;
}

function mostrarDescripcion(idEspecialidad) {
  if (idEspecialidad === TODAS) {
    const total = gestionarMedicos.listarMedicos().length;
    panelDescripcion.innerHTML = `
      <h3 class="h6 mb-1">Equipo completo</h3>
      <p class="mb-0 small">${total} profesionales en seis especialidades. Toca una especialidad de la lista para saber
      en qué consiste y ver solo a quienes la atienden.</p>`;
    return;
  }
  const especialidad = gestionarEspecialidades.buscarEspecialidad(idEspecialidad);
  if (!especialidad) return;
  panelDescripcion.innerHTML = `
    <h3 class="h6 mb-1"><i class="bi ${especialidad.icono} me-2"></i>${especialidad.nombre}</h3>
    <p class="mb-0 small">${especialidad.descripcion}</p>`;
}

function seleccionarEspecialidad(idEspecialidad) {
  listaEspecialidades.querySelectorAll(".list-group-item").forEach(item => {
    item.classList.toggle("active", item.dataset.especialidad === idEspecialidad);
  });
  mostrarDescripcion(idEspecialidad);
  renderizarMedicos(idEspecialidad === TODAS ? null : idEspecialidad);
}

listaEspecialidades.addEventListener("click", (e) => {
  const item = e.target.closest(".list-group-item");
  if (!item) return;
  seleccionarEspecialidad(item.dataset.especialidad);
});

document.addEventListener("DOMContentLoaded", () => {
  renderizarEspecialidades();
  seleccionarEspecialidad(TODAS);
});
