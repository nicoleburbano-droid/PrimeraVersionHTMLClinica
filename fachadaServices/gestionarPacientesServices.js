class GestionarPacientes {
  constructor(repoPaciente) {
    this.repoPaciente = repoPaciente;
  }
  registrarPaciente(nombre, apellido, datosContacto = {}) {
    if (datosContacto.correo && this.repoPaciente.buscarPorCorreo(datosContacto.correo)) {
      throw new Error("Ese correo ya tiene una cuenta registrada");
    }
    const id = this.repoPaciente.siguienteId();
    const paciente = new Paciente(id, nombre, apellido, datosContacto);
    paciente.codigoConfirmacion = this.generarCodigoConfirmacion();
    this.repoPaciente.agregar(paciente);
    return paciente;
  }
  generarCodigoConfirmacion() {
    return String(Math.floor(100000 + Math.random() * 900000));
  }
  confirmarRegistro(idPaciente, codigo) {
    const paciente = this.repoPaciente.buscarPorId(idPaciente);
    if (!paciente) throw new Error("Paciente no encontrado");
    if (paciente.codigoConfirmacion !== codigo.trim()) {
      throw new Error("El código no coincide con el que enviamos al correo");
    }
    paciente.confirmado = true;
    return paciente;
  }
  listarPacientes() { return this.repoPaciente.obtenerTodos(); }
  listarConfirmados() { return this.repoPaciente.obtenerConfirmados(); }
  buscarPaciente(id) { return this.repoPaciente.buscarPorId(id); }
}
const gestionarPacientes = new GestionarPacientes(pacienteRepo);
