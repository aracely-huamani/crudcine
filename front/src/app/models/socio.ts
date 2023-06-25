export class Socio {
    id?: string;
    nombre: string;
    direccion: string;
    telefono: string;
    directoresFavoritos: string[];
    actoresFavoritos: string[];
    generosPreferidos: string[];
  
    constructor(
      nombre: string,
      direccion: string,
      telefono: string,
      directoresFavoritos: string[],
      actoresFavoritos: string[],
      generosPreferidos: string[]
    ) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.directoresFavoritos = directoresFavoritos;
      this.actoresFavoritos = actoresFavoritos;
      this.generosPreferidos = generosPreferidos;
    }
  }
  