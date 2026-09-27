class GestionarEspecialidades {
  constructor(repoEspecialidad) {
    this.repoEspecialidad = repoEspecialidad;
  }
  registrarEspecialidad(id, nombre, descripcion, icono) {
    const especialidad = new Especialidad(id, nombre, descripcion, icono);
    this.repoEspecialidad.agregar(especialidad);
    return especialidad;
  }
  listarEspecialidades() { return this.repoEspecialidad.obtenerTodas(); }
  buscarEspecialidad(id) { return this.repoEspecialidad.buscarPorId(id); }
  nombreDe(id) {
    const especialidad = this.buscarEspecialidad(id);
    return especialidad ? especialidad.nombre : id;
  }
}
const gestionarEspecialidades = new GestionarEspecialidades(especialidadRepo);
