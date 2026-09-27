class CitaRepository {
  constructor() {
    this.citas = [];
  }
  agregar(cita) { this.citas.push(cita); }
  obtenerTodas() { return this.citas; }
  buscarPorId(id) { return this.citas.find(c => c.id === id); }
  buscarPorMedicoYFecha(idMedico, fecha) {
    return this.citas.filter(c => c.medico.id === idMedico && c.fecha === fecha);
  }
  siguienteId() { return this.citas.length + 1; }
}
const citaRepo = new CitaRepository();
