function mostrarNotificacion(mensaje, tipo = "exito", duracionMs = 4000) {
  const contenedor = document.getElementById("notificaciones");
  if (!contenedor) return;

  const estilos = {
    exito: { fondo: "text-bg-success", icono: "bi-check-circle" },
    error: { fondo: "text-bg-danger", icono: "bi-exclamation-triangle" },
    info: { fondo: "text-bg-primary", icono: "bi-info-circle" }
  };
  const estilo = estilos[tipo] || estilos.exito;

  const toast = document.createElement("div");
  toast.className = `toast align-items-center border-0 ${estilo.fondo}`;
  toast.setAttribute("role", "alert");
  toast.setAttribute("aria-live", "assertive");
  toast.setAttribute("aria-atomic", "true");
  toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">
        <i class="bi ${estilo.icono} me-2"></i>${mensaje}
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto"
              data-bs-dismiss="toast" aria-label="Cerrar"></button>
    </div>`;

  contenedor.appendChild(toast);
  const instancia = new bootstrap.Toast(toast, { delay: duracionMs });
  instancia.show();
  toast.addEventListener("hidden.bs.toast", () => toast.remove());
}
