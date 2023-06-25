import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  url = 'http://localhost:4000/api/generate-pdf/';

  constructor(private http: HttpClient) { 

  }

  getPDF(): Observable<any> {
    return this.http.get(this.url);
  }

}