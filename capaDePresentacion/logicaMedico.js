const contenedorMedicos = document.getElementById("contenedorMedicos");

function construirCartaMedico(medico) {
  const especialidad = gestionarEspecialidades.nombreDe(medico.especialidad);
  const subespecialidades = medico.subespecialidades.join(", ");
  return `
    <div class="col">
      <article class="card h-100 tarjeta-medico">
        <img src="${medico.foto}" class="card-img-top img-fluid border"
             alt="Retrato de ${medico.nombreCompleto()}">
        <div class="card-body d-flex flex-column">
          <h3 class="h6 nombre-medico mb-1">${medico.nombreCompleto()}</h3>
          <p class="especialidad-medico mb-1"><i class="bi bi-hospital me-1"></i>${especialidad}</p>
          <p class="subespecialidades mb-2"><i class="bi bi-patch-check me-1"></i>${subespecialidades}</p>
          <p class="motivacion flex-grow-1">"${medico.motivacion}"</p>
          <p class="experiencia mb-2"><i class="bi bi-award me-1"></i>${medico.aniosExperiencia} años de experiencia</p>
          <button type="button" class="btn btn-primary btn-sm w-100 btn-agendar" data-medico="${medico.id}">
            <i class="bi bi-calendar-plus me-1"></i>Agendar cita
          </button>
        </div>
      </article>
    </div>`;
}

function renderizarMedicos(idEspecialidad) {
  const medicos = gestionarMedicos.listarPorEspecialidad(idEspecialidad);
  if (medicos.length === 0) {
    contenedorMedicos.innerHTML = `
      <div class="col-12">
        <p class="text-body-secondary mb-0">Por ahora no hay médicos disponibles en esta especialidad.
        Escríbenos y te avisamos cuando abramos la agenda.</p>
      </div>`;
    return;
  }
  contenedorMedicos.innerHTML = medicos.map(construirCartaMedico).join("");
}

contenedorMedicos.addEventListener("click", (e) => {
  const boton = e.target.closest(".btn-agendar");
  if (!boton) return;
  abrirModalCita(parseInt(boton.dataset.medico));
});
