export class Prestamo {
  _id?: string;
  socio: string;
  estado: string;
  fecha: Date;
  cintaNumero: string;

  constructor(socio: string, fecha: Date, estado: string, cintaNumero: string) {
    this.socio = socio;
    this.fecha = fecha;
    this.estado = estado;
    this.cintaNumero = cintaNumero;
  }
}
