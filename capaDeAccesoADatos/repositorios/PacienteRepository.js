class PacienteRepository {
  constructor() {
    this.pacientes = [];
  }
  agregar(paciente) { this.pacientes.push(paciente); }
  obtenerTodos() { return this.pacientes; }
  buscarPorId(id) { return this.pacientes.find(p => p.id === id); }
  buscarPorCorreo(correo) {
    return this.pacientes.find(p => p.correo.toLowerCase() === correo.toLowerCase());
  }
  obtenerConfirmados() { return this.pacientes.filter(p => p.confirmado); }
  siguienteId() { return this.pacientes.length + 1; }
}
const pacienteRepo = new PacienteRepository();
