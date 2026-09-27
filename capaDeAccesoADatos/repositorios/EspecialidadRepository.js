class EspecialidadRepository {
  constructor() {
    this.especialidades = [];
  }
  agregar(especialidad) { this.especialidades.push(especialidad); }
  obtenerTodas() { return this.especialidades; }
  buscarPorId(id) { return this.especialidades.find(e => e.id === id); }
}
const especialidadRepo = new EspecialidadRepository();
