class Medico {
  constructor(id, nombres, apellidos, especialidad, aniosExperiencia, bibliografia, presentacion = {}) {
    this.id = id;
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.especialidad = especialidad; // id de la especialidad
    this.aniosExperiencia = aniosExperiencia;
    this.bibliografia = bibliografia;

    this.titulo = presentacion.titulo || "Dr.";
    this.subespecialidades = presentacion.subespecialidades || [];
    this.motivacion = presentacion.motivacion || "";
    this.foto = presentacion.foto || "img/medico.webp";
  }

  nombreCompleto() {
    return `${this.titulo} ${this.nombres} ${this.apellidos}`;
  }
}
