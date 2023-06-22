import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  url = 'http://localhost:4000/api/prestamos/';

  constructor(private http: HttpClient) { }

  getPrestamos(): Observable<any> {
    return this.http.get(this.url);
  }

  deletePrestamo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPrestamo(prestamo: Prestamo): Observable<any> {
    return this.http.post(this.url, prestamo);
  }

  getPrestamo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarPrestamo(id: string, prestamo: Prestamo): Observable<any> {
    return this.http.put(this.url + id, prestamo);
  }
}
