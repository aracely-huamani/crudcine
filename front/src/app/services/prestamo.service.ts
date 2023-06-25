import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prestamo } from '../models/prestamo';

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {
  url = 'http://localhost:4000/api/prestamos/';
  pdf = 'http://localhost:4000/api/generate-pdf/';

  constructor(private http: HttpClient) { }

  getPDF(): Observable<any> {
    return this.http.get(this.pdf, { responseType: 'blob' })
  }

  getPrestamos(): Observable<any> {
    return this.http.get(this.url);
  }

  deletePrestamo(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  guardarPrestamo(prestamo: Prestamo): Observable<any> {
    return this.http.post(this.url, prestamo);
  }

  viewPrestamo(id?: string): Observable<any> {
    return this.http.get(this.url + id)
  }

  getPrestamo(id: string): Observable<any> {
    return this.http.get(this.url + id);
  }

  actualizarPrestamo(id: string, prestamo: Prestamo): Observable<any> {
    return this.http.put(this.url + id, prestamo);
  }
}
