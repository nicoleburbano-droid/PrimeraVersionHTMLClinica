class Paciente {
  constructor(id, nombres, apellidos, datosContacto = {}) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;

    this.tipoDocumento = datosContacto.tipoDocumento || "";
    this.numeroDocumento = datosContacto.numeroDocumento || "";
    this.fechaNacimiento = datosContacto.fechaNacimiento || "";
    this.correo = datosContacto.correo || "";
    this.celular = datosContacto.celular || "";
    this.sexo = datosContacto.sexo || "";
    this.aseguradora = datosContacto.aseguradora || "";
    this.recordatorios = datosContacto.recordatorios || false;

    // El correo es el dato que permite confirmar el registro
    this.codigoConfirmacion = "";
    this.confirmado = false;
  }

  nombreCompleto() {
    return `${this.nombres} ${this.apellidos}`;
  }
}
