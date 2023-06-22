import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListaEspera } from '../models/ListaEspera';

@Injectable({
  providedIn: 'root'
})
export class ListaEsperaService {
  url = 'http://localhost:4000/api/ListaEspera/';

  constructor(private http: HttpClient) { }

  getListaEspera(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteListaEspera(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarListaEspera(listaEspera: ListaEspera): Observable<any> {
    return this.http.post(this.url, listaEspera);
  }

  getListaEsperaPelicula(idPelicula: string): Observable<any> {
    return this.http.get(this.url + 'pelicula/' + idPelicula);
  }

  agregarSocioALista(idLista: string, idSocio: string): Observable<any> {
    return this.http.put(this.url + idLista + '/agregar-socio/' + idSocio, {});
  }

  eliminarSocioDeLista(idLista: string, idSocio: string): Observable<any> {
    return this.http.put(this.url + idLista + '/eliminar-socio/' + idSocio, {});
  }
}
