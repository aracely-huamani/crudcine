export class Prestamo {
    _id?: string;
    socio: string;
    fecha: Date;
    cintaNumero: string;
  
    constructor(socio: string, fecha: Date, cintaNumero: string) {
      this.socio = socio;
      this.fecha = fecha;
      this.cintaNumero = cintaNumero;
    }
  }
  