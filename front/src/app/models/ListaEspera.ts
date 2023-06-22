export class ListaEspera {
    _id?: string;
    pelicula: string;
    socios: string[];
  
    constructor(pelicula: string, socios: string[]) {
      this.pelicula = pelicula;
      this.socios = socios;
    }
  }
  