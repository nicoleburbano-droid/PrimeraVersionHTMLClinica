class GestionarCitas {
  constructor(medicoRepo, pacienteRepo, citaRepo) {
    this.medicoRepo = medicoRepo;
    this.pacienteRepo = pacienteRepo;
    this.citaRepo = citaRepo;
  }
  validarHoras(horaInicio, horaFin) {
    if (horaFin <= horaInicio) throw new Error("La hora de fin debe ser mayor que la hora de inicio");
  }
  validarDisponibilidad(idMedico, fecha, horaInicio, horaFin) {
    const ocupadas = this.citaRepo.buscarPorMedicoYFecha(idMedico, fecha);
    const cruce = ocupadas.some(c => horaInicio < c.horaFin && horaFin > c.horaInicio);
    if (cruce) throw new Error("El médico ya tiene una cita en ese horario");
  }
  registrarCita(fecha, horaInicio, horaFin, idMedico, idPaciente) {
    this.validarHoras(horaInicio, horaFin);
    const medico = this.medicoRepo.buscarPorId(idMedico);
    if (!medico) throw new Error("Médico no encontrado");
    const paciente = this.pacienteRepo.buscarPorId(idPaciente);
    if (!paciente) throw new Error("Paciente no encontrado");
    if (!paciente.confirmado) throw new Error("El paciente debe confirmar su correo antes de agendar la cita");
    this.validarDisponibilidad(idMedico, fecha, horaInicio, horaFin);
    const id = this.citaRepo.siguienteId();
    const cita = new Cita(id, fecha, horaInicio, horaFin, medico, paciente);
    this.citaRepo.agregar(cita);
    return cita;
  }
  listarCitas() { return this.citaRepo.obtenerTodas(); }
  buscarCita(id) { return this.citaRepo.buscarPorId(id); }
}
const gestionarCitas = new GestionarCitas(medicoRepo, pacienteRepo, citaRepo);
