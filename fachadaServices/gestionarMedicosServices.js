class GestionarMedicos {
  constructor(repoMedico) {
    this.repoMedico = repoMedico;
  }
  registrarMedico(nombre, apellido, especialidad, aniosExperiencia, bibliografia, presentacion = {}) {
    const id = this.repoMedico.siguienteId();
    const medico = new Medico(id, nombre, apellido, especialidad, aniosExperiencia, bibliografia, presentacion);
    this.repoMedico.agregar(medico);
    return medico;
  }
  listarMedicos() { return this.repoMedico.obtenerTodos(); }
  listarPorEspecialidad(idEspecialidad) {
    if (!idEspecialidad) return this.repoMedico.obtenerTodos();
    return this.repoMedico.buscarPorEspecialidad(idEspecialidad);
  }
  buscarMedico(id) { return this.repoMedico.buscarPorId(id); }
}
const gestionarMedicos = new GestionarMedicos(medicoRepo);
