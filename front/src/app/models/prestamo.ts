export class Prestamo {
    _id?: string;
    socio: string;
    Estado: string;
    fecha: Date;
    cintaNumero: string;
  
    constructor(socio: string, fecha: Date,  Estado: string ,cintaNumero: string) {
      this.socio = socio;
      this.fecha = fecha;
      this.Estado = Estado;
      this.cintaNumero = cintaNumero;
    }
  }
  